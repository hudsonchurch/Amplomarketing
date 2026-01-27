/**
 * React hook for tracking SPA page views with Meta Pixel
 * Prevents double-firing and tracks route changes
 */

import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { metaPageView, initializeTracking } from '../lib/metaPixel';

export function useMetaPageView() {
  const location = useLocation();
  const lastPathRef = useRef<string>('');
  const initializedRef = useRef<boolean>(false);

  useEffect(() => {
    // Initialize tracking data on first load
    if (!initializedRef.current) {
      initializeTracking();
      initializedRef.current = true;
    }

    // Only fire PageView if the path actually changed
    const currentPath = location.pathname + location.search + location.hash;
    
    if (lastPathRef.current !== currentPath) {
      // Small delay to ensure the page has rendered
      const timeoutId = setTimeout(() => {
        metaPageView();
        lastPathRef.current = currentPath;
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [location]);
}

/**
 * Component wrapper for Meta PageView tracking
 * Place this in your App component
 */
export function MetaPageViewTracker() {
  useMetaPageView();
  return null;
}