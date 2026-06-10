"use client";

import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";

const ZONES = [
  { depth: 0, label: "Surface" },
  { depth: 200, label: "Twilight Zone" },
  { depth: 1000, label: "Midnight Zone" },
  { depth: 4000, label: "Abyssal Zone" },
  { depth: 6000, label: "Hadal Zone" },
];

const MAX_DEPTH = 6000;
const IDLE_DELAY = 1100;
const TOAST_DURATION = 2400;

function zoneFor(depth: number) {
  return [...ZONES].reverse().find((zone) => depth >= zone.depth) ?? ZONES[0];
}

function DepthReadout({ depthValue }: { depthValue: MotionValue<number> }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    return depthValue.on("change", (latest) => setDisplay(Math.round(latest)));
  }, [depthValue]);

  return (
    <span className="font-display text-xs tabular-nums text-cyan-glow text-glow">
      {display.toLocaleString()} m
    </span>
  );
}

export function DepthGauge() {
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 20,
    mass: 0.5,
    restDelta: 0.0005,
  });

  const depthValue = useTransform(smoothProgress, [0, 1], [0, MAX_DEPTH]);
  const markerY = useTransform(smoothProgress, [0, 1], ["6%", "94%"]);

  const [active, setActive] = useState(true);
  const [zoneToast, setZoneToast] = useState<string | null>(null);

  useEffect(() => {
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let toastTimer: ReturnType<typeof setTimeout> | null = null;
    let lastZone = ZONES[0].label;

    const wake = (duration: number) => {
      setActive(true);
      if (idleTimer) clearTimeout(idleTimer);
      idleTimer = setTimeout(() => setActive(false), duration);
    };

    const unsubProgress = smoothProgress.on("change", () => wake(IDLE_DELAY));

    const unsubDepth = depthValue.on("change", (latest) => {
      const zone = zoneFor(Math.round(latest));
      if (zone.label !== lastZone) {
        lastZone = zone.label;
        setZoneToast(zone.label);
        wake(TOAST_DURATION + 200);
        if (toastTimer) clearTimeout(toastTimer);
        toastTimer = setTimeout(() => setZoneToast(null), TOAST_DURATION);
      }
    });

    idleTimer = setTimeout(() => setActive(false), IDLE_DELAY);

    return () => {
      unsubProgress();
      unsubDepth();
      if (idleTimer) clearTimeout(idleTimer);
      if (toastTimer) clearTimeout(toastTimer);
    };
  }, [smoothProgress, depthValue]);

  return (
    <div className="pointer-events-none fixed inset-y-0 right-0 z-40 hidden w-px lg:top-24 lg:block">
      <div className="absolute inset-0 bg-cyan-glow/10" />
      <motion.div
        className="absolute inset-x-0 top-0 h-full origin-top bg-gradient-to-b from-cyan-glow/30 to-transparent"
        style={{ scaleY: smoothProgress }}
        animate={{ opacity: active ? 1 : 0.5 }}
        transition={{ duration: 0.6 }}
      />
      <motion.div className="absolute inset-x-0 top-0 h-full" style={{ y: markerY }}>
        <div className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-glow shadow-[0_0_10px_rgba(34,211,238,0.85)]" />
        <div className="absolute right-5 top-0 -translate-y-1/2">
          <motion.div
            className="flex flex-col items-end gap-1.5 text-right"
            animate={{ opacity: active ? 1 : 0, x: active ? 0 : 6 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <DepthReadout depthValue={depthValue} />
            <AnimatePresence>
              {zoneToast && (
                <motion.span
                  key={zoneToast}
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -4 }}
                  transition={{ duration: 0.5 }}
                  className="whitespace-nowrap font-display text-[10px] uppercase tracking-[0.3em] text-ink-400"
                >
                  {zoneToast}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
