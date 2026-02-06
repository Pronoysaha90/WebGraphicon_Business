import { useState, useEffect, useCallback, RefObject } from "react";

interface MousePosition {
  x: number;
  y: number;
  normalizedX: number; // -1 to 1
  normalizedY: number; // -1 to 1
}

interface UseMouseParallaxOptions {
  sensitivity?: number;
  containerRef?: RefObject<HTMLElement>;
}

export const useMouseParallax = (options: UseMouseParallaxOptions = {}) => {
  const { sensitivity = 1, containerRef } = options;
  
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    normalizedX: 0,
    normalizedY: 0,
  });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    let centerX: number;
    let centerY: number;
    let normalizedX: number;
    let normalizedY: number;

    if (containerRef?.current) {
      const rect = containerRef.current.getBoundingClientRect();
      centerX = rect.left + rect.width / 2;
      centerY = rect.top + rect.height / 2;
      normalizedX = ((e.clientX - centerX) / (rect.width / 2)) * sensitivity;
      normalizedY = ((e.clientY - centerY) / (rect.height / 2)) * sensitivity;
    } else {
      centerX = window.innerWidth / 2;
      centerY = window.innerHeight / 2;
      normalizedX = ((e.clientX - centerX) / centerX) * sensitivity;
      normalizedY = ((e.clientY - centerY) / centerY) * sensitivity;
    }

    setMousePosition({
      x: e.clientX,
      y: e.clientY,
      normalizedX: Math.max(-1, Math.min(1, normalizedX)),
      normalizedY: Math.max(-1, Math.min(1, normalizedY)),
    });
  }, [sensitivity, containerRef]);

  useEffect(() => {
    const target = containerRef?.current || window;
    target.addEventListener("mousemove", handleMouseMove as EventListener);
    
    return () => {
      target.removeEventListener("mousemove", handleMouseMove as EventListener);
    };
  }, [handleMouseMove, containerRef]);

  return mousePosition;
};

// Utility to calculate transform values based on mouse position
export const getParallaxTransform = (
  normalizedX: number,
  normalizedY: number,
  intensity: number = 20
) => ({
  x: normalizedX * intensity,
  y: normalizedY * intensity,
  rotateX: -normalizedY * (intensity / 4),
  rotateY: normalizedX * (intensity / 4),
});
