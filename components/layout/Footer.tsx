import Link from "next/link";
import { Logo } from "@/components/icons/Logo";
import { SOCIAL_ICONS } from "@/components/icons/SocialIcons";
import { NewsletterForm } from "@/components/layout/NewsletterForm";
import { FOOTER_NAV, SOCIAL_LINKS } from "@/lib/nav-data";
import { COMPANY_INFO } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="relative border-t border-cyan-glow/10 bg-abyss-900/60">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_repeat(4,1fr)] lg:gap-8">
          <div>
            <Link href="/" className="flex items-center gap-3 text-ink-100">
              <Logo className="h-9 w-auto" />
              <span className="font-display text-sm uppercase tracking-[0.3em]">
                U-Boat Worx
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-ink-400">
              The world&apos;s leading manufacturer of private submarines —
              engineering uncompromised access to the deep for over fourteen
              years.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.label];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-glow/15 text-ink-400 transition-colors hover:border-cyan-glow/40 hover:text-cyan-glow"
                  >
                    {Icon && <Icon className="h-4 w-4" />}
                  </a>
                );
              })}
            </div>
          </div>

          {FOOTER_NAV.map((group, index) => (
            <div key={group.title}>
              <h3 className="font-display text-xs uppercase tracking-[0.25em] text-cyan-soft">
                {group.title}
              </h3>
              <ul
                className={cn(
                  "mt-4 gap-x-4",
                  index === 0
                    ? "grid grid-cols-2 gap-y-2.5"
                    : "flex flex-col gap-2.5"
                )}
              >
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-ink-400 transition-colors hover:text-ink-100"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-6 border-t border-cyan-glow/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <NewsletterForm />
          <div className="text-xs text-ink-400 lg:text-right">
            <p>
              &copy; {new Date().getFullYear()} {COMPANY_INFO.name}. All
              rights reserved.
            </p>
            <p className="mt-1">{COMPANY_INFO.addressLines.join(", ")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
