"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowUp,
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
  Star,
  Sun,
  X
} from "lucide-react";
import {
  faqs,
  instagramUrl,
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
  const [loaded, setLoaded] = useState(false);

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
    const timer = window.setTimeout(() => setLoaded(true), 800);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const onMove = (event: MouseEvent) => {
      cursorX.set(event.clientX);
      cursorY.set(event.clientY);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [cursorX, cursorY]);


  return (
    <main className="relative min-h-screen overflow-hidden bg-[var(--background)] text-[var(--foreground)]">
      <AnimatePresence>
        {!loaded && (
          <motion.div className="fixed inset-0 z-[200] grid place-items-center bg-[#02040a]" exit={{ opacity: 0 }} transition={{ duration: 0.6 }}>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
              <div className="mx-auto mb-5 h-16 w-16 overflow-hidden rounded-full border border-cyan-300/30 bg-black shadow-glow">
                <Image src="/logo.jpg" alt="Vision Organisation logo" width={80} height={80} className="h-full w-full object-cover" priority />
              </div>
              <p className="font-display text-2xl font-semibold">Vision Organisation</p>
              <p className="mt-2 text-xs uppercase tracking-[0.45em] text-cyan-200/70">Digital Growth</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        className="pointer-events-none fixed z-[120] hidden h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/35 mix-blend-screen md:block"
        style={{ left: springX, top: springY }}
      />

      <div className="fixed left-0 top-0 z-[130] h-1 bg-gradient-to-r from-cyan-300 via-blue-500 to-violet-500" style={{ width: `${progress}%` }} />

      <SiteNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} lightMode={lightMode} setLightMode={setLightMode} />

      <section id="home" className="hero-mask relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-20 pt-28 sm:px-8 lg:px-12">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(20,156,255,.25),transparent_28rem)]" />
          <div className="absolute left-1/2 top-1/2 h-[42rem] w-[42rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[conic-gradient(from_120deg,rgba(34,211,238,.18),transparent,rgba(139,92,246,.18),transparent)] blur-sm animate-[spin_18s_linear_infinite]" />
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[var(--background)] to-transparent" />
        </div>

        <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[1.05fr_.95fr] lg:items-center">
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
              <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-cyan-300/30 px-6 py-4 font-semibold text-cyan-100 transition hover:bg-cyan-300/10">
                <Instagram className="mr-2 h-5 w-5" /> Instagram
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

          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.2 }} className="relative mx-auto w-full max-w-[33rem]">
            <div className="absolute -inset-8 rounded-full bg-blue-500/20 blur-3xl" />
            <div className="glass relative overflow-hidden rounded-[8px] p-4 sm:p-5">
              <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-20 left-8 h-56 w-56 rounded-full bg-blue-600/25 blur-3xl" />
              <div className="relative flex flex-col items-center gap-6 text-center">
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="group relative grid h-52 w-52 place-items-center rounded-[8px] border border-cyan-200/30 bg-black/80 p-5 shadow-[0_0_80px_rgba(34,211,238,.28)] transition hover:scale-[1.02] sm:h-64 sm:w-64" aria-label="Open Vision Organisation Instagram profile">
                  <div className="absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,.25),transparent_55%)]" />
                  <Image src="/logo.jpg" alt="Vision Organisation logo" width={260} height={260} className="relative h-full w-full object-contain drop-shadow-[0_0_28px_rgba(34,211,238,.45)]" priority />
                </a>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.34em] text-cyan-100/80">Instagram Profile</p>
                  <h2 className="mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl">visionorganisation_</h2>
                  <p className="mt-3 text-sm leading-6 text-white/62 light:text-slate-600">Tap the logo to open the official Vision Organisation Instagram profile.</p>
                </div>
                <div className="grid w-full grid-cols-3 gap-2 text-center">
                  {["Content", "Reels", "Branding"].map((label) => (
                    <div key={label} className="rounded-[8px] border border-white/10 bg-white/[.06] p-3">
                      <p className="text-xs font-semibold text-white/65 light:text-slate-600">{label}</p>
                    </div>
                  ))}
                </div>
                <a href={instagramUrl} target="_blank" rel="noreferrer" className="group inline-flex items-center justify-center rounded-full bg-white px-5 py-4 text-sm font-semibold text-slate-950 transition hover:scale-[1.02]">
                  <Instagram className="mr-2 h-4 w-4" /> Open Instagram Profile <ExternalLink className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <StatsSection />
      <ServicesSection />
      <PortfolioSection query={query} setQuery={setQuery} projects={filteredProjects} setActiveProject={setActiveProject} />
      <AboutSection />
      <TestimonialsSection />
      <InstagramSection />
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
              <div className="mt-5 grid gap-2">
                {[
                  { name: "Meta Ads", mark: "Meta" },
                  { name: "JioHotstar Ads", mark: "JioHotstar" },
                  { name: "Google Ads", mark: "Google" }
                ].map((platform) => (
                  <div key={platform.name} className="flex items-center justify-between rounded-[8px] border border-white/10 bg-black/25 px-3 py-2 text-[11px] font-semibold text-white/78 light:bg-white/70 light:text-slate-700">
                    <span className="font-display text-sm tracking-tight text-white light:text-slate-950">{platform.mark}</span>
                    <span>{platform.name}</span>
                  </div>
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
      <SectionHeading eyebrow="Portfolio" title="Case studies built around visibility, trust, and measurable growth." copy="Explore premium campaign concepts inspired by the results Vision Organisation is built to create for ambitious brands." />
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
            <motion.div key={item.title} {...fadeUp} transition={{ ...fadeUp.transition, delay: index * 0.08 }} className="glass rounded-[8px] p-6">
              <div className="flex items-start gap-5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-cyan-300/15 font-display text-lg font-bold text-cyan-100 light:text-blue-700">0{index + 1}</span>
                <div>
                  <h3 className="font-display text-2xl font-semibold">{item.title}</h3>
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
      <SectionHeading eyebrow="Testimonials" title="Premium execution, clearer positioning, stronger client confidence." copy="Luxury-style cards and social proof ready to replace with live client feedback as the account grows." />
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

function InstagramSection() {
  return (
    <section id="instagram" className="px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[.82fr_1fr] lg:items-center">
        <motion.div {...fadeUp} className="max-w-2xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-cyan-200 light:text-blue-700">Instagram</p>
          <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">Follow the official Vision Organisation account.</h2>
          <p className="mt-5 text-base leading-7 text-white/62 light:text-slate-700 sm:text-lg sm:leading-8">
            Official profile preview, bio, and direct Instagram actions are wired to open in a new tab for a seamless brand connection.
          </p>
          <div className="mt-7 flex flex-col gap-3 min-[420px]:flex-row">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-white px-5 py-4 font-semibold text-slate-950">
              <Instagram className="mr-2 h-5 w-5" /> Follow
            </a>
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-4 font-semibold">
              Visit Instagram <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </div>
        </motion.div>
        <motion.div {...fadeUp} className="glass w-full max-w-2xl justify-self-center rounded-[8px] p-5 sm:p-6">
          <div className="flex flex-col items-center text-center">
            <a href={instagramUrl} target="_blank" rel="noreferrer" className="relative grid h-44 w-44 place-items-center rounded-[8px] border border-cyan-200/30 bg-black/80 p-5 shadow-[0_0_64px_rgba(34,211,238,.24)] transition hover:scale-[1.02] sm:h-56 sm:w-56" aria-label="Open Vision Organisation Instagram profile">
              <div className="absolute inset-0 rounded-[8px] bg-[radial-gradient(circle_at_50%_15%,rgba(34,211,238,.25),transparent_55%)]" />
              <Image src="/logo.jpg" alt="Vision Organisation logo" width={220} height={220} className="relative h-full w-full object-contain drop-shadow-[0_0_24px_rgba(34,211,238,.4)]" />
            </a>
            <p className="mt-6 truncate font-display text-2xl font-bold sm:text-3xl">visionorganisation_</p>
            <p className="mt-2 text-sm text-white/60 light:text-slate-600">Marketing Agency</p>
          </div>
          <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3">
            {["Content", "Editing", "Branding", "Marketing", "Strategy", "Growth"].map((item) => (
              <div key={item} className="rounded-[8px] bg-[radial-gradient(circle_at_35%_35%,rgba(34,211,238,.34),transparent_45%),linear-gradient(135deg,rgba(37,87,255,.34),rgba(2,4,10,.9))] p-4 text-center text-xs font-semibold">
                {item}
              </div>
            ))}
          </div>
          <a href={instagramUrl} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-4 font-semibold text-slate-950 transition hover:scale-[1.01]">
            <Instagram className="mr-2 h-5 w-5" /> Open Instagram Profile
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function FaqSection({ activeFaq, setActiveFaq }: { activeFaq: number; setActiveFaq: (value: number) => void }) {
  return (
    <section className="px-5 py-20 sm:px-8 lg:px-12">
      <SectionHeading eyebrow="FAQ" title="Clear answers before the first call." copy="A compact, accessible FAQ ready for more service and pricing questions as the site grows." />
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
        <div className="flex flex-wrap gap-3 text-sm text-white/58 light:text-slate-600">
          {["Services", "Portfolio", "Instagram", "Contact"].map((item) => (
            <a key={item} href={`#${slug(item)}`} className="hover:text-cyan-100 light:hover:text-blue-700">{item}</a>
          ))}
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
