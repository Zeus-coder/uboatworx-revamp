import { MODEL_FAMILIES } from "./models-data";

export type NavLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavGroup = {
  title: string;
  links: NavLink[];
};

export const MODEL_NAV_LINKS: NavLink[] = MODEL_FAMILIES.map((model) => ({
  label: model.name,
  href: `/production-models/${model.slug}`,
  description: model.tagline,
}));

export type PrimaryNavItem = NavLink & { megaMenu?: NavLink[] };

export const PRIMARY_NAV: PrimaryNavItem[] = [
  {
    label: "Production Models",
    href: "/production-models",
    megaMenu: MODEL_NAV_LINKS,
  },
  { label: "Wet Lease", href: "/coming-soon/wetlease" },
  { label: "Pre-Owned", href: "/coming-soon/pre-owned" },
  { label: "UBW Naval", href: "/coming-soon/ubw-naval" },
  { label: "Pilot Training Center", href: "/coming-soon/pilot-training-center" },
  { label: "Why U-Boat Worx", href: "/why-u-boat-worx" },
  { label: "Contact", href: "/contact" },
];

export const FOOTER_NAV: NavGroup[] = [
  {
    title: "Production Models",
    links: MODEL_NAV_LINKS,
  },
  {
    title: "Company",
    links: [
      { label: "Why U-Boat Worx", href: "/why-u-boat-worx" },
      { label: "About Us", href: "/coming-soon/about-us" },
      { label: "Careers", href: "/coming-soon/careers" },
      { label: "News", href: "/coming-soon/news" },
      { label: "Pressroom", href: "/coming-soon/pressroom" },
      { label: "Gallery", href: "/coming-soon/gallery" },
    ],
  },
  {
    title: "Ownership",
    links: [
      { label: "Wet Lease", href: "/coming-soon/wetlease" },
      { label: "Pre-Owned Submarines", href: "/coming-soon/pre-owned" },
      { label: "Bespoke Submarines", href: "/coming-soon/bespoke" },
      { label: "Options & Customisation", href: "/coming-soon/options" },
      { label: "Ownership Experience", href: "/coming-soon/ownership" },
    ],
  },
  {
    title: "Operations & Support",
    links: [
      { label: "UBW Naval", href: "/coming-soon/ubw-naval" },
      { label: "Pilot Training Center", href: "/coming-soon/pilot-training-center" },
      { label: "Training", href: "/coming-soon/training" },
      { label: "Support", href: "/coming-soon/support" },
      { label: "Contact & Dealers", href: "/contact" },
    ],
  },
];

export const SOCIAL_LINKS: NavLink[] = [
  { label: "LinkedIn", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "YouTube", href: "#" },
];
