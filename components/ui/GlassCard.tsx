"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type GlassCardProps = {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  as?: "div" | "article";
};

export function GlassCard({
  children,
  className,
  hover = true,
  as = "div",
}: GlassCardProps) {
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={cn("glass-panel rounded-2xl", className)}
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
