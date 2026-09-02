"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Instagram,
  Mail,
  MapPin,
  Menu,
  Moon,
  PhoneCall,
  Search,
  Send,
  Sparkles,
  Star,
  Sun,
  X
} from "lucide-react";
import {
  clients,
  faqs,
  navItems,
  primaryEmail,
  primaryPhone,
  projects,
  services,
  stats,
  testimonials,
  timeline,
  trustBullets,
  whatsappPhone
} from "@/lib/content";

type Project = (typeof projects)[number];

const instagramUrl =
  "https://www.instagram.com/visionorganisation_?igsh=MThtOXVibmNpeDU0bA==";


const fadeUp = {
  initial: { opacity: 0, y: 34 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

function slug(label: string) {
  return label.toLowerCase().replace(/\s+/g, "-");
}


export default function VisionPortfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const [sent, setSent] = useState(false);
  const [query, setQuery] = useState("");
  const [progress, setProgress] = useState(0);
  const [mouseActive, setMouseActive] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springX = useSpring(cursorX, { stiffness: 180, damping: 28 });
  const springY = useSpring(cursorY, { stiffness: 180, damping: 28 });

  const filteredProjects = useMemo(() => {
    const needle = query.toLowerCase();
    return projects.filter((project) =>
      [project.client, project.industry, project.metric].join(" ").toLowerCase().includes(needle)
    );
  }, [query]);

  useEffect(() => {
    document.body.classList.toggle("light", lightMode);
  }, [lightMode]);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      if (!mouseActive) setMouseActive(true);
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY, mouseActive]);


  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">

      {mouseActive && (
        <motion.div
          className="pointer-events-none fixed z-[120] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/35 mix-blend-screen md:block"
          style={{ left: springX, top: springY }}
        />
      )}

      <div className="fixed left-0 top-0 z-[130] h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" style={{ width: `${progress}%` }} />

      <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} lightMode={lightMode} setLightMode={setLightMode} />

      <section id="home" className="hero-mask relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(20,156,255,.25),transparent_28rem)]" />
          <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[conic-gradient(from_120deg,rgba(34,211,238,.16),transparent,rgba(139,92,246,.16),transparent)] blur-sm motion-safe:animate-[spin_28s_linear_infinite]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:items-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 text-xs font-medium text-cyan-100 backdrop-blur">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_20px_rgba(34,211,238,.9)]" />
              Marketing Agency | Content Creation & Social Media Management
            </div>
            <h1 className="max-w-5xl font-display text-5xl font-bold leading-[0.94] text-balance sm:text-7xl lg:text-8xl">Helping Brands Grow Digitally.</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-white/70 light:text-slate-700 sm:text-xl">
              Creative Marketing Solutions That Generate Real Growth. Vision Organisation builds premium content, Instagram systems, branding, and performance campaigns for ambitious brands.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href="#portfolio" className="group inline-flex items-center justify-center rounded-full bg-white px-6 py-4 font-semibold text-slate-950 transition hover:scale-[1.02]">
                View Portfolio <ChevronRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/10 px-6 py-4 font-semibold backdrop-blur transition hover:bg-white/15">
                Contact Us
              </a>
            </div>
            <div className="mt-12 grid grid-cols-3 gap-3 sm:max-w-2xl">
              {trustBullets.map((item) => (
                <div key={item.label} className="glass rounded-[8px] p-3">
                  <item.icon className="mb-3 h-5 w-5 text-cyan-200" />
                  <p className="text-sm font-medium">{item.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />
      <ClientsSection />
      <ServicesSection />
      <PortfolioSection query={query} setQuery={setQuery} projects={filteredProjects} setActiveProject={setActiveProject} />
      <AboutSection />
      <TestimonialsSection />
      <FaqSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />
      <ContactSection />
      <Footer />
      <FloatingActions />
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </main>
  );
}

function SiteNav({
  menuOpen,
  setMenuOpen,
  lightMode,
  setLightMode
}: {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  lightMode: boolean;
  setLightMode: (value: boolean) => void;
}) {
  return (
    <header className="fixed inset-x-0 top-0 z-[110] px-4 pt-4 sm:px-6">
      <nav className="glass mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3">
        <a href="#home" className="flex items-center gap-3" aria-label="Vision Organisation home">
          <span className="h-10 w-10 overflow-hidden rounded-full border border-cyan-200/30 bg-black">
            <Image src="/logo.jpg" alt="Vision Organisation logo" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <span className="hidden font-display text-lg font-bold sm:block">Vision Organisation</span>
        </a>
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <a key={item} href={`#${slug(item)}`} className="rounded-full px-3 py-2 text-sm text-white/70 transition hover:bg-white/10 hover:text-white light:text-slate-700 light:hover:text-slate-950">
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button onClick={() => setLightMode(!lightMode)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10" aria-label="Toggle color mode">
            {lightMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
          </button>
          <a href="#contact" className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:scale-[1.02] sm:inline-flex">
            Let&apos;s Work Together
          </a>
          <button onClick={() => setMenuOpen(!menuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/10 lg:hidden" aria-label="Toggle menu">
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} className="glass mx-auto mt-3 max-w-7xl rounded-[8px] p-4 lg:hidden">
            <div className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => (
                <a key={item} onClick={() => setMenuOpen(false)} href={`#${slug(item)}`} className="rounded-[8px] px-4 py-3 text-lg font-medium hover:bg-white/10">
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy: string }) {
  return (
    <motion.div {...fadeUp} className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 light:text-blue-700">{eyebrow}</p>
      <h2 className="font-display text-4xl font-bold leading-tight text-balance sm:text-6xl">{title}</h2>
      <p className="mt-5 text-base leading-8 text-white/62 light:text-slate-700 sm:text-lg">{copy}</p>
    </motion.div>
  );
}

function StatsSection() {
  return (
    <section className="px-5 py-16 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 md:grid-cols-5">
        {stats.map((stat, index) => (
          <motion.div key={stat.label} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.04 }} className="glass rounded-[8px] p-5 text-center">
            <p className="font-display text-3xl font-bold text-cyan-100 light:text-blue-700 sm:text-4xl">{stat.value}</p>
            <p className="mt-2 text-sm text-white/58 light:text-slate-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ClientsSection() {
  const [selectedClientIndex, setSelectedClientIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const activeClient = clients[selectedClientIndex];

  // Continuous marquee list
  const marqueeClients = [...clients, ...clients, ...clients, ...clients];

  const handlePrev = () => {
    setDirection(-1);
    setSelectedClientIndex((prev) => (prev === 0 ? clients.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setSelectedClientIndex((prev) => (prev === clients.length - 1 ? 0 : prev + 1));
  };

  const handleSelect = (index: number) => {
    setDirection(index > selectedClientIndex ? 1 : -1);
    setSelectedClientIndex(index);
  };

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 50 : -50,
      opacity: 0,
      scale: 0.98
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.35 },
        scale: { duration: 0.35 }
      }
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -50 : 50,
      opacity: 0,
      scale: 0.98,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.25 },
        scale: { duration: 0.25 }
      }
    })
  };

  return (
    <section id="clients" className="relative overflow-hidden px-5 py-24 sm:px-8 lg:px-12">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/4 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header with Integrated Slider Controls */}
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 light:text-blue-700">
              Featured Client Case Studies
            </p>
            <h2 className="font-display text-4xl font-bold leading-tight text-balance sm:text-6xl">
              How We Power Industry Leaders & Creators.
            </h2>
            <p className="mt-4 text-base leading-8 text-white/65 light:text-slate-700 sm:text-lg">
              Explore our real client engagements — from complete social media management architecture for tech enterprises and healthcare SaaS to viral editing systems for high-reach creators.
            </p>
          </motion.div>

          {/* Slider Controls (Top-Right Counter & Buttons) */}
          <motion.div {...fadeUp} className="flex items-center gap-4 self-start lg:self-end">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] px-4 py-2 text-sm font-mono text-white/80 backdrop-blur-lg light:border-slate-200 light:bg-white light:text-slate-700">
              <span className="font-bold text-cyan-300 light:text-blue-600">0{selectedClientIndex + 1}</span>
              <span className="text-white/30 light:text-slate-400">/</span>
              <span>0{clients.length}</span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:scale-105 hover:border-cyan-400/50 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] light:border-slate-300 light:bg-white light:text-slate-900"
                aria-label="Previous Case Study"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-white/10 text-white transition hover:scale-105 hover:border-cyan-400/50 hover:bg-white/20 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] light:border-slate-300 light:bg-white light:text-slate-900"
                aria-label="Next Case Study"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Interactive Client Navigation Rail */}
        <div className="mb-8 grid gap-3 sm:grid-cols-3">
          {clients.map((client, index) => {
            const isSelected = selectedClientIndex === index;
            return (
              <button
                key={client.id}
                onClick={() => handleSelect(index)}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left backdrop-blur-xl transition-all duration-300 ${
                  isSelected
                    ? "border-cyan-400/60 bg-gradient-to-br from-white/[0.12] to-white/[0.04] shadow-[0_0_30px_rgba(34,211,238,0.2)] light:border-blue-500/50 light:bg-white"
                    : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06] light:border-slate-200 light:bg-white/60"
                }`}
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`relative h-12 w-12 shrink-0 overflow-hidden rounded-xl border p-1 shadow-inner transition duration-300 ${
                      isSelected
                        ? "border-cyan-300/80 bg-black/60"
                        : "border-white/15 bg-black/40 group-hover:scale-105"
                    }`}
                  >
                    <Image
                      src={client.logo}
                      alt={client.name}
                      width={48}
                      height={48}
                      className="h-full w-full rounded-lg object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-display text-base font-bold text-white light:text-slate-950">
                        {client.name}
                      </span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span
                        className={`inline-flex rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${client.badgeBorder}`}
                      >
                        {client.scope}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Active Progress Line Indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="activeClientTabGlow"
                    className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Full-Width Interactive Case-Study Slider Card */}
        <div className="relative min-h-[580px] overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-white/[0.08] via-white/[0.03] to-black/40 p-6 shadow-2xl backdrop-blur-2xl light:border-slate-200 light:bg-white/95 sm:p-10 lg:p-12">
          {/* Subtle Ambient Background Gradient */}
          <div
            className={`pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-gradient-to-br ${activeClient.accent} blur-3xl opacity-70`}
          />

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={activeClient.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative z-10 grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
            >
              {/* Left Column: Scope, Narrative, Case Highlight & Deliverables */}
              <div>
                {/* Scope, Category & Partnership Badges */}
                <div className="flex flex-wrap items-center gap-2.5">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wider ${activeClient.badgeBorder} shadow-sm backdrop-blur`}
                  >
                    <Sparkles className="h-3.5 w-3.5" />
                    {activeClient.scope}
                  </span>
                  <span className="rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 text-xs font-medium text-white/70 light:border-slate-200 light:text-slate-600">
                    {activeClient.category}
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3.5 py-1.5 text-xs font-semibold text-emerald-400 light:border-emerald-200 light:bg-emerald-50 light:text-emerald-700">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
                    Verified Partnership
                  </span>
                </div>

                {/* Client Title & Instagram Handle */}
                <div className="mt-6">
                  <h3 className="flex flex-wrap items-center gap-3 font-display text-3xl font-extrabold text-white light:text-slate-950 sm:text-5xl">
                    {activeClient.name}
                    {activeClient.instagramHandle && (
                      <span className="text-xl font-medium text-pink-400 light:text-pink-600 sm:text-2xl">
                        {activeClient.instagramHandle}
                      </span>
                    )}
                  </h3>
                  <p className="mt-3 text-lg font-semibold text-cyan-200 light:text-blue-700 sm:text-xl">
                    {activeClient.tagline}
                  </p>
                </div>

                {/* In-depth Narrative */}
                <p className="mt-5 text-base leading-8 text-white/75 light:text-slate-700 sm:text-lg">
                  {activeClient.description}
                </p>

                {/* Case Highlight Callout Quote */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.04] p-4.5 backdrop-blur-md light:border-slate-200 light:bg-slate-50">
                  <p className="text-sm italic leading-relaxed text-cyan-100/90 light:text-slate-800">
                    &ldquo;{activeClient.caseHighlight}&rdquo;
                  </p>
                </div>

                {/* Key Deliverables Grid */}
                <div className="mt-8 space-y-3">
                  <p className="text-xs font-bold uppercase tracking-widest text-white/50 light:text-slate-500">
                    Scope of Execution & Systems
                  </p>
                  <div className="grid gap-2.5 sm:grid-cols-2">
                    {activeClient.highlights.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/90 shadow-sm light:border-slate-200 light:bg-white light:text-slate-800"
                      >
                        <CheckCircle2 className="h-4 w-4 shrink-0 text-cyan-300 light:text-blue-600" />
                        <span className="font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Action Buttons */}
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  {activeClient.url && activeClient.url !== "" && (
                    <a
                      href={activeClient.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-pink-500/20 transition duration-300 hover:scale-[1.03] hover:shadow-pink-500/40"
                    >
                      <Instagram className="h-4 w-4 transition group-hover:rotate-12" />
                      {activeClient.instagramHandle
                        ? `Follow ${activeClient.instagramHandle} on Instagram`
                        : `View Client Profile`}
                      <ExternalLink className="h-4 w-4 opacity-80" />
                    </a>
                  )}

                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold backdrop-blur transition duration-200 hover:scale-[1.02] hover:bg-white/20 light:border-slate-300 light:bg-slate-100 light:text-slate-900"
                  >
                    <span>Request Similar Scope</span>
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Large Preview Media Banner & Performance Metrics */}
              <div className="space-y-6">
                {/* Large Preview Media Card */}
                <div className="group relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-b from-white/[0.1] to-black/60 p-8 text-center backdrop-blur-2xl transition duration-500 hover:border-cyan-400/40 hover:shadow-[0_0_40px_rgba(34,211,238,0.25)] light:border-slate-200 light:bg-white">
                  <div className="relative mx-auto mb-6 h-44 w-44 overflow-hidden rounded-3xl border-2 border-white/25 bg-black/70 p-3 shadow-2xl transition duration-500 group-hover:scale-105">
                    <Image
                      src={activeClient.logo}
                      alt={activeClient.name}
                      width={176}
                      height={176}
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  </div>

                  <h4 className="font-display text-2xl font-bold text-white light:text-slate-950">
                    {activeClient.name}
                  </h4>
                  {activeClient.creatorName && (
                    <p className="text-sm text-white/60 light:text-slate-600">
                      {activeClient.creatorName}
                    </p>
                  )}
                  <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3.5 py-1 text-xs font-bold text-cyan-200 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
                    {activeClient.scope} Partner
                  </p>
                </div>

                {/* 3 Prominent Impact & Growth Metric Badges */}
                <div className="grid grid-cols-3 gap-3">
                  {activeClient.metrics.map((metric) => (
                    <div
                      key={metric.label}
                      className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center shadow-md backdrop-blur-lg transition hover:-translate-y-1 hover:border-cyan-300/30 light:border-slate-200 light:bg-white"
                    >
                      <p className="font-display text-2xl font-black text-cyan-200 light:text-blue-700 sm:text-3xl">
                        {metric.value}
                      </p>
                      <p className="mt-1 text-xs font-medium leading-tight text-white/60 light:text-slate-600">
                        {metric.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Continuous Brand Marquee Ticker at bottom for extra social proof */}
        <div className="pause-hover mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] py-4 backdrop-blur-lg light:border-slate-200 light:bg-white/50">
          <div className="animate-marquee flex items-center gap-8">
            {marqueeClients.map((client, idx) => (
              <div
                key={`ticker-${client.id}-${idx}`}
                onClick={() => handleSelect(idx % clients.length)}
                className="flex shrink-0 cursor-pointer items-center gap-3 opacity-70 transition hover:opacity-100"
              >
                <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-full border border-white/20 bg-black/40">
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={32}
                    height={32}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-display text-sm font-semibold text-white light:text-slate-900">
                  {client.name}
                </span>
                <span className={`rounded-full border px-2 py-0.5 text-[9px] font-bold ${client.badgeBorder}`}>
                  {client.scope}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section id="services" className="px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="Services" title="Everything your brand needs to look credible and grow faster." copy="A complete content and marketing operating system, built with premium design, execution, and weekly optimization." />
      <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service, index) => (
          <motion.article key={service.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.025 }} className="group rounded-[8px] border border-white/10 bg-white/[.055] p-5 backdrop-blur transition duration-300 hover:-translate-y-2 hover:bg-white/[.09] hover:shadow-glow light:border-slate-200 light:bg-white/70">
            <service.icon className="mb-8 h-6 w-6 text-cyan-200 light:text-blue-700" />
            <h3 className="font-display text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 max-h-14 overflow-hidden text-sm leading-6 text-white/58 transition-all duration-300 group-hover:max-h-40 light:text-slate-600">{service.copy}</p>
            {service.title === "Advertising" && (
              <div className="mt-5 flex flex-wrap gap-2">
                {["Meta Ads", "JioHotstar Ads", "Google Ads"].map((platform) => (
                  <span key={platform} className="rounded-full border border-cyan-200/20 bg-cyan-300/10 px-3 py-1.5 text-xs font-semibold text-cyan-100 light:border-blue-200 light:bg-blue-50 light:text-blue-700">
                    {platform}
                  </span>
                ))}
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function PortfolioSection({
  query,
  setQuery,
  projects: visibleProjects,
  setActiveProject
}: {
  query: string;
  setQuery: (value: string) => void;
  projects: Project[];
  setActiveProject: (project: Project) => void;
}) {
  return (
    <section id="portfolio" className="px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="Portfolio" title="Case studies built around visibility, trust, and measurable growth." copy="A closer look at campaigns shaped around stronger visibility, cleaner positioning, and enquiries that are easier to convert." />
      <div className="mx-auto mb-6 flex max-w-7xl items-center gap-3 rounded-full border border-white/10 bg-white/[.06] px-4 py-3 light:border-slate-200 light:bg-white/75">
        <Search className="h-5 w-5 text-cyan-200 light:text-blue-700" />
        <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search projects, industries, metrics..." className="w-full bg-transparent text-sm outline-none placeholder:text-white/40 light:placeholder:text-slate-500" aria-label="Search portfolio projects" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <motion.button key={project.client} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} onClick={() => setActiveProject(project)} className="group overflow-hidden rounded-[8px] border border-white/10 bg-white/[.06] text-left backdrop-blur transition hover:-translate-y-2 hover:border-cyan-200/35 hover:shadow-glow light:border-slate-200 light:bg-white/75">
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(34,211,238,.55),transparent_16rem),linear-gradient(135deg,rgba(37,87,255,.7),rgba(4,7,17,.95)_56%,rgba(139,92,246,.45))]" />
              <div className="absolute bottom-5 left-5 right-5">
                <p className="mb-3 inline-flex rounded-full bg-black/50 px-3 py-1 text-xs text-cyan-100 backdrop-blur">{project.metric}</p>
                <h3 className="font-display text-3xl font-bold">{project.client}</h3>
                <p className="mt-1 text-sm text-white/70">{project.industry}</p>
              </div>
            </div>
            <div className="p-5">
              <p className="text-sm leading-6 text-white/62 light:text-slate-700">{project.solution}</p>
              <div className="mt-5 flex items-center justify-between text-sm font-semibold text-cyan-100 light:text-blue-700">
                Open Case Study <ChevronRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-start">
        <motion.div {...fadeUp}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 light:text-blue-700">About</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-6xl">A modern marketing partner for brands ready to look serious.</h2>
          <p className="mt-6 text-lg leading-8 text-white/62 light:text-slate-700">
            Vision Organisation combines strategy, content, branding, editing, and advertising into one focused growth partner. The mission is simple: make brands look premium, communicate clearly, and convert attention into measurable business results.
          </p>
        </motion.div>
        <div className="grid gap-4">
          {timeline.map((item, index) => (
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass rounded-[8px] p-6 light:bg-white/85">
              <div className="flex items-start gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-300/15 font-display text-lg font-bold text-cyan-100 light:bg-blue-50 light:text-blue-700">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold light:text-slate-950">{item.title}</h3>
                  <p className="mt-2 leading-7 text-white/60 light:text-slate-700">{item.copy}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="Testimonials" title="Premium execution, clearer positioning, stronger client confidence." copy="Straightforward client feedback from campaigns focused on better content, clearer messaging, and practical business growth." />
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
        {testimonials.map((item, index) => (
          <motion.figure key={item.name} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass rounded-[8px] p-6">
            <div className="mb-5 flex gap-1 text-cyan-200 light:text-blue-700">
              {Array.from({ length: item.rating }).map((_, star) => (
                <Star key={star} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg leading-8 text-white/76 light:text-slate-700">&ldquo;{item.quote}&rdquo;</blockquote>
            <figcaption className="mt-7 border-t border-white/10 pt-5 light:border-slate-200">
              <p className="font-semibold">{item.name}</p>
              <p className="text-sm text-white/50 light:text-slate-600">{item.role}</p>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}

function FaqSection({ activeFaq, setActiveFaq }: { activeFaq: number; setActiveFaq: (value: number) => void }) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="FAQ" title="Clear answers before the first call." copy="Simple answers about how Vision Organisation plans, creates, manages, and improves digital marketing work." />
      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((item, index) => (
          <button key={item.q} onClick={() => setActiveFaq(activeFaq === index ? -1 : index)} className="glass w-full rounded-[8px] p-5 text-left">
            <div className="flex items-center justify-between gap-5">
              <span className="font-display text-xl font-semibold">{item.q}</span>
              <ChevronRight className={`h-5 w-5 transition ${activeFaq === index ? "rotate-90" : ""}`} />
            </div>
            <AnimatePresence>
              {activeFaq === index && (
                <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden pt-4 leading-7 text-white/62 light:text-slate-700">
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="px-5 py-20 sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <motion.div {...fadeUp}>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-cyan-200 light:text-blue-700">Contact</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-6xl">Ready to build a premium digital presence?</h2>
          <p className="mt-6 text-lg leading-8 text-white/62 light:text-slate-700">
            Choose a private contact action. Phone numbers and email address stay hidden in the UI while the buttons open the right app automatically.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <a href={`tel:${primaryPhone}`} className="glass inline-flex items-center justify-center rounded-[8px] p-5 font-semibold">
              <PhoneCall className="mr-3 h-5 w-5 text-cyan-200 light:text-blue-700" /> Call Us
            </a>
            <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noreferrer" className="glass inline-flex items-center justify-center rounded-[8px] p-5 font-semibold">
              <Send className="mr-3 h-5 w-5 text-cyan-200 light:text-blue-700" /> WhatsApp Us
            </a>
            <a href={`mailto:${primaryEmail}`} className="glass inline-flex items-center justify-center rounded-[8px] p-5 font-semibold">
              <Mail className="mr-3 h-5 w-5 text-cyan-200 light:text-blue-700" /> Email Us
            </a>
            <div className="glass inline-flex items-center justify-center rounded-[8px] p-5 font-semibold">
              <MapPin className="mr-3 h-5 w-5 text-cyan-200 light:text-blue-700" /> Gujarat, India
            </div>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="glass overflow-hidden rounded-[8px]">
          <iframe title="Vision Organisation map" src="https://www.google.com/maps?q=Gujarat%2C%20India&output=embed" className="h-[26rem] w-full border-0" loading="lazy" />
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-5 py-10 light:border-slate-200 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="h-10 w-10 overflow-hidden rounded-full bg-black">
            <Image src="/logo.jpg" alt="Vision Organisation logo" width={48} height={48} className="h-full w-full object-cover" />
          </span>
          <div>
            <p className="font-display font-bold">Vision Organisation</p>
            <p className="text-sm text-white/50 light:text-slate-600">Digital Marketing Agency</p>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-3 text-sm text-white/58 light:text-slate-600">
          {["Services", "Portfolio", "Contact"].map((item) => (
            <a key={item} href={`#${slug(item)}`} className="hover:text-cyan-100 light:hover:text-blue-700">{item}</a>
          ))}
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-cyan-100 light:hover:text-blue-700" aria-label="Follow Vision Organisation on Instagram">
            <Instagram className="h-4 w-4" /> Follow us on Instagram
          </a>
        </div>
        <p className="text-sm text-white/45 light:text-slate-500">Copyright 2026 Vision Organisation. All rights reserved.</p>
      </div>
    </footer>
  );
}

function FloatingActions() {
  return (
    <div className="fixed bottom-4 right-4 z-[100] flex flex-col gap-3">
      <a href={`https://wa.me/${whatsappPhone}`} target="_blank" rel="noreferrer" className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-white shadow-lg" aria-label="WhatsApp Us">
        <Send className="h-5 w-5" />
      </a>
      <a href="#home" className="grid h-12 w-12 place-items-center rounded-full bg-white text-slate-950 shadow-lg" aria-label="Back to top">
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
}

function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[180] overflow-y-auto bg-black/80 p-4 backdrop-blur-xl" role="dialog" aria-modal="true">
          <motion.div initial={{ opacity: 0, y: 30, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 30, scale: 0.98 }} className="glass mx-auto my-10 max-w-5xl overflow-hidden rounded-[8px]">
            <div className="relative min-h-72 bg-[radial-gradient(circle_at_35%_30%,rgba(34,211,238,.55),transparent_16rem),linear-gradient(135deg,rgba(37,87,255,.75),rgba(4,7,17,.96)_56%,rgba(139,92,246,.45))] p-6 sm:p-8">
              <button onClick={onClose} className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full bg-black/35" aria-label="Close case study">
                <X className="h-5 w-5" />
              </button>
              <div className="absolute bottom-8 left-6 right-6 sm:left-8 sm:right-8">
                <p className="mb-3 inline-flex rounded-full bg-black/45 px-3 py-1 text-sm text-cyan-100">{project.metric}</p>
                <h2 className="font-display text-4xl font-bold sm:text-6xl">{project.client}</h2>
                <p className="mt-2 text-white/70">{project.industry}</p>
              </div>
            </div>
            <div className="grid gap-6 p-6 sm:p-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <h3 className="font-display text-2xl font-semibold">Challenge</h3>
                <p className="mt-3 leading-7 text-white/62 light:text-slate-700">{project.challenge}</p>
                <h3 className="mt-7 font-display text-2xl font-semibold">Solution</h3>
                <p className="mt-3 leading-7 text-white/62 light:text-slate-700">{project.solution}</p>
                <h3 className="mt-7 font-display text-2xl font-semibold">Client Feedback</h3>
                <p className="mt-3 leading-7 text-white/75 light:text-slate-700">&ldquo;{project.feedback}&rdquo;</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-[8px] border border-white/10 bg-white/[.06] p-5 light:border-slate-200 light:bg-white/70">
                  <h4 className="font-display text-xl font-semibold">Results</h4>
                  <div className="mt-4 space-y-2">
                    {project.results.map((result) => (
                      <p key={result} className="rounded-[8px] bg-black/25 px-3 py-2 text-sm light:bg-slate-100">{result}</p>
                    ))}
                  </div>
                </div>
                <div className="rounded-[8px] border border-white/10 bg-white/[.06] p-5 light:border-slate-200 light:bg-white/70">
                  <h4 className="font-display text-xl font-semibold">Gallery</h4>
                  <div className="mt-4 grid gap-2">
                    {project.gallery.map((item) => (
                      <div key={item} className="rounded-[8px] bg-[linear-gradient(135deg,rgba(34,211,238,.25),rgba(37,87,255,.18))] px-3 py-4 text-sm">{item}</div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
