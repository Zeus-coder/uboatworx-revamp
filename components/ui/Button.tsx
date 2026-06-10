"use client";

import Link from "next/link";
import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type CommonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  magnetic?: boolean;
  className?: string;
  children: ReactNode;
};

type ConflictingMotionProps =
  | "onDrag"
  | "onDragStart"
  | "onDragEnd"
  | "onAnimationStart"
  | "onAnimationEnd"
  | "onAnimationIteration";

type LinkButtonProps = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | ConflictingMotionProps> & {
    href: string;
  };

type NativeButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingMotionProps> & {
    href?: undefined;
  };

export type ButtonProps = LinkButtonProps | NativeButtonProps;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-gold-300 to-gold-400 text-abyss-950 shadow-[0_0_30px_rgba(232,196,104,0.35)] hover:shadow-[0_0_45px_rgba(232,196,104,0.55)]",
  secondary:
    "glass-panel text-ink-100 hover:border-cyan-glow/50 hover:text-cyan-glow",
  ghost:
    "text-ink-100 hover:text-cyan-glow underline-offset-4 hover:underline",
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-[11px]",
  md: "px-5 py-2.5 text-xs",
  lg: "px-6 py-3 text-sm",
};

const MotionLink = motion.create(Link);

export function Button(props: ButtonProps) {
  const {
    variant = "primary",
    size = "md",
    magnetic = false,
    className,
    children,
    ...rest
  } = props;

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.2 });

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    if (!magnetic) return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.25);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-display font-semibold uppercase tracking-[0.15em] transition-colors duration-300",
    VARIANT_STYLES[variant],
    SIZE_STYLES[size],
    className
  );

  const motionProps = magnetic
    ? {
        style: { x: springX, y: springY },
        onMouseMove: handleMouseMove,
        onMouseLeave: handleMouseLeave,
      }
    : {};

  if (rest.href) {
    const { href, ...anchorRest } = rest as Omit<
      LinkButtonProps,
      keyof CommonProps
    >;
    return (
      <MotionLink
        href={href}
        className={classes}
        {...motionProps}
        {...anchorRest}
      >
        {children}
      </MotionLink>
    );
  }

  return (
    <motion.button
      className={classes}
      {...motionProps}
      {...(rest as Omit<ButtonHTMLAttributes<HTMLButtonElement>, ConflictingMotionProps>)}
    >
      {children}
    </motion.button>
  );
}
