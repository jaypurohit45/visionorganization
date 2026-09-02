import {
  BadgeCheck,
  BarChart3,
  Brush,
  Camera,
  Clapperboard,
  LineChart,
  Megaphone,
  PenTool,
  Rocket,
  Sparkles,
  Target,
  Video
} from "lucide-react";


export const primaryPhone = "+919429740745";
export const whatsappPhone = "918238577319";
export const primaryEmail = "infovisionorganisation@gmail.com";

export const navItems = [
  "Home",
  "Clients",
  "Services",
  "Portfolio",
  "About",
  "Testimonials",
  "Contact"
];

export const stats = [
  { value: "100+", label: "Projects" },
  { value: "30+", label: "Brands" },
  { value: "40M+", label: "Views generated" },
  { value: "2M+", label: "Engagements" },
  { value: "99%", label: "Client satisfaction" }
];

export const clients = [
  {
    id: "om-techsoft",
    name: "Om Techsoft",
    scope: "Full Social Media",
    category: "Technology & Software Development",
    logo: "/clients/omtechsoft.jpg",
    url: "https://www.instagram.com",
    tagline: "End-to-End Social Media Architecture & Technical Brand Presence",
    description:
      "We handle the entire social media ecosystem for Om Techsoft — from visual brand positioning and complex tech explainers to weekly carousel calendars, reels, and developer community engagement.",
    caseHighlight: "Transforming technical capabilities into sleek, high-engagement visual assets that drive qualified enterprise leads.",
    metrics: [
      { label: "Reach & Visibility", value: "3.4x" },
      { label: "Assets Delivered", value: "120+" },
      { label: "Inbound Enquiries", value: "+150%" }
    ],
    highlights: [
      "End-to-End Content Calendar & Posting Systems",
      "Tech Graphic Design & Educational Carousels",
      "Product Spotlight & Service Launch Campaigns",
      "Weekly Performance Analytics & Optimization"
    ],
    accent: "from-blue-600/30 via-cyan-500/15 to-transparent",
    glowColor: "rgba(59, 130, 246, 0.4)",
    badgeBorder: "border-cyan-400/40 text-cyan-300 bg-cyan-950/40",
    themePill: "bg-blue-500/10 text-blue-400 border-blue-500/20"
  },
  {
    id: "myclinic-software",
    name: "MyclinicSoftware",
    scope: "Full Social Media",
    category: "Healthcare & Clinic Management SaaS",
    logo: "/clients/myclinic.jpg",
    url: "https://www.instagram.com",
    tagline: "Medical SaaS Social Branding, Doctor Trust & Inbound Acquisition",
    description:
      "Vision Organisation drives the complete digital presence for MyclinicSoftware, architecting trust-focused campaigns, product walkthroughs, doctor testimonials, and medical workflow feature carousels.",
    caseHighlight: "Positioning healthcare software as an indispensable daily tool for modern clinics and hospitals through credible visual storytelling.",
    metrics: [
      { label: "Doctor Outreach", value: "4.8x" },
      { label: "SaaS Impressions", value: "2.8M+" },
      { label: "Lower Cost/Lead", value: "-42%" }
    ],
    highlights: [
      "Healthcare SaaS Product Walkthrough Creatives",
      "High-Trust Doctor Testimonials & Case Graphics",
      "Multi-Platform Organic Social Management",
      "Feature Breakdown & Clinic ROI Infographics"
    ],
    accent: "from-teal-600/30 via-emerald-500/15 to-transparent",
    glowColor: "rgba(20, 184, 166, 0.4)",
    badgeBorder: "border-teal-400/40 text-teal-300 bg-teal-950/40",
    themePill: "bg-teal-500/10 text-teal-400 border-teal-500/20"
  },
  {
    id: "whoparthyo",
    name: "Whoparthyo",
    creatorName: "Parth Parmar (Amdavadiman)",
    scope: "Editing",
    category: "Creator & Viral Entertainment",
    logo: "/clients/whoparthyo.jpg",
    url: "https://www.instagram.com/whoparthyo?igsi=MWdsdGlnM3hvYmhkZg==",
    instagramHandle: "@whoparthyo",
    tagline: "High-Retention Video Editing, Viral Reel Pacing & Motion Sound Design",
    description:
      "Producing viral comedy reels and high-engagement content for Parth Parmar (@whoparthyo) with pattern-breaking hooks, kinetic subtitles, sound effects, and color grading tuned for maximum algorithm retention.",
    caseHighlight: "Transforming raw footage into scroll-stopping comedy reels with razor-sharp comedic timing and cinematic sound design.",
    metrics: [
      { label: "Views Generated", value: "10M+" },
      { label: "Avg Watch Retention", value: "88%" },
      { label: "Engagement Boost", value: "3.2x" }
    ],
    highlights: [
      "Kinetic Subtitles & Dynamic Typography",
      "Pattern-Interrupt Editing & Comedic Pacing",
      "Multi-Track Sound Design & Sound Effects",
      "Color Grading & Platform-Specific Export Optimization"
    ],
    accent: "from-fuchsia-600/30 via-pink-500/15 to-transparent",
    glowColor: "rgba(236, 72, 153, 0.4)",
    badgeBorder: "border-pink-400/40 text-pink-300 bg-pink-950/40",
    themePill: "bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20"
  }
];

