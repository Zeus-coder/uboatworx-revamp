export const HERO = {
  eyebrow: "U-Boat Worx — The World's Leading Submarine Company",
  headline: "Explore the Wonders of the Subsea",
  subhead:
    "Discover the future of underwater exploration. U-Boat Worx designs and builds the world's most advanced private submersibles.",
  videoMp4:
    "https://www.uboatworx.com/wp-content/uploads/2022/12/Uboat-Website-Vid-4K.mp4",
  videoWebm:
    "https://www.uboatworx.com/wp-content/uploads/2022/12/Uboat-Website-Vid.webm",
  poster:
    "https://www.uboatworx.com/wp-content/uploads/2018/09/new_home_cover-1920x1080.jpg",
  primaryCta: { label: "Explore My Applications", href: "#applications" },
  secondaryCta: { label: "Play Video", href: "#" },
};

export type Stat = {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
};

export const STATS: Stat[] = [
  { value: 14, suffix: "+", label: "Years of Subsea Engineering" },
  { value: 3000, prefix: "100–", suffix: " m", label: "Certified Operating Depths" },
  { value: 120, prefix: "1–", suffix: "", label: "Passengers per Submersible" },
  { value: 9, suffix: "", label: "Production Submarine Families" },
];

export type ApplicationCard = {
  title: string;
  description: string;
  cta: string;
  image: string;
  modelSlug: string;
};

export const APPLICATIONS: ApplicationCard[] = [
  {
    title: "Yachting",
    description:
      "Diving operations are simple and safe with a U-Boat Worx submarine. Whether it's a wreck-diving expedition in the Mediterranean or an exploration dive in the Arctic Sea, U-Boat Worx has the perfect private submarine for every occasion.",
    cta: "Discover Yachting",
    image:
      "https://www.uboatworx.com/wp-content/uploads/2017/06/U-Boat-Worx-private-submarine-The-Super-Yacht-Sub-3-C-Joachim-Blomme-03-1320x640.jpg",
    modelSlug: "super-yacht-sub",
  },
  {
    title: "Cruise",
    description:
      "Offering a private submarine dive experience during a holiday at sea is a unique selling point for any luxury cruise operation — a key point of difference that lets guests who can't dive themselves still enjoy the magic of the subsea world.",
    cta: "Discover Cruising",
    image:
      "https://www.uboatworx.com/wp-content/uploads/2018/10/1920X1080-Afbeeldingen-Cruise-1-1320x640.jpg",
    modelSlug: "cruise-sub",
  },
  {
    title: "Tourism",
    description:
      "The most dazzling treasures of many beach resorts are concealed below the surface — and with a personal submersible, those treasures become accessible to everyone, creating a memorable experience for tourists and adventurous explorers alike.",
    cta: "Discover Tourism",
    image:
      "https://www.uboatworx.com/wp-content/uploads/2018/10/1320X640-Afbeeldingen-Yachting-3.jpg",
    modelSlug: "nemo",
  },
  {
    title: "Research",
    description:
      "Nature has created the most beautiful underwater landscapes — and they conceal fascinating markers of human history. With over fourteen years of experience operating the world's largest fleet of submersibles, U-Boat Worx offers research organisations the safest, best-performing platforms for exploring the underwater world.",
    cta: "Discover Research",
    image: "https://www.uboatworx.com/wp-content/uploads/2018/09/tbo_4.jpg",
    modelSlug: "c-researcher",
  },
  {
    title: "Cinematography",
    description:
      "Just like the first underwater films from Cousteau, underwater cinematography captures the imagination of millions. U-Boat Worx offers professional film producers the chance to film and direct from the safety and comfort of a private submersible — going deeper, further and longer than any conventional approach.",
    cta: "Discover Filming",
    image: "https://www.uboatworx.com/wp-content/uploads/2018/09/tbo_5.jpg",
    modelSlug: "c-explorer",
  },
];

export const NAVAL_TEASER = {
  eyebrow: "UBW Naval",
  headline: "20 Years of Subsea Mastery — Now Advancing Defense",
  description:
    "U-Boat Worx applies two decades of manned-submersible engineering to defense and security applications, bringing covert mobility, ISR and special-operations support beneath the surface.",
  cta: { label: "Discover UBW Naval", href: "/coming-soon/ubw-naval" },
};

export const CTA_BANNER = {
  headline: "Ready to Explore the Subsea?",
  description:
    "Speak with our team about ownership, charter or bespoke configurations — and start planning your descent.",
  cta: { label: "Contact Our Team", href: "/contact" },
};

export const COMPANY_INFO = {
  name: "U-Boat Worx B.V.",
  addressLines: ["Franse Akker 9", "4824 AL Breda", "The Netherlands"],
  phone: "+31 (0)76 5713096",
  email: "info@uboatworx.com",
  hours: "Monday – Friday, 8:30–17:30 (GMT+1)",
  image:
    "https://www.uboatworx.com/wp-content/uploads/2020/07/U-Boat-Worx-pand4774-1920x1280.jpg",
};

export type Dealer = {
  region: string;
  name: string;
  location: string;
};

export const DEALERS: Dealer[] = [
  {
    region: "United States",
    name: "Yacht Chandlers",
    location: "Fort Lauderdale, Florida",
  },
  {
    region: "United Kingdom",
    name: "Ocean Independence",
    location: "London, England",
  },
  {
    region: "United Kingdom",
    name: "Superyacht Tenders & Toys",
    location: "Ipswich, England",
  },
];

export const SUBMARINE_INTERESTS = ["New Build", "Pre-Owned", "Custom"] as const;

export const ENQUIRY_APPLICATIONS = [
  "Yachting",
  "Tourism",
  "Private",
  "Research",
  "Offshore",
  "Joint Ownership",
] as const;
