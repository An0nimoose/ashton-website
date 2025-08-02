"use client";

import { useEffect, useRef } from "react";

const TARGET_SELECTORS = "h1, h2, h3, h4, p, li, blockquote, a";

export default function GlobalAnimator({
  children,
}: {
  children: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = Array.from(
      container.querySelectorAll<HTMLElement>(TARGET_SELECTORS)
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.opacity = "1";
            target.style.transform = "translateY(0)";
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.01 }
    );

    elements.forEach((el, index) => {
      el.style.opacity = "0";
      el.style.transform = "translateY(20px)";
      el.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
      el.style.transitionDelay = `${index * 5}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [children]);

  return <div ref={containerRef}>{children}</div>;
}
