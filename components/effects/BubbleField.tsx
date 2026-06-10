"use client";

import { useMemo, type CSSProperties } from "react";
import { cn } from "@/lib/utils";

type BubbleFieldProps = {
  count?: number;
  className?: string;
};

function seededRandom(seed: number) {
  const x = Math.sin(seed * 9999) * 10000;
  return x - Math.floor(x);
}

export function BubbleField({ count = 24, className }: BubbleFieldProps) {
  const bubbles = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => {
        const size = 4 + seededRandom(i * 1.1) * 14;
        const duration = 16 + seededRandom(i * 3.7) * 20;
        return {
          id: i,
          size,
          left: seededRandom(i * 2.3) * 100,
          duration,
          delay: -seededRandom(i * 5.9) * duration,
          driftX: (seededRandom(i * 7.3) - 0.5) * 80,
          opacity: 0.15 + seededRandom(i * 11.3) * 0.35,
        };
      }),
    [count]
  );

  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 -z-10 overflow-hidden",
        className
      )}
      aria-hidden="true"
    >
      {bubbles.map((bubble) => (
        <span
          key={bubble.id}
          className="absolute bottom-0 animate-bubble-rise rounded-full bg-cyan-glow/30"
          suppressHydrationWarning
          style={
            {
              left: `${bubble.left}%`,
              width: bubble.size,
              height: bubble.size,
              animationDuration: `${bubble.duration}s`,
              animationDelay: `${bubble.delay}s`,
              opacity: bubble.opacity,
              "--drift-x": `${bubble.driftX}px`,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
