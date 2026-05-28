import { useState, useEffect, useCallback } from 'react';

export type LifecycleState = 'BOOTING' | 'AIRPORT_SCENE' | 'FLIGHT' | 'LANDING' | 'REVEAL' | 'READY';

export function useCinematicLifecycle() {
  const [state, setState] = useState<LifecycleState>('BOOTING');
  
  useEffect(() => {
    if (state === 'BOOTING') {
      const timer = setTimeout(() => setState('AIRPORT_SCENE'), 50);
      return () => clearTimeout(timer);
    }
    if (state === 'AIRPORT_SCENE') {
      const timer = setTimeout(() => setState('FLIGHT'), 1500);
      return () => clearTimeout(timer);
    }
    if (state === 'REVEAL') {
      const timer = setTimeout(() => setState('READY'), 1000);
      return () => clearTimeout(timer);
    }
  }, [state]);

  const onAircraftLandingComplete = useCallback(() => {
    setState('LANDING');
    setTimeout(() => {
      setState('REVEAL');
    }, 100);
  }, []);

  return { state, onAircraftLandingComplete };
}
