"use client";

import { useEffect, useState } from "react";
import { Bricolage_Grotesque } from "next/font/google";
import SplashCursor from "./components/SplashCursor";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });

// ====== I-EDIT DITO ANG LAMAN ======
const P = {
  name: "Angelo Ramos",
  quote: "Turning ideas into action and challenges into opportunities.",
  email: "mail.angelo.ramos@gmail.com",
  location: "Western Visayas, Philippines",
  linkedin: "https://www.linkedin.com/in/angeloramosva/",
  portfolio: "https://canva.link/ec6b49rjane8nh8",
  facebook: "https://www.facebook.com/your.fb.gelo.va",
  tiktok: "https://www.tiktok.com/@tiktok.gelo.va",
  summary:
    "Results-driven professional with experience in digital marketing, graphic design, video editing, virtual assistance, administrative support, recruitment, and customer service. I create effective marketing materials, support business operations, and manage client relationships, with an organized, detail-oriented, and adaptable approach.",
};

const roles = ["Digital marketing", "Graphic design", "Video editing", "Virtual assistance", "Recruitment", "Customer service"];

const services = [
  { t: "Digital marketing", d: "Social media management and marketing materials that fit the brand." },
  { t: "Graphic design", d: "Graphics for digital and print, aligned with brand identity." },
  { t: "Video editing", d: "Edits, visuals, and presentations for marketing, recruitment, and events." },
  { t: "Virtual assistance", d: "Administrative support, document handling, and reminders for daily operations." },
  { t: "Recruitment support", d: "Onboarding, licensing, and examination support for advisor candidates." },
  { t: "Client service", d: "Needs assessment, insurance and investment guidance, and claims support." },
];

const jobs = [
  {
    role: "Sun Life Advisor (Free Agent)",
    org: "Sun Life of Canada Philippines, Inc.",
    when: "2024 to present",
    text: "Assess client needs, recommend suitable insurance and investment solutions, and guide clients through applications, claims, and financial planning.",
  },
  {
    role: "Graphic Designer (Freelance)",
    org: "Promovera | Marketing Agency",
    when: "2026",
    text: "Created visual content for marketing and branding, designed graphics for digital and print, and kept every design aligned with the brand identity and objectives.",
  },
  {
    role: "Virtual Assistant",
    org: "4M Commercial | Real Estate",
    when: "2026",
    text: "Provided administrative support, managed and posted property details for buildings and lots, and edited promotional videos showcasing real estate properties for marketing purposes.",
  },
  {
    role: "Recruitment Specialist",
    org: "Sun Life of Canada Philippines, Inc.",
    when: "2024 to 2026",
    text: "Supported managers and advisor candidates through recruitment, onboarding, licensing, and examinations, and created visuals and presentations for recruitment and events.",
  },
  {
    role: "Secretary",
    org: "Sun Life of Canada Philippines, Inc.",
    when: "2024 to 2026",
    text: "Supported advisors and managers with reports, documents, posters, and proposals, processed client payments and claims, sent reminders, and assisted with insurance applications.",
  },
];

const skills = [
  { g: "Tools", items: ["Microsoft Office", "Google Workspace", "Adobe Photoshop", "Adobe Premiere Pro", "Canva", "CapCut"] },
  {
    g: "Expertise",
    items: [
      "Digital marketing",
      "Social media management",
      "Graphic design",
      "Video editing",
      "Virtual assistance",
      "Administrative support",
      "Technical support",
      "Software diagnostics and troubleshooting",
    ],
  },
  {
    g: "AI tools",
    items: ["ChatGPT", "Gemini", "Claude", "Perplexity AI", "Meta AI", "Microsoft Copilot", "Replit AI", "Google Labs", "DeepSeek"],
  },
];

