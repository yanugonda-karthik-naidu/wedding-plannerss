export const NAV_LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
] as const;

// Curated wedding imagery from Unsplash (free to use)
export const IMG = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2000&q=80",
  heroAlt: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=2000&q=80",
  about: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&w=1400&q=80",
  story: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1400&q=80",
  cta: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=2000&q=80",
  servicesHero: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=2000&q=80",
  aboutHero: "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=2000&q=80",
  galleryHero: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=2000&q=80",
  contactHero: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?auto=format&fit=crop&w=2000&q=80",
};

export const GALLERY = [
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", category: "Couple Shoots", h: 1400 },
  { src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1200&q=80", category: "Decoration", h: 900 },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1200&q=80", category: "Reception", h: 1200 },
  { src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1200&q=80", category: "Decoration", h: 1000 },
  { src: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1200&q=80", category: "Couple Shoots", h: 1300 },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80", category: "Reception", h: 950 },
  { src: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?auto=format&fit=crop&w=1200&q=80", category: "Catering", h: 1100 },
  { src: "https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=1200&q=80", category: "Decoration", h: 1250 },
  { src: "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=1200&q=80", category: "Couple Shoots", h: 1050 },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1200&q=80", category: "Reception", h: 1350 },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1200&q=80", category: "Catering", h: 900 },
  { src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80", category: "Decoration", h: 1200 },
];

export const SERVICES = [
  {
    title: "Wedding Planning",
    short: "End-to-end orchestration of your big day with a dedicated planner.",
    icon: "GiDiamondRing",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=80",
    features: ["Personal wedding director", "Detailed budgeting & timelines", "Vendor coordination", "On-the-day management"],
  },
  {
    title: "Decoration & Florals",
    short: "Couture floral installations, mandap design and ambient styling.",
    icon: "GiFlowerPot",
    img: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1400&q=80",
    features: ["Bespoke mandap & stage design", "Floral installations", "Tablescapes & centerpieces", "Cinematic lighting design"],
  },
  {
    title: "Photography & Film",
    short: "Cinematic films and timeless portraits by award-winning artists.",
    icon: "MdCameraAlt",
    img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=1400&q=80",
    features: ["Pre-wedding shoots", "Candid photography", "Cinematic 4K films", "Drone coverage"],
  },
  {
    title: "Catering & Bar",
    short: "Curated multi-cuisine menus crafted by celebrity chefs.",
    icon: "MdRestaurant",
    img: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1400&q=80",
    features: ["Live food stations", "International cuisines", "Premium bar service", "Custom cake & desserts"],
  },
  {
    title: "Venue Booking",
    short: "Handpicked palaces, beach resorts and destination venues.",
    icon: "MdLocationOn",
    img: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1400&q=80",
    features: ["Destination venues", "Heritage palaces", "Beach & garden venues", "Logistics & travel desk"],
  },
  {
    title: "Entertainment",
    short: "Live bands, DJs, choreographers and surprise performances.",
    icon: "MdMusicNote",
    img: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&w=1400&q=80",
    features: ["Live bands & singers", "Celebrity DJs", "Choreography", "Special performances"],
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Aanya & Rohan",
    role: "Udaipur · 2025",
    quote:
      "Maison Aurelia turned our wildest dreams into reality. Every detail was thought of, every moment felt curated. We didn't lift a finger — only danced.",
    img: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Saanvi & Arjun",
    role: "Goa · 2024",
    quote:
      "Truly cinematic. From the floral installations to the catering, every element felt like it belonged in a magazine. Our guests are still talking about it.",
    img: "https://images.unsplash.com/photo-1525772764200-be829a350797?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Meher & Kabir",
    role: "Jaipur · 2024",
    quote:
      "The team handled everything with grace and precision. We felt celebrated, never stressed. A truly luxurious experience from start to finish.",
    img: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?auto=format&fit=crop&w=600&q=80",
  },
];

export const TEAM = [
  { name: "Aurelia Mehta", role: "Founder & Creative Director", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" },
  { name: "Ishaan Kapoor", role: "Head of Production", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
  { name: "Naina Sharma", role: "Lead Floral Designer", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
  { name: "Vikram Rao", role: "Director of Photography", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" },
];

export const PROCESS = [
  { step: "01", title: "Consultation", text: "A relaxed conversation to understand your story, vision and dreams." },
  { step: "02", title: "Planning", text: "Detailed timelines, budgets and curated vendor partners." },
  { step: "03", title: "Design", text: "Mood boards, floral concepts and 3D mandap visualizations." },
  { step: "04", title: "Execution", text: "Flawless on-ground production by our experienced team." },
  { step: "05", title: "Celebration", text: "You celebrate. We orchestrate every moment behind the scenes." },
];

export const PACKAGES = [
  {
    name: "Basic",
    price: "₹4.5 L",
    tagline: "Intimate ceremonies, perfectly curated.",
    features: ["Up to 100 guests", "1 wedding day coverage", "Décor & florals", "Coordination team", "Photography (8 hrs)"],
    highlight: false,
  },
  {
    name: "Premium",
    price: "₹12 L",
    tagline: "Multi-day celebrations with cinematic style.",
    features: ["Up to 300 guests", "3-day coverage", "Premium décor & lighting", "Dedicated planner", "Cinematic film + photos", "Live entertainment"],
    highlight: true,
  },
  {
    name: "Royal",
    price: "Custom",
    tagline: "Heritage palaces, no detail spared.",
    features: ["Unlimited guests", "Destination handling", "Luxury floral installations", "Celebrity entertainment", "Full creative direction", "Personal concierge"],
    highlight: false,
  },
];

export const FAQS = [
  { q: "How far in advance should we book?", a: "We recommend booking 8–12 months in advance for full-scale weddings, especially for destinations. Intimate ceremonies can sometimes be planned in 3–4 months." },
  { q: "Do you handle destination weddings?", a: "Absolutely. We've produced weddings in Udaipur, Jaipur, Goa, Bali, Tuscany and beyond. Our team manages logistics, travel and on-ground coordination end-to-end." },
  { q: "Can packages be customized?", a: "Yes — every wedding is bespoke. Our packages are starting points, and we tailor every element to your taste, guest count and budget." },
  { q: "What is included in the wedding planning package?", a: "Full creative direction, vendor management, budgeting, design, production, on-day coordination and a dedicated planner from day one to the final farewell." },
  { q: "Do you offer pre-wedding shoots?", a: "Yes, our cinematic pre-wedding films and portraits are a signature offering, and can be shot at locations of your choice in India or abroad." },
];
