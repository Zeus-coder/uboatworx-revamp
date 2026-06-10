"use client";

import { type MouseEvent, type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
};

const TILT_SPRING = { stiffness: 220, damping: 20, mass: 0.5 };

export function GlassCard({
  children,
  className,
  hover = true,
  as = "div",
}: GlassCardProps) {
  const MotionTag = motion[as];

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springRotateX = useSpring(rotateX, TILT_SPRING);
  const springRotateY = useSpring(rotateY, TILT_SPRING);
  const rectRef = useRef<DOMRect | null>(null);

  const handleMouseEnter = (event: MouseEvent<HTMLElement>) => {
    if (!hover) return;
    rectRef.current = event.currentTarget.getBoundingClientRect();
  };

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!hover || !rectRef.current) return;
    const rect = rectRef.current;
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(px * 10);
    rotateX.set(py * -10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    rectRef.current = null;
  };

  return (
    <MotionTag
      className={cn("glass-panel rounded-2xl", className)}
      style={
        hover
          ? {
              rotateX: springRotateX,
              rotateY: springRotateY,
              transformPerspective: 1000,
            }
          : undefined
      }
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={
        hover
          ? {
              y: -6,
              boxShadow:
                "0 24px 60px rgba(0,0,0,0.45), 0 0 40px rgba(34,211,238,0.15)",
            }
          : undefined
      }
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      {children}
    </MotionTag>
  );
}
