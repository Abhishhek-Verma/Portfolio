import { useState, useEffect, useRef } from "react";
import { useAnimationContext } from "@/context/AnimationContext";

interface ScrollAnimationOptions {
  threshold?: number;
  delay?: number;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const { threshold = 0.1, delay = 0 } = options;
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { prefersReducedMotion, disableAnimations } = useAnimationContext();

  useEffect(() => {
    // If reduced motion is preferred, consider elements as always in view
    if (prefersReducedMotion || disableAnimations) {
      setInView(true);
      return;
    }

    const currentRef = ref.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add delay if specified
            if (delay) {
              setTimeout(() => {
                setInView(true);
              }, delay * 1000);
            } else {
              setInView(true);
            }
            // Stop observing once it's in view
            observer.unobserve(currentRef);
          }
        });
      },
      { threshold }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay, prefersReducedMotion, disableAnimations]);

  return [ref, inView] as const;
};
