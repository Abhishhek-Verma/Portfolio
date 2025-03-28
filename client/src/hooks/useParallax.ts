import { useRef, useEffect } from "react";
import { useAnimationContext } from "@/context/AnimationContext";

export const useParallax = () => {
  const ref = useRef<HTMLElement>(null);
  const { prefersReducedMotion, disableAnimations } = useAnimationContext();

  useEffect(() => {
    // Skip parallax effect if reduced motion is preferred
    if (prefersReducedMotion || disableAnimations) return;

    const handleScroll = () => {
      if (!ref.current) return;
      
      const scrollY = window.scrollY;
      const element = ref.current;
      const elementPosition = element.offsetTop;
      const viewportHeight = window.innerHeight;
      
      // Check if element is in viewport
      if (
        scrollY + viewportHeight > elementPosition &&
        scrollY < elementPosition + element.offsetHeight
      ) {
        // Calculate parallax effect
        const speed = 0.3; // Adjust for stronger/weaker effect
        const yPos = (scrollY - elementPosition) * speed;
        
        // Apply transform to create parallax
        element.style.transform = `translateY(${yPos}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prefersReducedMotion, disableAnimations]);

  return { ref };
};
