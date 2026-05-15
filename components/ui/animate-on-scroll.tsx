"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface AnimateOnScrollProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** "full" (default) = translateY(3rem) + blur — for headings/labels.
   *  "light" = translateY(1.5rem) no blur — for grids/dense content. */
  variant?: "full" | "light";
}

/**
 * Wraps children in an IntersectionObserver-triggered scroll reveal.
 * CSS lives in globals.css (.scroll-reveal / .scroll-reveal-light + .in-view).
 * Respects prefers-reduced-motion via media query in CSS.
 */
export function AnimateOnScroll({
  children,
  delay = 0,
  className = "",
  variant = "full",
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay > 0) {
            setTimeout(() => el.classList.add("in-view"), delay);
          } else {
            el.classList.add("in-view");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.05, rootMargin: "0px 0px -20px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const baseClass = variant === "light" ? "scroll-reveal-light" : "scroll-reveal";

  return (
    <div ref={ref} className={`${baseClass} ${className}`}>
      {children}
    </div>
  );
}
