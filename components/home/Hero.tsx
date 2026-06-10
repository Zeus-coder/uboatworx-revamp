"use client";

import { type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { GradientText } from "@/components/ui/GradientText";
import { SonarRing } from "@/components/effects/SonarRing";
import { HERO } from "@/lib/site-data";

const EASE = [0.16, 1, 0.3, 1] as const;
const PARALLAX_SPRING = { stiffness: 50, damping: 18, mass: 0.6 };

export function Hero() {
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);

  const rotateX = useSpring(useTransform(pointerY, [-0.5, 0.5], [3, -3]), PARALLAX_SPRING);
  const rotateY = useSpring(useTransform(pointerX, [-0.5, 0.5], [-3, 3]), PARALLAX_SPRING);
  const ringX = useSpring(useTransform(pointerX, [-0.5, 0.5], [30, -30]), PARALLAX_SPRING);
  const ringY = useSpring(useTransform(pointerY, [-0.5, 0.5], [30, -30]), PARALLAX_SPRING);

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative -mt-20 flex min-h-screen items-center overflow-hidden lg:-mt-24"
    >
      <div className="absolute inset-0 -z-10">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster={HERO.poster}
        >
          <source src={HERO.videoMp4} type="video/mp4" />
          <source src={HERO.videoWebm} type="video/webm" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-abyss-950/50 via-abyss-950/55 to-abyss-950" />
        <div className="absolute inset-0 bg-gradient-to-r from-abyss-950/80 via-abyss-950/20 to-transparent" />
      </div>

      <div className="pointer-events-none absolute -right-40 top-1/2 hidden h-[560px] w-[560px] -translate-y-1/2 lg:block">
        <motion.div className="h-full w-full" style={{ x: ringX, y: ringY }}>
          <SonarRing className="h-full w-full opacity-30" />
        </motion.div>
      </div>

      <motion.div
        style={{ rotateX, rotateY, transformPerspective: 1200 }}
        className="mx-auto w-full max-w-7xl px-6 pb-24 pt-40 lg:px-10"
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display text-xs uppercase tracking-[0.4em] text-cyan-soft"
        >
          {HERO.eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-6 max-w-3xl text-balance font-display text-5xl font-semibold uppercase leading-[1.05] tracking-tight text-ink-100 sm:text-6xl lg:text-7xl"
        >
          <GradientText>{HERO.headline}</GradientText>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-6 max-w-xl text-balance text-lg text-ink-300"
        >
          {HERO.subhead}
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href={HERO.primaryCta.href} size="lg" magnetic>
            {HERO.primaryCta.label}
          </Button>
          <Button href="/contact" variant="secondary" size="lg">
            Book a Consultation
          </Button>
        </motion.div>
      </motion.div>

      <ScrollCue />
    </section>
  );
}

function ScrollCue() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.8 }}
      className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-ink-400"
    >
      <span className="font-display text-[10px] uppercase tracking-[0.35em]">
        Descend
      </span>
      <motion.span
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        className="block h-8 w-px bg-gradient-to-b from-cyan-glow to-transparent"
      />
    </motion.div>
  );
}
