/**
 * Meta (Facebook) Pixel Tracking Utility
 * Pixel ID: 2631985213852287
 * 
 * Provides safe wrappers for Meta Pixel events with deduplication support
 */

declare global {
  interface Window {
    fbq?: (...args: any[]) => void;
  }
}

// Event deduplication tracking
const firedEvents = new Set<string>();

/**
 * Generate unique event ID for deduplication
 */
export function newEventId(): string {
  return crypto?.randomUUID?.() ?? `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

/**
 * Safe wrapper for Meta Pixel PageView
 */
export function metaPageView(): void {
  if (!window.fbq) {
    console.warn('Meta Pixel not loaded');
    return;
  }
  
  console.log('🔥 Meta Pixel: PageView');
  window.fbq('track', 'PageView');
}

/**
 * Safe wrapper for Meta Pixel standard events
 */
export function metaTrack(
  eventName: string, 
  params?: Record<string, any>, 
  eventID?: string
): void {
  if (!window.fbq) {
    console.warn('Meta Pixel not loaded');
    return;
  }

  // Deduplication check
  if (eventID) {
    const dedupeKey = `${eventName}-${eventID}`;
    if (firedEvents.has(dedupeKey)) {
      console.log(`🚫 Meta Pixel: ${eventName} already fired with ID ${eventID}`);
      return;
    }
    firedEvents.add(dedupeKey);
  }

  console.log(`🔥 Meta Pixel: ${eventName}`, params, eventID ? `[ID: ${eventID}]` : '');
  
  if (eventID) {
    window.fbq('track', eventName, params ?? {}, { eventID });
  } else {
    window.fbq('track', eventName, params ?? {});
  }
}

/**
 * Safe wrapper for Meta Pixel custom events
 */
export function metaTrackCustom(
  eventName: string, 
  params?: Record<string, any>, 
  eventID?: string
): void {
  if (!window.fbq) {
    console.warn('Meta Pixel not loaded');
    return;
  }

  // Deduplication check
  if (eventID) {
    const dedupeKey = `custom-${eventName}-${eventID}`;
    if (firedEvents.has(dedupeKey)) {
      console.log(`🚫 Meta Custom: ${eventName} already fired with ID ${eventID}`);
      return;
    }
    firedEvents.add(dedupeKey);
  }

  console.log(`🎯 Meta Custom: ${eventName}`, params, eventID ? `[ID: ${eventID}]` : '');
  
  if (eventID) {
    window.fbq('trackCustom', eventName, params ?? {}, { eventID });
  } else {
    window.fbq('trackCustom', eventName, params ?? {});
  }
}

// =============================================================================
// AGENCY FUNNEL SPECIFIC EVENTS
// =============================================================================

/**
 * Track lead form submission (primary conversion)
 */
export function trackLead(params: {
  content_name?: string;
  lead_type?: 'contact_form' | 'audit_request' | 'quiz_result' | 'newsletter';
  value?: number;
  currency?: string;
}, eventID?: string): void {
  metaTrack('Lead', {
    content_name: 'Amplo Lead Form',
    ...params
  }, eventID);
}

/**
 * Track scheduling intent or confirmation
 */
export function trackSchedule(params: {
  schedule_stage: 'click' | 'confirmed';
  content_name?: string;
  method?: 'calendly' | 'phone' | 'email';
}, eventID?: string): void {
  metaTrack('Schedule', {
    content_name: 'Book a Call CTA',
    ...params
  }, eventID);
}

/**
 * Track contact method clicks
 */
export function trackContact(params: {
  method: 'email' | 'phone' | 'form';
  content_name?: string;
}, eventID?: string): void {
  metaTrack('Contact', params, eventID);
}

/**
 * Track email signup or registration
 */
export function trackCompleteRegistration(params: {
  content_name?: string;
  registration_method?: string;
}, eventID?: string): void {
  metaTrack('CompleteRegistration', {
    content_name: 'Newsletter Signup',
    ...params
  }, eventID);
}

// =============================================================================
// QUIZ TRACKING EVENTS
// =============================================================================

/**
 * Track quiz start
 */
export function trackQuizStarted(params: {
  quiz_name?: string;
  quiz_version?: string;
  traffic_source?: string;
  page_url?: string;
}, eventID?: string): void {
  metaTrackCustom('QuizStarted', {
    quiz_name: 'Amplo Growth Audit Quiz',
    quiz_version: 'v1',
    page_url: window.location.href,
    ...params
  }, eventID);
}

/**
 * Track individual quiz question answered
 */
export function trackQuizQuestionAnswered(params: {
  quiz_name?: string;
  question_number: number;
  question_id?: string;
  answer_id?: string;
  total_questions?: number;
}, eventID?: string): void {
  metaTrackCustom('QuizQuestionAnswered', {
    quiz_name: 'Amplo Growth Audit Quiz',
    ...params
  }, eventID);
}

/**
 * Track quiz completion
 */
export function trackQuizCompleted(params: {
  quiz_name?: string;
  quiz_version?: string;
  total_questions: number;
  completion_time_sec?: number;
  result_type?: string;
  score?: number;
  traffic_source?: string;
  page_url?: string;
}, eventID?: string): void {
  // Fire both custom event and standard CompleteRegistration
  metaTrackCustom('QuizCompleted', {
    quiz_name: 'Amplo Growth Audit Quiz',
    quiz_version: 'v1',
    page_url: window.location.href,
    ...params
  }, eventID);
  
  // Also fire CompleteRegistration for standard tracking
  metaTrack('CompleteRegistration', {
    content_name: 'Quiz Completion',
    registration_method: 'quiz'
  }, eventID ? `${eventID}-reg` : undefined);
}

/**
 * Track quiz result viewing
 */
export function trackQuizResultViewed(params: {
  quiz_name?: string;
  result_type: string;
  score?: number;
  recommendations_shown?: number;
}, eventID?: string): void {
  metaTrackCustom('QuizResultViewed', {
    quiz_name: 'Amplo Growth Audit Quiz',
    ...params
  }, eventID);
}

// =============================================================================
// UTILITY FUNCTIONS
// =============================================================================

/**
 * Get UTM parameters from URL
 */
export function getUTMParams(): Record<string, string> {
  const urlParams = new URLSearchParams(window.location.search);
  return {
    utm_source: urlParams.get('utm_source') || '',
    utm_medium: urlParams.get('utm_medium') || '',
    utm_campaign: urlParams.get('utm_campaign') || '',
    utm_content: urlParams.get('utm_content') || '',
    utm_term: urlParams.get('utm_term') || '',
    fbclid: urlParams.get('fbclid') || ''
  };
}

/**
 * Get Facebook browser cookies (_fbp, _fbc)
 */
export function getFacebookCookies(): Record<string, string> {
  const cookies = document.cookie.split(';').reduce((acc, cookie) => {
    const [key, value] = cookie.trim().split('=');
    acc[key] = value;
    return acc;
  }, {} as Record<string, string>);
  
  return {
    fbp: cookies._fbp || '',
    fbc: cookies._fbc || ''
  };
}

/**
 * Store tracking data in localStorage for persistence
 */
export function storeTrackingData(data: Record<string, any>): void {
  try {
    const existing = JSON.parse(localStorage.getItem('amplo_tracking') || '{}');
    const updated = { ...existing, ...data, timestamp: Date.now() };
    localStorage.setItem('amplo_tracking', JSON.stringify(updated));
  } catch (error) {
    console.warn('Failed to store tracking data:', error);
  }
}

/**
 * Get stored tracking data from localStorage
 */
export function getStoredTrackingData(): Record<string, any> {
  try {
    return JSON.parse(localStorage.getItem('amplo_tracking') || '{}');
  } catch (error) {
    console.warn('Failed to get tracking data:', error);
    return {};
  }
}

/**
 * Initialize tracking data storage with UTM params and Facebook cookies
 */
export function initializeTracking(): void {
  const utmParams = getUTMParams();
  const fbCookies = getFacebookCookies();
  
  // Only store if we have UTM params or this is the first visit
  if (Object.values(utmParams).some(v => v) || !localStorage.getItem('amplo_tracking')) {
    storeTrackingData({
      ...utmParams,
      ...fbCookies,
      first_visit: new Date().toISOString(),
      referrer: document.referrer
    });
  }
}