export const services = [
  {
    title: "Social Media Management",
    copy: "Daily brand systems, calendars, reporting, and community rhythm for consistent growth.",
    icon: Camera
  },
  {
    title: "Instagram Growth",
    copy: "Profile positioning, reel strategy, hooks, analytics, and high-retention formats.",
    icon: Rocket
  },
  {
    title: "Content Creation",
    copy: "Premium concepts, shoots, captions, and platform-ready creative assets.",
    icon: Sparkles
  },
  {
    title: "Branding",
    copy: "Identity, tone, visuals, launch systems, and memorable digital presence.",
    icon: PenTool
  },
  {
    title: "Performance Marketing",
    copy: "Campaign architecture, landing strategy, ad testing, and conversion-focused reporting.",
    icon: LineChart
  },
  {
    title: "Graphic Design",
    copy: "Scroll-stopping posts, carousels, brand templates, and polished visual campaigns.",
    icon: Brush
  },
  {
    title: "Video Editing",
    copy: "Clean pacing, premium motion, color, sound, subtitles, and platform-first exports.",
    icon: Video
  },
  {
    title: "Reel Editing",
    copy: "Short-form edits built around retention, pattern breaks, and clear calls to action.",
    icon: Clapperboard
  },
  {
    title: "Advertising",
    copy: "Creative-led ads for reach, leads, remarketing, launches, and audience expansion.",
    icon: Megaphone
  },
  {
    title: "Strategy",
    copy: "Brand audits, market positioning, content pillars, funnels, and monthly growth plans.",
    icon: Target
  }
];

export const projects = [
  {
    client: "Case Study 01",
    industry: "Beauty Studio Instagram Growth",
    metric: "10M+ Views",
    challenge: "The studio had strong service quality, but the Instagram page did not show the finish, process, and client trust clearly enough.",
    solution: "Planned service-focused reels, refined the visual grid, added proof-led stories, and built weekly content around transformations and client questions.",
    results: ["10M+ views", "4.2x profile visits", "58% more booking enquiries"],
    gallery: ["Transformation reels", "Service highlights", "Client proof stories"],
    feedback: "The page started looking more premium, and the enquiries became more serious and easier to convert."
  },
  {
    client: "Case Study 02",
    industry: "Cafe & Restaurant Visibility",
    metric: "5M+ Views",
    challenge: "The restaurant had good food visuals, but posts were inconsistent and did not create enough repeat attention from the local audience.",
    solution: "Created a reel calendar around signature dishes, customer moments, festive offers, and location-based creatives for discovery.",
    results: ["5M+ views", "2.9x engagement", "36% more order enquiries"],
    gallery: ["Signature dish reels", "Offer creatives", "Local audience content"],
    feedback: "The content finally matched the experience we give in the restaurant, and more people started asking about offers and visits."
  },
  {
    client: "Case Study 03",
    industry: "Education & Lead Generation",
    metric: "1.5M+ Views",
    challenge: "The brand needed to explain its offer more clearly and bring in better quality enquiries instead of only broad reach.",
    solution: "Built trust-based reels, student result creatives, FAQ carousels, and lead-focused ad creatives with clear qualification points.",
    results: ["1.5M+ views", "3.6x qualified leads", "28% lower cost per lead"],
    gallery: ["Result creatives", "FAQ carousels", "Lead ad visuals"],
    feedback: "The campaigns became clearer and more believable. We started getting leads who already understood what we offer."
  }
];
export const testimonials = [
  {
    name: "Beauty Studio Founder",
    role: "Client, Gujarat",
    quote:
      "The team understood our service quality and showed it properly online. The page looked cleaner, and the enquiries improved.",
    rating: 5
  },
  {
    name: "Restaurant Partner",
    role: "Client, Gujarat",
    quote:
      "They gave us consistent reels and offer creatives that people actually responded to. The content felt local and useful.",
    rating: 5
  },
  {
    name: "Education Brand Owner",
    role: "Client, Gujarat",
    quote:
      "The ads and reels explained our work better. We received more relevant leads instead of random messages.",
    rating: 5
  }
];
export const timeline = [
  {
    title: "Discover",
    copy: "Audit brand, offer, audience, competitors, and current content performance."
  },
  {
    title: "Design",
    copy: "Build the creative direction, content pillars, posting rhythm, and campaign plan."
  },
  {
    title: "Deploy",
    copy: "Produce content, publish campaigns, manage channels, and optimize weekly."
  },
  {
    title: "Scale",
    copy: "Double down on winners with analytics, ads, influencer loops, and retention systems."
  }
];

export const faqs = [
  {
    q: "Do you work with new brands?",
    a: "Yes. The process starts with positioning and a practical launch roadmap so the brand looks credible from day one."
  },
  {
    q: "Can you manage Instagram end to end?",
    a: "Yes. Strategy, content, posting, creative direction, reels, design, reporting, and growth experiments can all be handled."
  },
  {
    q: "How do we start?",
    a: "Use the Call Us, WhatsApp Us, or Email Us buttons. Private phone numbers and email addresses stay hidden in the visible UI."
  }
];

export const trustBullets = [
  { label: "Data-led creative", icon: BarChart3 },
  { label: "Premium visual systems", icon: BadgeCheck },
  { label: "Conversion-focused execution", icon: Target }
];
