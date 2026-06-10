export type ComingSoonEntry = {
  slug: string;
  title: string;
  category: string;
  description: string;
};

export const COMING_SOON_PAGES: ComingSoonEntry[] = [
  {
    slug: "wetlease",
    title: "Wet Lease",
    category: "Operations",
    description:
      "Charter a fully crewed U-Boat Worx submersible for your operation, event or expedition — without the cost and commitment of ownership.",
  },
  {
    slug: "pre-owned",
    title: "Pre-Owned Submarines",
    category: "Ownership",
    description:
      "Certified, fully-refurbished U-Boat Worx submersibles available for immediate delivery, inspected and recommissioned to factory standards.",
  },
  {
    slug: "ubw-naval",
    title: "UBW Naval",
    category: "Defense",
    description:
      "Two decades of manned-submersible engineering, now advancing covert mobility, ISR and special-operations capability beneath the surface.",
  },
  {
    slug: "pilot-training-center",
    title: "Pilot Training Center",
    category: "Training",
    description:
      "Certified pilot training programmes for owners, crew and operators — covering operation, maintenance and emergency procedures.",
  },
  {
    slug: "about-us",
    title: "About U-Boat Worx",
    category: "Company",
    description:
      "The story behind the world's leading manufacturer of private submarines — our history, our people, and our mission to open the deep ocean to everyone.",
  },
  {
    slug: "careers",
    title: "Careers",
    category: "Company",
    description:
      "Join the engineers, craftspeople and innovators building the world's most advanced private submersibles in Breda, the Netherlands.",
  },
  {
    slug: "support",
    title: "Support",
    category: "Resources",
    description:
      "24/7 owner support, scheduled maintenance, spare parts and global service coordination for every U-Boat Worx submersible.",
  },
  {
    slug: "gallery",
    title: "Gallery",
    category: "Resources",
    description:
      "Photography and film from the U-Boat Worx fleet operating around the world — from superyacht garages to the deep Atlantic.",
  },
  {
    slug: "news",
    title: "News",
    category: "Company",
    description:
      "The latest announcements, deliveries, expeditions and milestones from U-Boat Worx.",
  },
  {
    slug: "pressroom",
    title: "Pressroom",
    category: "Company",
    description:
      "Press resources, media contacts and brand assets for journalists covering U-Boat Worx.",
  },
  {
    slug: "training",
    title: "Training",
    category: "Resources",
    description:
      "Operational and maintenance training programmes designed to keep your crew confident and your submersible mission-ready.",
  },
  {
    slug: "ownership",
    title: "Ownership Experience",
    category: "Ownership",
    description:
      "What it means to own a U-Boat Worx submersible — from commissioning and delivery through years of expeditions.",
  },
  {
    slug: "bespoke",
    title: "Bespoke Submarines",
    category: "Ownership",
    description:
      "Fully custom submersibles engineered to your specification — from interior finishes to mission-specific equipment.",
  },
  {
    slug: "options",
    title: "Options & Customisation",
    category: "Ownership",
    description:
      "Personalise your submarine inside and out, from cabin materials and finishes to mission-specific equipment packages.",
  },
];

export function getComingSoonBySlug(slug: string): ComingSoonEntry | undefined {
  return COMING_SOON_PAGES.find((entry) => entry.slug === slug);
}
