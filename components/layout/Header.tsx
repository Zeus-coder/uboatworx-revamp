"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/icons/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { PRIMARY_NAV } from "@/lib/nav-data";
import { cn } from "@/lib/utils";

function MenuToggle({ open }: { open: boolean }) {
  return (
    <div className="flex h-4 w-6 flex-col justify-between">
      <motion.span
        className="h-px w-full bg-current"
        animate={{ rotate: open ? 45 : 0, y: open ? 7 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
      <motion.span
        className="h-px w-full bg-current"
        animate={{ opacity: open ? 0 : 1 }}
        transition={{ duration: 0.15 }}
      />
      <motion.span
        className="h-px w-full bg-current"
        animate={{ rotate: open ? -45 : 0, y: open ? -7 : 0 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const pathname = usePathname();
  const [prevPathname, setPrevPathname] = useState(pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMobileOpen(false);
    setOpenMenu(null);
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled || mobileOpen
          ? "glass-panel border-b border-cyan-glow/10 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex max-w-[1800px] items-center justify-between px-6 py-5 lg:px-10 xl:px-14">
        <Link href="/" className="flex items-center text-ink-100">
          <Logo className="h-9 w-auto lg:h-10" />
        </Link>

        <nav className="hidden items-center gap-6 xl:flex xl:gap-8">
          {PRIMARY_NAV.map((item) => (
            <div
              key={item.href}
              className="relative"
              onMouseEnter={() => item.megaMenu && setOpenMenu(item.href)}
              onMouseLeave={() => item.megaMenu && setOpenMenu(null)}
            >
              <Link
                href={item.href}
                className="font-display text-xs uppercase tracking-[0.15em] text-ink-300 transition-colors hover:text-cyan-glow"
              >
                {item.label}
              </Link>
              {item.megaMenu && (
                <AnimatePresence>
                  {openMenu === item.href && (
                    <motion.div
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 12 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="glass-panel absolute left-1/2 top-full mt-4 w-[640px] -translate-x-1/2 rounded-2xl p-6"
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {item.megaMenu.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                            className="group rounded-xl p-3 transition-colors hover:bg-cyan-glow/5"
                          >
                            <span className="block font-display text-sm text-ink-100 group-hover:text-cyan-glow">
                              {link.label}
                            </span>
                            {link.description && (
                              <span className="mt-1 block text-xs text-ink-400">
                                {link.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden xl:block">
          <Button href="/contact" size="sm" magnetic>
            Enquire Now
          </Button>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((value) => !value)}
          className="text-ink-100 xl:hidden"
        >
          <MenuToggle open={mobileOpen} />
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
