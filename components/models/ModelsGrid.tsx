"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ModelCard } from "@/components/models/ModelCard";
import {
  FILTER_CATEGORIES,
  MODEL_FAMILIES,
  type Application,
} from "@/lib/models-data";
import { cn } from "@/lib/utils";

const ALL = "All Models" as const;

const CATEGORIES: (Application | typeof ALL)[] = [ALL, ...FILTER_CATEGORIES];

export function ModelsGrid() {
  const [active, setActive] = useState<Application | typeof ALL>(ALL);

  const filtered =
    active === ALL
      ? MODEL_FAMILIES
      : MODEL_FAMILIES.filter((model) => model.applications.includes(active));

  return (
    <div>
      <div className="flex flex-wrap gap-3">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category)}
            className={cn(
              "rounded-full border px-4 py-2 font-display text-xs uppercase tracking-[0.2em] transition-colors duration-300",
              active === category
                ? "border-cyan-glow/50 bg-cyan-glow/10 text-cyan-soft"
                : "border-cyan-glow/10 text-ink-400 hover:border-cyan-glow/30 hover:text-ink-100"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      <motion.div layout className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((model) => (
            <motion.div
              key={model.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.3 }}
            >
              <ModelCard model={model} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
