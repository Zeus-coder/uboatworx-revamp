import { type ReactNode } from "react";
import { cn } from "@/lib/utils";

type BadgeVariant = "cyan" | "gold" | "neutral";

type BadgeProps = {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
};

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  cyan: "border-cyan-glow/30 bg-cyan-glow/10 text-cyan-soft",
  gold: "border-gold-400/30 bg-gold-400/10 text-gold-300",
  neutral: "border-ink-600/40 bg-ink-600/10 text-ink-300",
};

export function Badge({ children, className, variant = "cyan" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-display text-xs uppercase tracking-[0.2em]",
        VARIANT_STYLES[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