// Put your files in public/portfolio/ (or change the paths below)
const portfolioImages = [
  { src: "/portfolio/image-1.jpg", title: "Project title 1", tag: "Graphic design" },
  { src: "/portfolio/image-2.jpg", title: "Project title 2", tag: "Graphic design" },
  { src: "/portfolio/image-3.jpg", title: "Project title 3", tag: "Digital marketing" },
  { src: "/portfolio/image-4.jpg", title: "Project title 4", tag: "Digital marketing" },
  { src: "/portfolio/image-5.jpg", title: "Project title 5", tag: "Recruitment visuals" },
  { src: "/portfolio/image-6.jpg", title: "Project title 6", tag: "Graphic design" },
  { src: "/portfolio/image-7.jpg", title: "Project title 7", tag: "Graphic design" },
  { src: "/portfolio/image-8.jpg", title: "Project title 8", tag: "Digital marketing" },
  { src: "/portfolio/image-9.jpg", title: "Project title 9", tag: "Recruitment visuals" },
  { src: "/portfolio/image-10.jpg", title: "Project title 10", tag: "Graphic design" },
  { src: "/portfolio/image-11.jpg", title: "Project title 11", tag: "Digital marketing" },
  { src: "/portfolio/image-12.jpg", title: "Project title 12", tag: "Graphic design" },
  { src: "/portfolio/image-13.jpg", title: "Project title 13", tag: "Recruitment visuals" },
  { src: "/portfolio/image-14.jpg", title: "Project title 14", tag: "Digital marketing" },
  { src: "/portfolio/image-15.jpg", title: "Project title 15", tag: "Graphic design" },
];

const portfolioVideos = [
  { src: "/portfolio/video-1.mp4", poster: "/portfolio/video-1.jpg", title: "Property Tour 1", tag: "4M Commercial" },
  { src: "/portfolio/video-2.mp4", poster: "/portfolio/video-2.jpg", title: "Property Tour 2", tag: "4M Commercial" },
  { src: "/portfolio/video-3.mp4", poster: "/portfolio/video-3.jpg", title: "Spider Man", tag: "TGIFridays Philippines" },
  { src: "/portfolio/video-4.mp4", poster: "/portfolio/video-4.jpg", title: "Promotion", tag: "TGIFridays Philippines" },
  { src: "/portfolio/video-5.mp4", poster: "/portfolio/video-5.jpg", title: "AI Animation", tag: "TGIFridays Philippines" },
  { src: "/portfolio/video-6.mp4", poster: "/portfolio/video-6.jpg", title: "Cheese Pour", tag: "TGIFridays Philippines" },
  { src: "/portfolio/video-7.mp4", poster: "/portfolio/video-7.jpg", title: "AI Animation", tag: "TGIFridays Philippines" },
  { src: "/portfolio/video-8.mp4", poster: "/portfolio/video-8.jpg", title: "Jose Mari Chan AI", tag: "TGIFridays Philippines" },
  { src: "/portfolio/video-9.mp4", poster: "/portfolio/video-9.jpg", title: "AI Animation", tag: "Randy's Donut Philippines" },
  { src: "/portfolio/video-10.mp4", poster: "/portfolio/video-10.jpg", title: "Video title 10", tag: "Promotion" },
  { src: "/portfolio/video-11.mp4", poster: "/portfolio/video-11.jpg", title: "Video title 11", tag: "Recruitment video" },
  { src: "/portfolio/video-12.mp4", poster: "/portfolio/video-12.jpg", title: "Video title 12", tag: "Promotion" },
];

const brands = ["Sun Life of Canada Philippines", "Lumtri", "Promovera", "Cattleya Sales Team", "4M Commercial", "Gigi's Custaroons", "TGIFridays Philippines", "Dave & Buster's Philippines"];
// ===================================

