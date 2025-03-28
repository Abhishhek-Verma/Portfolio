import { createContext, useContext, useEffect, useState, ReactNode } from "react";

interface AnimationContextType {
  prefersReducedMotion: boolean;
  disableAnimations: boolean;
  setDisableAnimations: (disable: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType>({
  prefersReducedMotion: false,
  disableAnimations: false,
  setDisableAnimations: () => {},
});

export const useAnimationContext = () => useContext(AnimationContext);

export const AnimationProvider = ({ children }: { children: ReactNode }) => {
  // Check if the user prefers reduced motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  // Allow manual override of animations
  const [disableAnimations, setDisableAnimations] = useState(false);

  useEffect(() => {
    // Check for prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes to the media query
    const handleMediaQueryChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    } else {
      // Fallback for older browsers
      mediaQuery.addListener(handleMediaQueryChange);
      return () => mediaQuery.removeListener(handleMediaQueryChange);
    }
  }, []);

  return (
    <AnimationContext.Provider
      value={{
        prefersReducedMotion,
        disableAnimations,
        setDisableAnimations,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
