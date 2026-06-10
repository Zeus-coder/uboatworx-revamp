export type ModelVariant = {
  name: string;
  depth: string;
  occupancy: string;
  weight: string;
  dimensions: string;
  battery?: string;
  speed?: string;
  endurance?: string;
  price?: string;
  notes?: string;
};

export type ModelHighlight = {
  title: string;
  description: string;
};

export type Application =
  | "Yachting"
  | "Cruise"
  | "Tourism"
  | "Research"
  | "Cinematography"
  | "Personal"
  | "Performance"
  | "Entertainment"
  | "Naval";

export type ModelFamily = {
  slug: string;
  name: string;
  series: string;
  applications: Application[];
  tagline: string;
  shortDescription: string;
  description: string[];
  heroImage: string;
  gallery?: string[];
  variants: ModelVariant[];
  highlights: ModelHighlight[];
  safetyFeatures: string[];
};

export const FILTER_CATEGORIES: Application[] = [
  "Yachting",
  "Cruise",
  "Research",
  "Personal",
  "Performance",
  "Entertainment",
];

export const MODEL_FAMILIES: ModelFamily[] = [
  {
    slug: "nemo",
    name: "NEMO",
    series: "Personal Submarine",
    applications: ["Personal", "Tourism"],
    tagline: "Personal submarine, redefined",
    shortDescription:
      "The world's lightest submersible, and the only series-produced personal submarine ever built — your private gateway to the deep.",
    description: [
      "NEMO compresses everything U-Boat Worx has learned about deep-sea engineering into a single-passenger craft small enough to launch from a tender, a dock, or the swim platform of almost any yacht.",
      "A fully acrylic pressure hull wraps the cabin in glass, putting pilot and passenger inside an uninterrupted 360° view of the reef, wreck, or open blue beyond.",
      "Designed for series production rather than one-off builds, NEMO brings the cost and lead time of private submarine ownership down to levels never seen before in the industry.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2023/07/NEMO-price-1-1024x759.png",
    variants: [
      {
        name: "NEMO",
        depth: "100 m (330 ft)",
        occupancy: "1 passenger + 1 pilot",
        weight: "2,500 kg (5,510 lbs)",
        dimensions: "280 × 231 × 155 cm",
        speed: "3 knots",
        endurance: "8 hours",
        price: "From €1,650,000 (ex. VAT)",
      },
    ],
    highlights: [
      {
        title: "Acrylic Pressure Hull",
        description:
          "A single transparent acrylic sphere gives both occupants an undistorted, panoramic view of the underwater world.",
      },
      {
        title: "MANTA Controller",
        description:
          "Hand the controls to your passenger with auto-heading and auto-depth assistance built in.",
      },
      {
        title: "MARLIN Surface Remote",
        description:
          "Launch and recover NEMO wirelessly from the surface, without a pilot on board for transfer.",
      },
      {
        title: "The Lightest Submarine Ever Built",
        description:
          "At 2,500 kg, NEMO stows in minimal space and deploys with a single lifting point.",
      },
      {
        title: "Series Production",
        description:
          "The only series-produced personal submarine in the world — proven engineering, faster delivery.",
      },
      {
        title: "Red Dot Design Award",
        description:
          "Recognised for design excellence in the Mobility & Transportation category.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch — automatic resurfacing if the pilot is incapacitated",
      "Manually releasable emergency drop weight",
      "Dyneema safety buoy rated to 1.5× operating depth",
      "Acoustic pinger for underwater location tracking",
      "DNV certified design, construction and testing",
    ],
  },
  {
    slug: "c-explorer",
    name: "C-Explorer",
    series: "Exploration Submarine",
    applications: ["Research", "Cinematography", "Tourism"],
    tagline: "The ultimate subsea explorer",
    shortDescription:
      "An undistorted view of the subsea world in two sizes — built for explorers, scientists and filmmakers who need to get close to the action.",
    description: [
      "The C-Explorer series is the workhorse of the U-Boat Worx fleet: a fully acrylic, forward-positioned pressure hull that delivers a true 360° field of view for pilots, passengers and camera operators alike.",
      "Available in 3- and 5-person configurations, C-Explorer balances a compact footprint with a spacious, air-conditioned cabin, luxury seating and a Bluetooth audio system.",
      "Lithium-ion battery technology means quick recharges and virtually maintenance-free operation between dives — built to run all day, every day.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2021/02/CE3-1024x759.png",
    gallery: [
      "https://www.uboatworx.com/wp-content/uploads/2016/10/600X600-C-Explorer-3-1-585x585.jpg",
      "https://www.uboatworx.com/wp-content/uploads/2016/10/600X600-C-Explorer-3-2-585x585.jpg",
      "https://www.uboatworx.com/wp-content/uploads/2016/10/600X600-C-Explorer-3-4-585x585.jpg",
      "https://www.uboatworx.com/wp-content/uploads/2016/10/600X600-C-Explorer-3-5-585x585.jpg",
      "https://www.uboatworx.com/wp-content/uploads/2016/10/C-Explorer-3-Anatomy-Front-Side-View-Transparent_01.png",
      "https://www.uboatworx.com/wp-content/uploads/2016/10/C-Explorer-3-Top-View-Orange_01-1024x683.jpg",
    ],
    variants: [
      {
        name: "C-Explorer 3",
        depth: "300 m (1,000 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "6,010 kg (13,250 lbs)",
        dimensions: "423 × 321 × 233 cm",
        battery: "43.2 kWh lithium-ion",
        speed: "3 knots",
        endurance: "16 hours",
      },
      {
        name: "C-Explorer 5",
        depth: "200 m (650 ft)",
        occupancy: "4 passengers + 1 pilot",
        weight: "7,340 kg (16,180 lbs)",
        dimensions: "511 × 299 × 225 cm",
        battery: "43.2 kWh lithium-ion",
        speed: "3 knots",
        endurance: "16 hours",
      },
    ],
    highlights: [
      {
        title: "360° Acrylic Viewport",
        description:
          "A forward-positioned acrylic sphere gives every seat an unobstructed, undistorted view of the deep.",
      },
      {
        title: "Lithium-ion Battery System",
        description:
          "43.2 kWh of maintenance-free power with rapid recharge between dives.",
      },
      {
        title: "Hypalon® Diving Tanks",
        description:
          "Flexible, corrosion-resistant ballast tanks engineered for years of saltwater service.",
      },
      {
        title: "MANTA & MARLIN Controllers",
        description:
          "Supervised passenger steering plus a wireless surface remote for launch and recovery.",
      },
      {
        title: "U-Boat Worx Information System",
        description:
          "A touchscreen dashboard giving the pilot real-time dive data at a glance.",
      },
      {
        title: "Single-Point Lift",
        description:
          "One certified lifting point for fast, safe launch and recovery from any support vessel.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch — automatic resurfacing if the pilot is incapacitated",
      "Manually releasable emergency drop weight",
      "Dyneema safety buoy rated to 1.5× operating depth",
      "Acoustic pinger for underwater location tracking",
      "DNV GL certified design, construction and testing",
    ],
  },
  {
    slug: "c-researcher",
    name: "C-Researcher",
    series: "Research Submarine",
    applications: ["Research", "Naval"],
    tagline: "Submersibles to 3,000 metres",
    shortDescription:
      "The deepest-diving submersibles in the world with a fully acrylic pressure sphere — built for scientists, researchers, documentary makers and explorers.",
    description: [
      "The C-Researcher series pushes the acrylic pressure hull further than any other manned submersible, with certified configurations diving to 3,000 metres.",
      "Every C-Researcher pairs research-grade capability with the comforts U-Boat Worx is known for: air conditioning, Bluetooth audio, and an integrated acoustic underwater telephone for ship-to-sub communication.",
      "Low-height (LH) variants are purpose-built for superyacht garages, bringing serious depth capability to vessels with limited hangar height.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2021/02/CR3-1-1024x759.png",
    variants: [
      {
        name: "C-Researcher 2 — 500",
        depth: "500 m (1,640 ft)",
        occupancy: "1 passenger + 1 pilot",
        weight: "5,750 kg",
        dimensions: "319 × 280 × 214 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "C-Researcher 2 — 1,140",
        depth: "1,140 m (3,740 ft)",
        occupancy: "1 passenger + 1 pilot",
        weight: "7,200 kg",
        dimensions: "381 × 336 × 250 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "C-Researcher 2 — 3,000",
        depth: "3,000 m (9,840 ft)",
        occupancy: "1 passenger + 1 pilot",
        weight: "9,960 kg",
        dimensions: "381 × 336 × 250 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "C-Researcher 3 — 300",
        depth: "300 m (1,000 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "6,300 kg",
        dimensions: "403 × 319 × 237 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "C-Researcher 3 — 1,140",
        depth: "1,140 m (3,740 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "8,900 kg",
        dimensions: "425 × 360 × 270 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "C-Researcher 3 — 2,500",
        depth: "2,500 m (8,200 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "11,300 kg",
        dimensions: "425 × 360 × 270 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "C-Researcher 3 LH — 500",
        depth: "500 m (1,640 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "4,100 kg",
        dimensions: "400 × 346 × 230 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
        notes: "Low-height variant for superyacht garage integration",
      },
      {
        name: "C-Researcher 3 LH — 1,700",
        depth: "1,700 m (5,570 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "10,500 kg",
        dimensions: "400 × 346 × 230 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
        notes: "Low-height variant for superyacht garage integration",
      },
      {
        name: "C-Researcher 5 — 300",
        depth: "300 m (1,000 ft)",
        occupancy: "4 passengers + 1 pilot",
        weight: "8,600 kg",
        dimensions: "400 × 346 × 230 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
    ],
    highlights: [
      {
        title: "Fully Acrylic Pressure Hull",
        description:
          "A forward-positioned acrylic sphere — the deepest-diving design of its kind anywhere in the world.",
      },
      {
        title: "96-Hour Life Support",
        description:
          "Standard across the range, providing a substantial safety margin on every dive.",
      },
      {
        title: "Pressure-Tolerant Battery",
        description:
          "62 kWh lithium-ion system delivers 18-hour endurance at any certified depth.",
      },
      {
        title: "Low-Height (LH) Variants",
        description:
          "Engineered to fit inside superyacht garages without compromising depth rating.",
      },
      {
        title: "130° Sonar, 100 m Range",
        description:
          "Wide-angle awareness for navigation in low-visibility or deep-water conditions.",
      },
      {
        title: "Red Dot Product Design Award",
        description:
          "Recognised internationally for engineering and design excellence.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch — automatic resurfacing if the pilot is incapacitated",
      "96-hour emergency life support as standard",
      "Manually releasable emergency drop weight",
      "Dyneema safety buoy rated to 1.5× operating depth",
      "Acoustic pinger for underwater location tracking",
      "DNV certified design, construction and testing",
    ],
  },
  {
    slug: "cruise-sub",
    name: "Cruise Sub",
    series: "Cruise Submarine",
    applications: ["Cruise", "Tourism"],
    tagline: "Ultimate luxury multi-person submarine",
    shortDescription:
      "The best-selling private submarine in the world — a record-breaking, double-acrylic-sphere platform built for cruise and tourism operators.",
    description: [
      "Cruise Sub puts groups of five to eleven guests inside twin acrylic spheres for a fully immersive 360° dive experience, with revolving seating platforms that let every passenger rotate toward the action.",
      "Eight vectored thrusters give Cruise Sub true omni-directional movement — forward, reverse, sideways, up and down — for precise positioning over reefs and wrecks.",
      "Since its 2018 introduction, more than fifteen Cruise Sub configurations have been sold and deployed worldwide, and the Cruise Sub 7–1140 holds the record for the highest-capacity, deepest-diving submersible ever certified.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2021/02/CS7300-1024x759.png",
    variants: [
      {
        name: "Cruise Sub 5 — 1,700",
        depth: "500 – 1,700 m",
        occupancy: "5 passengers + 1 pilot",
        weight: "8,500 – 16,000 kg",
        dimensions: "403 × 285 × 210 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "Cruise Sub 7 — 1,140",
        depth: "300 – 1,140 m",
        occupancy: "7 passengers + 1 pilot",
        weight: "9,500 – 14,500 kg",
        dimensions: "450–490 × 320–330 × 232–250 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
        notes: "World record: highest-capacity, deepest-diving submersible ever certified",
      },
      {
        name: "Cruise Sub 9",
        depth: "300 m",
        occupancy: "9 passengers + 1 pilot",
        weight: "11,000 kg",
        dimensions: "466 × 335 × 250 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "Cruise Sub 11",
        depth: "200 m",
        occupancy: "11 passengers + 1 pilot",
        weight: "13,300 kg",
        dimensions: "495 × 340 × 260 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
    ],
    highlights: [
      {
        title: "Double Acrylic Sphere",
        description:
          "Up to 6,840 litres of interior volume — more than any single-bubble competitor design.",
      },
      {
        title: "Revolving Seating Platforms",
        description:
          "Every passenger can rotate their seat toward whatever they want to see.",
      },
      {
        title: "Omni-Directional Propulsion",
        description:
          "Eight vectored thrusters move Cruise Sub forward, reverse, laterally, up and down.",
      },
      {
        title: "MANTA & MARLIN Controllers",
        description:
          "Supervised passenger steering plus wireless surface launch and recovery.",
      },
      {
        title: "Pressure-Tolerant Battery",
        description:
          "Up to 100% more capacity than traditional private submarine batteries.",
      },
      {
        title: "Up to 10 Dives a Day",
        description:
          "Supports up to 80 guests per day across repeated dive cycles.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch with 10-minute reset interval",
      "Manually releasable emergency drop weight",
      "Dyneema safety buoy rated to 1.5× operating depth",
      "USBL underwater positioning system",
      "DNV certified design, construction and testing",
    ],
  },
  {
    slug: "super-yacht-sub",
    name: "Super Yacht Sub 3",
    series: "Yacht Submarine",
    applications: ["Yachting"],
    tagline: "The most compact private submarine",
    shortDescription:
      "Purpose-built to integrate with superyachts — compact, container-shippable and engineered for effortless onboard storage.",
    description: [
      "Super Yacht Sub 3 was designed from the keel up to live aboard a yacht: small enough for a tender garage, light enough for a single-point crane, and finished to match the rest of the vessel's interior.",
      "A hyper-hemispherical acrylic viewport gives both passengers a near-total panoramic view, while the optional Freeboard Extender adds stability for launch and recovery in rougher water.",
      "Six superyachts already carry a Super Yacht Sub as standard equipment — including Shinkai, the first superyacht ever designed around a submersible.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2021/02/SYS3-1024x759.png",
    variants: [
      {
        name: "Super Yacht Sub 3",
        depth: "300 m (1,000 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "3,800 kg (8,380 lbs)",
        dimensions: "320 × 244 × 174 cm",
        battery: "21.6 kWh",
        speed: "3 knots",
        endurance: "12 hours",
      },
    ],
    highlights: [
      {
        title: "Hyper-Hemispherical Viewport",
        description:
          "An acrylic dome that wraps almost entirely around the cabin for a true panoramic view.",
      },
      {
        title: "Freeboard Extender",
        description:
          "Adds stability for launch and recovery in rough water, then folds away for compact storage.",
      },
      {
        title: "Container-Fit Design",
        description:
          "Sized to ship in a standard container and stow in a yacht's tender garage.",
      },
      {
        title: "130° Sonar, 100 m Range",
        description:
          "Advanced situational awareness for navigation around reefs, wrecks and other vessels.",
      },
      {
        title: "MANTA & MARLIN Controllers",
        description:
          "Supervised passenger steering plus wireless surface launch and recovery.",
      },
      {
        title: "Bespoke Interior",
        description:
          "Customisable leather seating, climate control and Bluetooth audio to match your yacht.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch — automatic resurfacing if the pilot is incapacitated",
      "Manually releasable emergency drop weight",
      "Dyneema safety buoy rated to 1.5× operating depth",
      "USBL underwater positioning system",
      "DNV certified design, construction and testing",
    ],
  },
  {
    slug: "nexus",
    name: "NEXUS",
    series: "Yacht & Cruise Submarine",
    applications: ["Yachting", "Cruise"],
    tagline: "A fully transparent elliptical pressure hull",
    shortDescription:
      "The most spacious cabin per occupant in the U-Boat Worx fleet, wrapped in a fully transparent elliptical pressure hull for visibility in every direction.",
    description: [
      "NEXUS reimagines the multi-passenger submersible around an elliptical acrylic hull that's transparent on every side — there's no 'back row' on board.",
      "Eight vectored horizontal thrusters give NEXUS true omni-directional movement, while revolving seating platforms let each guest face whatever catches their eye.",
      "With the largest hatch in its class, an optional elevator, and 90 cm of safe freeboard for stable surface boarding, NEXUS is engineered around passenger comfort from the first step aboard.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2022/04/NEXUS-1024x759.png",
    variants: [
      {
        name: "NEXUS 7",
        depth: "200 m (650 ft)",
        occupancy: "6 passengers + 1 pilot",
        weight: "11,000 kg",
        dimensions: "490 × 290 × 245 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
      {
        name: "NEXUS 8",
        depth: "200 m (650 ft)",
        occupancy: "Up to 9 (6 adults, 2 children + 1 pilot)",
        weight: "12,000 kg",
        dimensions: "490 × 290 × 245 cm",
        battery: "62 kWh",
        speed: "3 knots",
        endurance: "18 hours",
      },
    ],
    highlights: [
      {
        title: "Fully Transparent Elliptical Hull",
        description:
          "900–914 litres of cabin volume per occupant, with visibility in every direction.",
      },
      {
        title: "Revolving Seating Platforms",
        description:
          "Passenger seats rotate independently to face the view that matters most.",
      },
      {
        title: "Omni-Directional Thrusters",
        description:
          "Eight vectored thrusters enable true lateral, vertical and rotational movement.",
      },
      {
        title: "Largest Hatch in Class",
        description:
          "An oversized hatch with an optional elevator for effortless, dignified boarding.",
      },
      {
        title: "90 cm Safe Freeboard",
        description:
          "Stable, comfortable surface operations and boarding in real-world sea states.",
      },
      {
        title: "Pressure-Tolerant Battery",
        description:
          "Up to 100% more capacity than traditional private submarine batteries.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch — automatic resurfacing if the pilot is incapacitated",
      "Manually releasable emergency drop weight",
      "Acoustic pinger for underwater location tracking",
      "Dyneema safety buoy rated to 1.5× operating depth",
      "DNV certified design, construction and testing",
    ],
  },
  {
    slug: "super-sub",
    name: "Super Sub",
    series: "Performance Submarine",
    applications: ["Performance", "Naval", "Yachting"],
    tagline: "The world's fastest submersible",
    shortDescription:
      "The only private submarine fast enough to keep pace with sharks — 10-knot performance with hydrofoil-assisted banking turns.",
    description: [
      "Super Sub pairs U-Boat Worx's signature 360° acrylic hull with a hydrodynamic profile and 25 kW thrusters, reaching speeds of up to 10 knots underwater — more than three times faster than any other manned submersible in its class.",
      "Hydrofoil-assisted steering allows banking turns of up to 30°, controlled through the new SHARC controller for fast, intuitive maneuvering at speed.",
      "Despite the performance focus, Super Sub keeps the comforts U-Boat Worx is known for: air conditioning, Bluetooth audio, and 96-hour emergency life support.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2021/09/SuperSub_Side_Profile-1024x576.png",
    variants: [
      {
        name: "Super Sub",
        depth: "300 m (1,000 ft)",
        occupancy: "2 passengers + 1 pilot",
        weight: "9,000 kg (19,800 lbs)",
        dimensions: "650 × 327 × 214 cm",
        battery: "62 kWh",
        speed: "10 knots",
        endurance: "8 hours",
      },
    ],
    highlights: [
      {
        title: "10-Knot Top Speed",
        description:
          "More than three times faster underwater than any other private submarine — fast enough to follow sharks, dolphins and rays.",
      },
      {
        title: "SHARC Controller",
        description:
          "A purpose-built control system for confident, intuitive high-speed maneuvering.",
      },
      {
        title: "Hydrofoil Steering",
        description:
          "Banking turns of up to 30° for agile, exhilarating underwater handling.",
      },
      {
        title: "360° Acrylic Hull",
        description:
          "Full panoramic visibility, even at speed.",
      },
      {
        title: "Wide-Angle Sonar",
        description:
          "130° field of view with 100 m range for safe high-speed navigation.",
      },
      {
        title: "96-Hour Life Support",
        description:
          "The same safety margin as U-Boat Worx's deepest-diving research submersibles.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch — automatic resurfacing if the pilot is incapacitated",
      "96-hour emergency life support as standard",
      "Manually releasable emergency drop weight",
      "Acoustic pinger for underwater location tracking",
      "DNV certified design, construction and testing",
    ],
  },
  {
    slug: "nautilus",
    name: "Nautilus",
    series: "Yacht-Submarine Hybrid",
    applications: ["Yachting", "Tourism"],
    tagline: "The embodiment of exploration",
    shortDescription:
      "A 42-metre hybrid yacht-submarine that cruises the surface in total luxury and dives to 150 metres on a whim — inspired by Jules Verne's Nautilus.",
    description: [
      "Nautilus is the most ambitious vessel U-Boat Worx has ever engineered: a true superyacht above the water, and a certified manned submarine below it.",
      "On the surface, guests enjoy a retractable sundeck with freshwater pool and bar, a 50 m² lounge framed by four 4-metre circular windows, a master stateroom and four guest cabins.",
      "Submerged, the same vessel becomes a mezzanine-level observation platform with panoramic views — diving to 150 metres and running independently for up to 55 hours.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2022/10/Nautilus-1024x759.png",
    variants: [
      {
        name: "Nautilus",
        depth: "150 m (500 ft)",
        occupancy: "7 crew + up to 10 guests",
        weight: "1,610 GT",
        dimensions: "42 m LOA × 7.7 m beam",
        speed: "10 knots (surface & submerged)",
        endurance: "Up to 55 hours independent operation (~110 NM at 2 knots)",
        notes: "Diesel-electric propulsion · 3,200 NM range",
      },
    ],
    highlights: [
      {
        title: "Retractable Sundeck",
        description:
          "A surface-level deck with freshwater pool, bar and lounge that retracts before diving.",
      },
      {
        title: "Panoramic Lounge",
        description:
          "A 50 m² dining and lounge area framed by four 4-metre circular acrylic windows.",
      },
      {
        title: "Five-Cabin Layout",
        description:
          "A master stateroom plus four guest cabins, finished to superyacht standards.",
      },
      {
        title: "Mezzanine Observation Deck",
        description:
          "A dedicated underwater viewing level with uninterrupted panoramic sightlines.",
      },
      {
        title: "Retractable Beach Club",
        description:
          "A fold-out swim platform and beach club for surface anchorages.",
      },
      {
        title: "55-Hour Endurance",
        description:
          "Independent operation for over two days without surfacing for support.",
      },
    ],
    safetyFeatures: [
      "DNV-classed hull, propulsion and life-support systems",
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Redundant diesel-electric propulsion and power generation",
      "Advanced air filtration and climate control for extended submersion",
      "U-Boat Worx Information System for continuous, monitored diagnostics",
    ],
  },
  {
    slug: "uwep",
    name: "UWEP",
    series: "Entertainment Submarine",
    applications: ["Entertainment", "Tourism", "Cruise"],
    tagline: "Your venue under the sea",
    shortDescription:
      "A new class of exceptionally spacious, privately-operated entertainment submarines — configurable as a restaurant, casino, or event venue beneath the waves.",
    description: [
      "UWEP — the U-Boat Worx Entertainment Platform — is, by a wide margin, the largest manned submersible U-Boat Worx has ever designed: 35 metres long, with over 150 m² of configurable interior floor space.",
      "Operators can configure the interior as a restaurant, casino, wedding venue or conference space, complete with a full bar centerpiece, galley, reception area and five restrooms.",
      "Two 2-metre hatches at bow and stern, a fly-by-wire control system, sonar and 360° cameras support virtually unlimited dive cycles for up to 120 guests at a time.",
    ],
    heroImage:
      "https://www.uboatworx.com/wp-content/uploads/2022/10/UWEP-1024x759.png",
    variants: [
      {
        name: "UWEP",
        depth: "150 m (500 ft)",
        occupancy: "120 guests + 3 crew + 10 staff",
        weight: "1,050,000 kg",
        dimensions: "35.1 × 7.7 × 7.02 m",
        battery: "1,200 kWh",
        speed: "3 knots",
        endurance: "18 hours submerged",
        notes: "150+ m² configurable floor space · 85+ m² sundeck",
      },
    ],
    highlights: [
      {
        title: "Configurable Interior",
        description:
          "Restaurant, casino, wedding venue or conference space — built around your operation.",
      },
      {
        title: "VIP Lounge",
        description:
          "A premium viewing area for your most important guests.",
      },
      {
        title: "Twin 2 m Hatches",
        description:
          "Bow and stern access points for fast, comfortable boarding of up to 120 guests.",
      },
      {
        title: "Fly-by-Wire Controls",
        description:
          "Sonar and 360° camera coverage paired with modern fly-by-wire navigation.",
      },
      {
        title: "85+ m² Sundeck",
        description:
          "A full outdoor deck for surface operations between dives.",
      },
      {
        title: "Virtually Unlimited Dives",
        description:
          "Designed for continuous, repeated dive cycles throughout the operating day.",
      },
    ],
    safetyFeatures: [
      "Maximum Depth Protection — automatic ascent if certified limits are exceeded",
      "Deadman's Switch with 10-minute acknowledgement interval",
      "Manually releasable emergency drop weight",
      "Acoustic pinger for underwater location tracking",
      "DNV certified design, construction and testing",
    ],
  },
];

export function getModelBySlug(slug: string): ModelFamily | undefined {
  return MODEL_FAMILIES.find((model) => model.slug === slug);
}

export function getRelatedModels(slug: string, count = 3): ModelFamily[] {
  const others = MODEL_FAMILIES.filter((model) => model.slug !== slug);
  return others.slice(0, count);
}
