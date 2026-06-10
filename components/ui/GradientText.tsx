import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type GradientTextProps = {
  children: ReactNode;
  className?: string;
};

export function GradientText({ children, className }: GradientTextProps) {
  return (
    <span
      className={cn(
        "bg-gradient-to-r from-cyan-glow via-cyan-soft to-gold-300 bg-clip-text text-transparent",
        className
      )}
    >
      {children}
    </span>
  );
}
