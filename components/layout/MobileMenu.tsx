"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { PRIMARY_NAV } from "@/lib/nav-data";
import { cn } from "@/lib/utils";

type MobileMenuProps = {
  onClose: () => void;
};

export function MobileMenu({ onClose }: MobileMenuProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className="overflow-hidden border-t border-cyan-glow/10 xl:hidden"
    >
      <nav className="flex flex-col gap-1 px-6 py-6">
        {PRIMARY_NAV.map((item) => (
          <div key={item.href}>
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className="flex-1 py-3 font-display text-sm uppercase tracking-[0.2em] text-ink-200"
              >
                {item.label}
              </Link>
              {item.megaMenu && (
                <button
                  type="button"
                  aria-label={`Toggle ${item.label} submenu`}
                  aria-expanded={expanded === item.href}
                  onClick={() =>
                    setExpanded((current) =>
                      current === item.href ? null : item.href
                    )
                  }
                  className="p-3 text-ink-400"
                >
                  <svg
                    viewBox="0 0 16 16"
                    className={cn(
                      "h-3 w-3 transition-transform duration-300",
                      expanded === item.href && "rotate-180"
                    )}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <path d="M2 5l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              )}
            </div>
            {item.megaMenu && (
              <motion.div
                initial={false}
                animate={{
                  height: expanded === item.href ? "auto" : 0,
                  opacity: expanded === item.href ? 1 : 0,
                }}
                transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                className="overflow-hidden"
              >
                <div className="flex flex-col gap-1 border-l border-cyan-glow/10 py-2 pl-4">
                  {item.megaMenu.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="py-2 text-sm text-ink-400 transition-colors hover:text-cyan-glow"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </motion.div>
            )}
          </div>
        ))}
        <Button href="/contact" onClick={onClose} className="mt-4 justify-center">
          Enquire Now
        </Button>
      </nav>
    </motion.div>
  );
}
