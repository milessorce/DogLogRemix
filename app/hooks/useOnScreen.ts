import { useState, useEffect } from 'react';

export default function useOnScreen(ref: any, useOnce: boolean = false) {
  if (typeof window !== 'undefined') {
    const [ isIntersecting, setIntersecting ] = useState(false);
    const observer = new IntersectionObserver(
      ([ entry ]) => {
        setIntersecting(entry.isIntersecting);
        if (useOnce && entry.isIntersecting) {
          observer.disconnect();
        }
      }
    );
  
    useEffect(() => {
      observer.observe(ref.current);
      return () => {
        observer.disconnect();
      };
    }, []);
  
    return isIntersecting;
  }
  return false;
}
