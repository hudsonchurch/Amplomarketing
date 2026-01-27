# Meta (Facebook) Pixel Implementation Guide

## Overview
Comprehensive Meta Pixel tracking implementation for Amplo Marketing website with Pixel ID: `2631985213852287`

## Features Implemented

### ✅ 1. Meta Pixel Base Code (Global)
- **Location**: `index.html` - Meta Pixel base code installed in `<head>`
- **Pixel ID**: `2631985213852287`
- **Auto PageView**: Fires on initial page load
- **Noscript Fallback**: Included for users with JavaScript disabled

### ✅ 2. SPA PageView Tracking
- **Component**: `src/hooks/useMetaPageView.ts`
- **Integration**: Added to `App.tsx` as `<MetaPageViewTracker />`
- **Functionality**: Fires PageView on route changes (React Router)
- **Deduplication**: Prevents double-firing on same route

### ✅ 3. Meta Tracking Utility
- **Location**: `src/lib/metaPixel.ts`
- **Features**:
  - Safe wrappers for `window.fbq`
  - Event deduplication with eventID
  - UTM parameter capture
  - Facebook cookie tracking (_fbp, _fbc)
  - localStorage persistence for tracking data

### ✅ 4. Standard Events Implemented

#### 4.1 LEAD (Primary Conversion)
- **Triggers**: Email form submissions (case study, course)
- **Location**: `AlternativeOffer.tsx`
- **Parameters**: `content_name`, `lead_type`
- **Deduplication**: Unique eventID per submission

#### 4.2 SCHEDULE (Booking Intent)
- **Triggers**: All Calendly button clicks
- **Locations**: 
  - `StickyCallButton.tsx` (sticky bar)
  - `Contact.tsx` (contact page)
  - `QualifiedCalendly.tsx` (qualified page)
- **Parameters**: `schedule_stage: 'click'`, `content_name`, `method: 'calendly'`

#### 4.3 CONTACT (Contact Method Clicks)
- **Triggers**: Email/phone link clicks
- **Location**: `Contact.tsx`
- **Parameters**: `method: 'email'|'phone'`, `content_name`

#### 4.4 COMPLETE REGISTRATION (Email Signups)
- **Triggers**: Newsletter/resource signups
- **Location**: `AlternativeOffer.tsx`
- **Parameters**: `content_name`, `registration_method`

### ✅ 5. Quiz Tracking (Custom Events)

#### 5.1 QuizStarted
- **Trigger**: User starts quiz (Step 1)
- **Location**: `ApplicationFunnel.tsx`
- **Parameters**: `quiz_name`, `quiz_version`, `traffic_source`, `page_url`

#### 5.2 QuizQuestionAnswered
- **Trigger**: Each quiz step completion
- **Location**: `ApplicationFunnel.tsx`
- **Parameters**: `question_number`, `question_id`, `answer_id`, `total_questions`

#### 5.3 QuizCompleted
- **Trigger**: Quiz completion with route assignment
- **Location**: `ApplicationFunnel.tsx`
- **Parameters**: `total_questions`, `completion_time_sec`, `result_type`, `traffic_source`
- **Routes**: 'Qualified', 'Scholarship', 'Alternative'

#### 5.4 QuizResultViewed
- **Trigger**: User views "Here's What You Get" page
- **Location**: `ApplicationFunnel.tsx`
- **Parameters**: `result_type`, `recommendations_shown`

### ✅ 6. Button Click Tracking (Custom Events)

#### 6.1 ButtonClick Events
- **Navigation**: All nav buttons (How It Works, Proof, Services, Contact, Apply Now)
- **CTAs**: Apply Now buttons (homepage, sticky bar, navigation)
- **FAQ**: FAQ question interactions
- **Parameters**: `button_name`, `location`, `destination`/`action`

### ✅ 7. Mobile Responsiveness Fixes

#### 7.1 Apply Now Button
- **Desktop**: Center positioned in sticky bar
- **Mobile**: Compact version with shorter text
- **Responsive Classes**: `hidden md:block` / `md:hidden`

#### 7.2 Continue Application Button
- **Desktop**: "Ready to Grow? Continue Application →"
- **Mobile**: "Continue Application →" / "Continue →"
- **Responsive Text**: `hidden sm:inline` / `sm:hidden`

### ✅ 8. Advanced Features

#### 8.1 Event Deduplication
- **Method**: Unique eventID generation with `crypto.randomUUID()`
- **Storage**: In-memory Set to prevent double-firing
- **Format**: `eventName-eventID` for standard events, `custom-eventName-eventID` for custom

#### 8.2 UTM & Traffic Source Tracking
- **Capture**: URL parameters (utm_source, utm_medium, utm_campaign, etc.)
- **Storage**: localStorage as 'amplo_tracking'
- **Usage**: Attached to quiz completion and lead events

