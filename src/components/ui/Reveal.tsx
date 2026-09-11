"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";

export default function Reveal({
  children,
  delay = 0,
  className = "",
  variant = "assemble",
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  variant?: "assemble" | "assemble-left" | "assemble-right" | "assemble-rotate";
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Force a paint of the hidden state first so elements already in view on
          // load (e.g. the hero) visibly animate in instead of appearing pre-revealed.
          requestAnimationFrame(() => {
            requestAnimationFrame(() => setVisible(true));
          });
          observer.disconnect();
        }
      },
      { threshold: 0.15 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${variant} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms", ...style }}
    >
      {children}
    </div>
  );
}
