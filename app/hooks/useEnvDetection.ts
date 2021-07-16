import { useMemo } from 'react';
import detectMobile from '../utilties/detectMobile';

interface NavigatorInterface {
  userAgent: string;
}

export interface EnvInterface {
  browser: string;
  isIpad: boolean;
  isMobile: boolean;
  isBrowser: boolean;
}

export default function useEnvDetection(navigator: NavigatorInterface | null) {
  return useMemo <EnvInterface> (() => {
    if (navigator) {
      let browser = '';
      if (navigator.userAgent.includes('Chrome')) {
        browser = 'chrome';
      } else if (navigator.userAgent.includes('Safari')) {
        browser = 'safari';
      } else if (navigator.userAgent.includes('Firefox')) {
        browser = 'firefox';
      }
      return {
        browser,
        isIpad: !!navigator.userAgent.match(/iPad/gi),
        isMobile: detectMobile(),
        isBrowser: true
      };
    }
    return {
      browser: 'chrome',
      isIpad: false,
      isMobile: false,
      isBrowser: false
    };
  }, [ navigator ]);
}
