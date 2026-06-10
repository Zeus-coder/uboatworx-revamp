"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const ZONES = [
  { depth: 0, label: "Surface" },
  { depth: 200, label: "Twilight Zone" },
  { depth: 1000, label: "Midnight Zone" },
  { depth: 4000, label: "Abyssal Zone" },
  { depth: 6000, label: "Hadal Zone" },
];

const MAX_DEPTH = 6000;
const TRACK_HEIGHT = 160;

export function DepthGauge() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 24,
    mass: 0.5,
    restDelta: 0.0005,
  });
  const depth = useTransform(smoothProgress, [0, 1], [0, MAX_DEPTH]);
  const fillHeight = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);
  const markerOffset = useTransform(smoothProgress, [0, 1], [0, TRACK_HEIGHT]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return depth.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [depth]);

  const zone =
    [...ZONES].reverse().find((z) => display >= z.depth) ?? ZONES[0];

  return (
    <div className="pointer-events-none fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 lg:block">
      <div className="glass-panel flex flex-col items-center gap-3 rounded-full px-3 py-5">
        <span className="font-display text-[10px] uppercase tracking-[0.3em] text-cyan-soft/70">
          Depth
        </span>
        <div
          className="relative w-px overflow-visible bg-cyan-glow/15"
          style={{ height: TRACK_HEIGHT }}
        >
          <motion.div
            className="absolute inset-x-0 top-0 bg-gradient-to-b from-cyan-glow to-transparent"
            style={{ height: fillHeight }}
          />
          <motion.div
            className="absolute left-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow shadow-[0_0_10px_rgba(34,211,238,0.85)]"
            style={{ top: markerOffset }}
          />
        </div>
        <span className="font-display text-xs tabular-nums text-cyan-glow text-glow">
          {display.toLocaleString()} m
        </span>
        <span className="max-w-[6rem] text-center font-display text-[9px] uppercase tracking-[0.25em] text-ink-400">
          {zone.label}
        </span>
      </div>
    </div>
  );
}