#### 8.3 Facebook Cookie Integration
- **Cookies**: _fbp (browser), _fbc (click ID)
- **Usage**: Available for server-side CAPI integration
- **Storage**: Captured and stored with tracking data

## Testing Checklist

### ✅ Dev Tools Verification
1. **Network Tab**: `fbevents.js` loads successfully
2. **Console**: Event logs with 🔥 (standard) and 🎯 (custom) emojis
3. **Meta Pixel Helper**: Shows Pixel ID `2631985213852287`

### ✅ Event Flow Testing
1. **Homepage Load**: PageView fires
2. **Quiz Start**: InitiateCheckout + QuizStarted
3. **Quiz Steps**: QuizQuestionAnswered (1,2,3)
4. **Quiz Complete**: CompleteRegistration + QuizCompleted + Lead (if qualified)
5. **Email Capture**: Lead + CompleteRegistration
6. **Calendly Click**: Schedule events
7. **Navigation**: ButtonClick events

### ✅ Mobile Testing
1. **Apply Now Button**: Visible and functional on mobile
2. **Continue Button**: Text adapts to screen size
3. **Sticky Bar**: Proper layout on small screens

## Events Manager Verification

### Standard Events to Monitor
- **PageView**: Route changes
- **InitiateCheckout**: Quiz starts
- **CompleteRegistration**: Quiz completions
- **Lead**: Email captures + qualified users
- **Schedule**: Calendly clicks

### Custom Events to Monitor
- **QuizStarted**: Funnel entry
- **QuizQuestionAnswered**: Step progression
- **QuizCompleted**: Completion with route
- **QuizResultViewed**: Value page views
- **ButtonClick**: All CTA interactions
- **FAQInteraction**: Engagement tracking

## Key Metrics Available

### Conversion Funnel
1. **Homepage Views** → **Quiz Starts** (InitiateCheckout rate)
2. **Quiz Starts** → **Quiz Completions** (Completion rate)
3. **Quiz Completions** → **Qualified Leads** (Qualification rate)
4. **Qualified Leads** → **Calendly Clicks** (Booking intent rate)

### Engagement Metrics
- **FAQ Interaction Rate**: Question clicks / page views
- **Button Click Rates**: CTA performance by location
- **Navigation Usage**: Section scroll patterns
- **Mobile vs Desktop**: Performance comparison

### Attribution Data
- **Traffic Sources**: UTM parameter tracking
- **Completion Times**: Quiz duration analysis
- **Route Distribution**: Qualified vs Scholarship vs Alternative
- **Geographic Data**: Available through Meta reporting

## Files Modified

### Core Implementation
- `index.html` - Meta Pixel base code
- `src/lib/metaPixel.ts` - Main tracking utility
- `src/hooks/useMetaPageView.ts` - SPA PageView tracker
- `src/App.tsx` - PageView tracker integration

### Component Updates
- `src/components/ApplicationFunnel.tsx` - Quiz tracking
- `src/components/StickyCallButton.tsx` - Sticky bar tracking + mobile fixes
- `src/components/Navigation.tsx` - Navigation tracking
- `src/components/application/AlternativeOffer.tsx` - Email capture tracking
- `src/components/application/QualifiedCalendly.tsx` - Calendly + FAQ tracking
- `src/components/application/ValueRevealPage.tsx` - Mobile button fixes

### Page Updates
- `src/pages/Index.tsx` - Homepage tracking
- `src/pages/Contact.tsx` - Contact method tracking
- `src/pages/FAQ.tsx` - FAQ interaction tracking

## Next Steps (Optional Enhancements)

### 1. Conversions API (CAPI)
- **Server-side tracking**: Cloudflare Worker for /api/meta-capi
- **Deduplication**: Same eventID for client + server events
- **Enhanced matching**: Server-side user data (IP, UA, hashed PII)

### 2. Advanced Matching
- **Client-side hashing**: SHA-256 for email/phone
- **Enhanced parameters**: em, ph, fn, ln for better attribution

### 3. Custom Audiences
- **Quiz takers**: All users who start quiz
- **Qualified leads**: High-value prospects
- **Email subscribers**: Newsletter signups
- **Calendly clickers**: High-intent users

## Support & Maintenance

### Monitoring
- **Events Manager**: Check event flow daily
- **Console Logs**: Monitor for tracking errors
- **Performance**: Ensure pixel doesn't impact site speed

### Updates
- **New CTAs**: Add tracking to new buttons/forms
- **Route Changes**: Update PageView tracking for new pages
- **A/B Tests**: Use eventID for test variant tracking

---

**Implementation Complete**: All requirements from the prompt have been successfully implemented with comprehensive tracking, mobile fixes, and proper deduplication.