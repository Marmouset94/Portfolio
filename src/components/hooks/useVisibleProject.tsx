import { useState, useEffect, useRef } from 'react';

export function useVisibleProject(projectCount: number) {
  const [visibleProject, setVisibleProject] = useState<number | null>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let maxVisibleIndex = -1;
        let maxVisibleRatio = 0;

        entries.forEach((entry) => {
          const index = projectRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1 && entry.intersectionRatio > maxVisibleRatio) {
            maxVisibleRatio = entry.intersectionRatio;
            maxVisibleIndex = index;
          }
        });

        if (maxVisibleIndex !== -1 && maxVisibleRatio > 0.5) {
          setVisibleProject(maxVisibleIndex);
        } else if (maxVisibleRatio <= 0.3) {
          setVisibleProject(null);
        }
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: '-10% 0px -10% 0px'
      }
    );

    // Check if mobile and observe
    const checkAndObserve = () => {
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        projectRefs.current.forEach((ref) => {
          if (ref) observer.observe(ref);
        });
      } else {
        setVisibleProject(null);
        observer.disconnect();
      }
    };

    checkAndObserve();
    window.addEventListener('resize', checkAndObserve);

    return () => {
      observer.disconnect();
      window.removeEventListener('resize', checkAndObserve);
    };
  }, []);

  const setProjectRef = (index: number) => (el: HTMLDivElement | null) => {
    projectRefs.current[index] = el;
  };

  return { visibleProject, setProjectRef };
}