export default function Home() {
  const [dark, setDark] = useState(false);

  // Read saved choice (or the device setting) on first load
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      setDark(saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches);
    } catch {}
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) =>
        es.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.2 }
    );
    document.querySelectorAll(".tl").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      data-theme={dark ? "dark" : "light"}
      className={`${display.variable} wrap bg-[var(--bg)] text-[var(--fg)] antialiased transition-colors duration-500 selection:bg-[var(--g)] selection:text-[var(--d)]`}
    >
      <SplashCursor />
      <style>{`
        :root{--m:#6c151e;--g:#f6ae2d;--d:#2b1e1e;--w:#fafaf8}
        .wrap{--bg:#fafaf8;--fg:#2b1e1e;--line:rgba(43,30,30,.2);--mut:rgba(43,30,30,.6);--hd:#6c151e;--cb:rgba(108,21,30,.35);--chb:#6c151e;--chf:#fafaf8}
        .wrap[data-theme="dark"]{--bg:#1c1414;--fg:#fafaf8;--line:rgba(250,250,248,.2);--mut:rgba(250,250,248,.6);--hd:#f6ae2d;--cb:rgba(246,174,45,.4);--chb:#f6ae2d;--chf:#2b1e1e;--m:#3d0d13;--d:#100b0b}
        .tgl-wrap{position:relative;width:42px;height:42px}
        .toggle{position:absolute;left:0;top:0;height:100px;width:100px;transform:scale(.42);transform-origin:0 0}
        .toggle:before{content:"";border-radius:84.5px;background:#fff;position:absolute;margin-left:-36px;margin-top:-36px;opacity:.2;height:72px;width:72px;left:50%;top:50%}
        .toggle .button{transition:all 300ms cubic-bezier(0.23,1,0.32,1);box-shadow:0 15px 25px -4px rgba(0,0,0,.5),inset 0 -3px 4px -1px rgba(0,0,0,.2),0 -10px 15px -1px rgba(255,255,255,.6),inset 0 3px 4px -1px rgba(255,255,255,.2),inset 0 0 5px 1px rgba(255,255,255,.8),inset 0 20px 30px 0 rgba(255,255,255,.2);border-radius:68.8px;position:absolute;background:#eaeaea;margin-left:-34.4px;margin-top:-34.4px;display:block;height:68.8px;width:68.8px;left:50%;top:50%}
        .toggle .label{transition:color 300ms ease-out;display:flex;align-items:center;justify-content:center;position:absolute;opacity:.9;height:100%;width:100%;color:rgba(0,0,0,.9)}
        .toggle .label svg{width:34px;height:34px;transition:transform 300ms ease-out}
        .toggle input{opacity:0;position:absolute;cursor:pointer;z-index:1;height:100%;width:100%;left:0;top:0;margin:0}
        .toggle input:active ~ .button{filter:blur(.5px);box-shadow:0 12px 25px -4px rgba(0,0,0,.4),inset 0 -8px 30px 1px rgba(255,255,255,.9),0 -10px 15px -1px rgba(255,255,255,.6),inset 0 8px 25px 0 rgba(0,0,0,.4),inset 0 0 10px 1px rgba(255,255,255,.6)}
        .toggle input:active ~ .label{color:rgba(0,0,0,.45)}
        .toggle input:active ~ .label svg{transform:scale(.92)}
        .toggle input:checked ~ .button{filter:blur(.5px);box-shadow:0 10px 25px -4px rgba(0,0,0,.4),inset 0 -8px 25px -1px rgba(255,255,255,.9),0 -10px 15px -1px rgba(255,255,255,.6),inset 0 8px 20px 0 rgba(0,0,0,.2),inset 0 0 5px 1px rgba(255,255,255,.6)}
        .toggle input:checked ~ .label{color:rgba(0,0,0,.8)}
        .toggle input:focus-visible ~ .button{outline:3px solid var(--g);outline-offset:4px}
        html{scroll-behavior:smooth}
        section[id]{scroll-margin-top:72px}
        .fd{font-family:var(--font-display),system-ui,sans-serif}
        .hero{background:radial-gradient(520px circle at var(--x,72%) var(--y,28%),rgba(246,174,45,.18),transparent 60%),var(--m)}
        .nav{background:color-mix(in srgb, var(--d) 78%, transparent);backdrop-filter:blur(10px)}
        @keyframes rise{from{transform:translateY(110%)}to{transform:none}}
        @keyframes fade{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
        @keyframes spin{to{transform:rotate(360deg)}}
        @keyframes marq{to{transform:translateX(-50%)}}
        @keyframes ring{from{box-shadow:0 0 0 0 rgba(246,174,45,.6)}to{box-shadow:0 0 0 10px rgba(246,174,45,0)}}
        .rise{display:inline-block;animation:rise 1.1s cubic-bezier(.16,1,.3,1) both}
        .fade{animation:fade .9s ease both}
        .spin{animation:spin 26s linear infinite}
        .marq{display:flex;width:max-content;animation:marq 34s linear infinite}
        .marq:hover{animation-play-state:paused}
        .pulse{animation:ring 2s ease-out infinite}
        .ul{background:linear-gradient(currentColor,currentColor) 0 100%/0 2px no-repeat;transition:background-size .35s ease}
        .ul:hover,.ul:focus-visible{background-size:100% 2px}
        .chip{border:1px solid var(--cb);border-radius:999px;padding:.5rem 1rem;font-size:.9rem;transition:all .25s ease}
        .chip:hover{background:var(--chb);color:var(--chf);border-color:var(--chb);transform:translateY(-2px)}
        .row{transition:background .3s ease,color .3s ease,padding .3s ease}
        .row:hover{background:var(--m);color:var(--w);padding-left:1.5rem}
        .row:hover h3{color:var(--g)}
        .tl{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s cubic-bezier(.16,1,.3,1)}
        .tl.in{opacity:1;transform:none}
        a:focus-visible{outline:2px solid var(--g);outline-offset:3px}
        @media (prefers-reduced-motion:reduce){.rise,.fade,.spin,.marq,.pulse{animation:none}.tl{opacity:1;transform:none;transition:none}}
      `}</style>

      {/* Nav */}
      <header className="nav fixed inset-x-0 top-0 z-20 text-[var(--w)]">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2 text-sm">
          <a href="#top" className="fd text-base font-bold">
            <img src="/GVA.png" alt="Angelo Ramos" className="h-17 w-auto sm:h-18" />
          </a>
          <div className="flex items-center gap-7">
            <div className="hidden gap-7 sm:flex">
              <a href="#about" className="ul">About</a>
              <a href="#experience" className="ul">Experience</a>
              <a href="#portfolio" className="ul">Portfolio</a>
              <a href="#skills" className="ul">Skills</a>
            </div>
            <div className="tgl-wrap">
              <div className="toggle">
                <input type="checkbox" checked={dark} onChange={toggleTheme} aria-label="Toggle dark mode" />
                <span className="button" />
                <span className="label" aria-hidden="true">
                  {dark ? (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="4" />
                      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
                    </svg>
                  )}
                </span>
              </div>
            </div>
            <a
              href="#contact"
              className="rounded-full bg-[var(--g)] px-4 py-2 font-medium text-[var(--d)] transition hover:bg-[var(--w)]"
            >
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section
        id="top"
        className="hero relative overflow-hidden px-6 pb-24 pt-36 text-[var(--w)] sm:pt-44"
        onMouseMove={(e) => {
          const r = e.currentTarget.getBoundingClientRect();
          e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
          e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
        }}
      >
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="fade text-[var(--g)]" style={{ animationDelay: ".1s" }}>
              {P.location}
            </p>
            <h1 className="fd mt-4 text-[clamp(3.6rem,13vw,9.5rem)] font-extrabold leading-[.92] tracking-tight">
              <span className="block overflow-hidden pb-[.08em]">
                <span className="rise" style={{ animationDelay: ".15s" }}>Angelo</span>
              </span>
              <span className="block overflow-hidden pb-[.08em] text-[var(--g)]">
                <span className="rise" style={{ animationDelay: ".3s" }}>Ramos</span>
              </span>
            </h1>
            <p className="fade fd mt-8 max-w-xl text-2xl italic leading-snug" style={{ animationDelay: ".9s" }}>
              “{P.quote}”
            </p>
            <p className="fade mt-5 max-w-lg text-[rgba(250,250,248,.75)]" style={{ animationDelay: "1.05s" }}>
              Digital marketing, graphic design, and virtual assistance for brands and teams that want work done well.
            </p>
            <div className="fade mt-9 flex flex-wrap gap-4" style={{ animationDelay: "1.2s" }}>
              <a
                href="#contact"
                className="rounded-full bg-[var(--g)] px-6 py-3 font-medium text-[var(--d)] transition hover:-translate-y-0.5 hover:bg-[var(--w)]"
              >
                Get in touch
              </a>
              <a
                href="#experience"
                className="rounded-full border border-[rgba(250,250,248,.4)] px-6 py-3 font-medium transition hover:-translate-y-0.5 hover:border-[var(--g)] hover:text-[var(--g)]"
              >
                View experience
              </a>
            </div>
          </div>

          {/* Monogram with rotating text */}
          <div className="fade relative mx-auto h-60 w-60 sm:h-72 sm:w-72" style={{ animationDelay: "1s" }}>
            <svg viewBox="0 0 200 200" className="spin absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <path id="ringpath" d="M100,100 m-80,0 a80,80 0 1,1 160,0 a80,80 0 1,1 -160,0" />
              </defs>
              <text fill="#f6ae2d" fontSize="13" className="fd">
                <textPath href="#ringpath" textLength="500">
                  Digital marketing • Graphic design • Video editing • Virtual assistance •
                </textPath>
              </text>
            </svg>
            <div className="fd absolute inset-[17%] grid place-items-center rounded-full bg-[var(--g)] text-6xl font-extrabold text-[var(--m)] sm:text-7xl">
              AR
            </div>
          </div>
        </div>
      </section>

      {/* Marquee */}
      <div className="overflow-hidden bg-[var(--g)] py-5 text-[var(--d)]" aria-hidden="true">
        <div className="marq">
          {[0, 1].map((n) => (
            <div key={n} className="flex shrink-0">
              {roles.map((r) => (
                <span key={r} className="fd flex items-center gap-8 pr-8 text-3xl font-bold">
                  {r}
                  <span className="text-[var(--m)]">✦</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* About */}
      <section id="about" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
            <h2 className="fd text-4xl font-bold leading-tight text-[var(--hd)] sm:text-5xl">
              Creative work and business support, done with care.
            </h2>
            <div>
              <p className="text-lg leading-relaxed">{P.summary}</p>
              <dl className="mt-8 grid gap-6 text-sm sm:grid-cols-2">
                <div className="border-t border-[var(--line)] pt-3">
                  <dt className="text-[var(--mut)]">Education</dt>
                  <dd className="mt-1 font-medium">BS Information Technology, Aklan State University (2020 to 2024)</dd>
                </div>
                <div className="border-t border-[var(--line)] pt-3">
                  <dt className="text-[var(--mut)]">Based in</dt>
                  <dd className="mt-1 font-medium">{P.location}</dd>
                </div>
              </dl>
            </div>
          </div>

          <h3 className="fd mb-6 mt-24 text-2xl font-bold">What I do</h3>
          <div className="grid border-b border-[var(--line)] md:grid-cols-2 md:gap-x-10">
            {services.map((s) => (
              <div key={s.t} className="row border-t border-[var(--line)] px-2 py-6">
                <h3 className="fd text-xl font-bold transition-colors">{s.t}</h3>
                <p className="mt-1 max-w-sm opacity-80">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="bg-[var(--d)] px-6 py-24 text-[var(--w)]">
        <div className="mx-auto max-w-4xl">
          <h2 className="fd text-4xl font-bold sm:text-5xl">
            Where I&apos;ve <span className="text-[var(--g)]">worked</span>
          </h2>
          <ol className="mt-14 ml-1 border-l border-[rgba(250,250,248,.2)]">
            {jobs.map((j, i) => (
              <li key={j.role + j.when + i} className="tl relative pb-12 pl-8 last:pb-0">
                <span
                  className={`absolute -left-[6px] top-2 h-3 w-3 rounded-full bg-[var(--g)] ${i === 0 ? "pulse" : ""}`}
                />
                <p className="text-sm text-[var(--g)]">{j.when}</p>
                <h3 className="fd mt-1 text-2xl font-bold">{j.role}</h3>
                <p className="text-[rgba(250,250,248,.6)]">{j.org}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-[rgba(250,250,248,.85)]">{j.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="fd text-4xl font-bold text-[var(--hd)] sm:text-5xl">Portfolio</h2>
          <p className="mt-4 max-w-xl opacity-80">A selection of graphics and videos I have created for brands and teams.</p>

          <h3 className="fd mb-6 mt-14 text-2xl font-bold">Graphic design</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioImages.map((p, i) => (
              <figure
                key={p.src}
                className="tl group overflow-hidden rounded-2xl border border-[var(--line)]"
                style={{ transitionDelay: `${(i % 3) * 80}ms` }}
              >
                <div className="aspect-[4/3] overflow-hidden bg-[var(--line)]">
                  <img
                    src={p.src}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <figcaption className="p-4">
                  <p className="text-sm text-[var(--mut)]">{p.tag}</p>
                  <p className="fd font-bold">{p.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <h3 className="fd mb-6 mt-20 text-2xl font-bold">Video editing</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {portfolioVideos.map((v) => (
              <figure key={v.src} className="tl overflow-hidden rounded-2xl border border-[var(--line)]">
                <video
                   src={v.src}
                   poster={v.poster}
                   controls
                   playsInline
                   preload="metadata"
                   className="aspect-video w-full bg-black object-contain"
                />
                <figcaption className="p-4">
                  <p className="text-sm text-[var(--mut)]">{v.tag}</p>
                  <p className="fd font-bold">{v.title}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="fd text-4xl font-bold text-[var(--hd)] sm:text-5xl">Skills and tools</h2>
          <div className="mt-12 grid gap-12">
            {skills.map((s) => (
              <div key={s.g} className="grid gap-4 lg:grid-cols-[180px_1fr]">
                <h3 className="fd text-lg font-bold">{s.g}</h3>
                <div className="flex flex-wrap gap-3">
                  {s.items.map((it) => (
                    <span key={it} className="chip">
                      {it}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section id="brands" className="px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="fd text-4xl font-bold text-[var(--hd)] sm:text-5xl">Brands I work with</h2>
          <div className="mt-12 grid border-b border-[var(--line)] sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-10">
            {brands.map((b) => (
              <div key={b} className="row border-t border-[var(--line)] px-2 py-8">
                <h3 className="fd text-xl font-bold transition-colors">{b}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-[var(--m)] px-6 py-28 text-[var(--w)]">
        <div className="mx-auto max-w-6xl">
          <h2 className="fd text-[clamp(2.6rem,8vw,6rem)] font-extrabold leading-none tracking-tight">
            Let&apos;s work <span className="text-[var(--g)]">together.</span>
          </h2>
          <a
            href={`mailto:${P.email}`}
            className="ul fd mt-10 inline-block break-all text-2xl font-semibold text-[var(--g)] sm:text-4xl"
          >
            {P.email}
          </a>
          <div className="mt-10 flex flex-wrap gap-4 text-sm">
            <a
              href={P.linkedin}
              className="rounded-full border border-[rgba(250,250,248,.4)] px-5 py-2.5 transition hover:border-[var(--g)] hover:text-[var(--g)]"
            >
              LinkedIn
            </a>
            <a
              href={P.portfolio}
              className="rounded-full border border-[rgba(250,250,248,.4)] px-5 py-2.5 transition hover:border-[var(--g)] hover:text-[var(--g)]"
            >
              Portfolio
            </a>
            <a
              href={P.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(250,250,248,.4)] px-5 py-2.5 transition hover:border-[var(--g)] hover:text-[var(--g)]"
            >
              Facebook
            </a>
            <a
              href={P.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-[rgba(250,250,248,.4)] px-5 py-2.5 transition hover:border-[var(--g)] hover:text-[var(--g)]"
            >
              TikTok
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[var(--d)] px-6 py-8 text-sm text-[rgba(250,250,248,.6)]">
        <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-2">
          <span className="flex items-center gap-2">
  <img src="/GVA.png" alt={P.name} className="h-13 w-auto opacity-70" />
  © {new Date().getFullYear()}
</span>
          <span>{P.location}</span>
        </div>
      </footer>
    </div>
  );
}
