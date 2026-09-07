import { useState, useEffect } from 'react'
import './App.css'

/* =============================================
   ICON COMPONENTS (inline SVG – Lucide style)
   ============================================= */
const Icon = ({ d, size = 16, stroke = 'currentColor', fill = 'none', strokeWidth = 1.75 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
)

const Icons = {
  Github: () => <Icon d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />,
  Zap: () => <Icon d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />,
  Shield: () => <Icon d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />,
  Target: () => <Icon d={["M12 2a10 10 0 1 1 0 20 10 10 0 0 1 0-20z", "M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8z", "M12 12h.01"]} />,
  AlertTriangle: () => <Icon d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />,
  CheckCircle: () => <Icon d={["M22 11.08V12a10 10 0 1 1-5.93-9.14", "M22 4 12 14.01l-3-3"]} />,
  Eye: () => <Icon d={["M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z", "M12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"]} />,
  GitBranch: () => <Icon d={["M6 3v12", "M18 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6z", "M6 3a3 3 0 1 1 0 6 3 3 0 0 1 0-6z", "M6 21a3 3 0 1 1 0-6 3 3 0 0 1 0 6z", "M18 12H6"]} />,
  Cpu: () => <Icon d={["M18 3a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12z", "M9 9h6v6H9z", "M9 1v2M15 1v2M9 21v2M15 21v2M1 9h2M1 15h2M21 9h2M21 15h2"]} />,
  Activity: () => <Icon d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  Lock: () => <Icon d={["M19 11H5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2z", "M7 11V7a5 5 0 0 1 10 0v4"]} />,
  ArrowRight: () => <Icon d="M5 12h14M12 5l7 7-7 7" />,
  Sparkles: () => <Icon d={["M12 3l1.88 5.76L19.5 9l-5.76 1.88L13.5 17l-1.88-5.76L6 9.12l5.76-1.88z", "M5 2l.94 2.88 2.88.94-2.88.94L5 9.5l-.94-2.88L1.5 5.76l2.88-.94z", "M19 14l.94 2.88 2.88.94-2.88.94L19 21.5l-.94-2.88-2.88-.94 2.88-.94z"]} />,
  Code: () => <Icon d="M16 18l6-6-6-6M8 6l-6 6 6 6" />,
  BarChart: () => <Icon d={["M12 20V10", "M18 20V4", "M6 20v-4"]} />,
  Check: () => <Icon d="M20 6 9 17l-5-5" />,
  ChevronRight: () => <Icon d="M9 18l6-6-6-6" />,
  Layers: () => <Icon d={["M12 2 2 7l10 5 10-5-10-5z", "M2 17l10 5 10-5", "M2 12l10 5 10-5"]} />,
  Search: () => <Icon d={["M11 17A6 6 0 1 0 11 5a6 6 0 0 0 0 12z", "M21 21l-4.35-4.35"]} />,
  Star: (p) => <Icon d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" fill={p?.filled ? 'currentColor' : 'none'} />,
}

/* =============================================
   NAVBAR
   ============================================= */
function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#" className="navbar__brand" id="navbar-logo">
          <img src="/codelens-logo.jpg" alt="CodeLens" className="navbar__logo-img" />
          <span className="navbar__brand-text">CodeLens</span>
        </a>

        <div className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          {['Features','How it Works','Signals','Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="navbar__link" id={`nav-${l.replace(/ /g,'')}`}>{l}</a>
          ))}
        </div>

        <div className="navbar__actions">
          <a href="https://github.com/apps/codelens-ai" target="_blank" rel="noreferrer"
            className="btn btn-primary navbar__cta" id="nav-install-btn">
            <Icons.Github /> Install on GitHub
          </a>
          <button className="navbar__hamburger" onClick={() => setMenuOpen(v => !v)} id="nav-hamburger" aria-label="Menu">
            <span /><span /><span />
          </button>
        </div>
      </div>
    </nav>
  )
}

/* =============================================
   HERO
   ============================================= */
function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="glow-blob hero__glow-1" />
      <div className="glow-blob hero__glow-2" />

      <div className="container hero__inner">
        <div className="hero__content animate-fade-up">
          <div className="badge hero__badge">
            <span className="badge__dot" />
            Powered by Gemini AI · GitHub Marketplace
          </div>

          <h1 className="hero__title" id="hero-headline">
            Understand any PR<br />
            <span className="gradient-text">before you review it.</span>
          </h1>

          <p className="hero__desc">
            CodeLens analyzes your GitHub pull requests and surfaces what actually matters —
            risk scores, security signals, and complexity hotspots. Automatically.
          </p>

          <div className="hero__actions">
            <a href="https://github.com/apps/codelens-ai" target="_blank" rel="noreferrer"
              className="btn btn-primary" id="hero-install-btn">
              <Icons.Github /> Install Free
            </a>
            <a href="#how-it-works" className="btn btn-ghost" id="hero-learn-btn">
              How it works <Icons.ArrowRight />
            </a>
          </div>

          <div className="hero__stats">
            {[
              { v: '< 60s', l: 'Setup time' },
              { v: '7',     l: 'Risk dimensions' },
              { v: 'Any',   l: 'Repo size' },
            ].map(s => (
              <div key={s.l} className="stat">
                <span className="stat__value gradient-text">{s.v}</span>
                <span className="stat__label">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="hero__visual animate-float">
          <div className="hero__img-wrapper">
            <img src="/codelens-dashboard.jpg" alt="CodeLens Dashboard" className="hero__dashboard-img" id="hero-dashboard-img" />
            <div className="hero__img-glow" />
          </div>

          <div className="hero__chip hero__chip--security" id="chip-security">
            <Icons.Lock />
            <div>
              <div className="chip__label">Security</div>
              <div className="chip__value chip__value--red">HIGH · SQL Injection</div>
            </div>
          </div>

          <div className="hero__chip hero__chip--coverage" id="chip-coverage">
            <Icons.CheckCircle />
            <div>
              <div className="chip__label">Coverage</div>
              <div className="chip__value chip__value--green">68% · Auth untested</div>
            </div>
          </div>

          <div className="hero__chip hero__chip--complexity" id="chip-complexity">
            <Icons.Activity />
            <div>
              <div className="chip__label">Complexity</div>
              <div className="chip__value chip__value--yellow">81 / 100</div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero__marquee-wrap">
        <div className="marquee-track">
          <div className="marquee-inner">
            {['GitHub App','Gemini AI','Webhooks','REST API','Vercel','Node.js','GitHub Actions','GitHub App','Gemini AI','Webhooks','REST API','Vercel','Node.js','GitHub Actions'].map((t, i) => (
              <span key={i} className="marquee-item">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

/* =============================================
   FEATURES
   ============================================= */
const FEATURES = [
  { icon: Icons.Lock,          title: 'Security Signals',      desc: 'Flags SQL injection, secrets, unsafe patterns, and vulnerable dependencies before they reach production.',    accent: '#ef4444', id: 'feat-security' },
  { icon: Icons.Activity,      title: 'Risk Scoring',          desc: 'Every PR gets an overall risk score with per-dimension breakdowns so reviewers know exactly where to focus.', accent: '#f97316', id: 'feat-risk' },
  { icon: Icons.Cpu,           title: 'Complexity Hotspots',   desc: 'Pinpoints high cyclomatic complexity, deep nesting, and maintainability issues at the function level.',       accent: '#a855f7', id: 'feat-complexity' },
  { icon: Icons.CheckCircle,   title: 'Coverage Gaps',         desc: 'Shows which changed or high-risk code paths have no test coverage, with targeted suggestions.',              accent: '#10b981', id: 'feat-coverage' },
  { icon: Icons.Target,        title: 'Scope Drift Detection', desc: 'Detects when a PR is doing more than claimed — multiple concerns, sprawling changes, or off-topic edits.',    accent: '#22d3ee', id: 'feat-scope' },
  { icon: Icons.Zap,           title: 'Instant Integration',   desc: 'Install the GitHub App once. CodeLens posts a structured analysis comment automatically on every new PR.',   accent: '#6366f1', id: 'feat-instant' },
]

function Features() {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <div className="section-header">
          <div className="badge"><Icons.Sparkles /> Features</div>
          <h2 className="section-title" id="features-heading">
            Every signal a reviewer<br /><span className="gradient-text">actually needs</span>
          </h2>
          <p className="section-desc">Useful, explainable analysis — not generic AI prose.</p>
        </div>

        <div className="features-grid">
          {FEATURES.map(f => (
            <div key={f.id} className="glass-card feature-card" id={f.id} style={{ '--accent': f.accent }}>
              <div className="feature-card__icon-wrap">
                <f.icon />
              </div>
              <h3 className="feature-card__title">{f.title}</h3>
              <p className="feature-card__desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =============================================
   HOW IT WORKS
   ============================================= */
const STEPS = [
  { num: '01', icon: Icons.Github,    title: 'Install the App',    desc: 'One-click install from GitHub Marketplace. No tokens, no config files.', id: 'step-1' },
  { num: '02', icon: Icons.GitBranch, title: 'Open a PR',          desc: 'Create your PR as usual. CodeLens listens via webhooks — nothing to run.', id: 'step-2' },
  { num: '03', icon: Icons.Cpu,       title: 'Gemini Analyzes',    desc: 'The full diff and repo context is analyzed across 7 dimensions in parallel.', id: 'step-3' },
  { num: '04', icon: Icons.BarChart,  title: 'Review the Report',  desc: 'A structured analysis comment appears on your PR within seconds.', id: 'step-4' },
]

function HowItWorks() {
  return (
    <section id="how-it-works" className="how-section">
      <div className="glow-blob how__glow" />
      <div className="container">
        <div className="section-header">
          <div className="badge"><Icons.Layers /> How It Works</div>
          <h2 className="section-title" id="how-heading">
            PR opened →<span className="gradient-text"> insights delivered</span>
          </h2>
          <p className="section-desc">Zero config beyond a single GitHub App install.</p>
        </div>

        <div className="steps-grid">
          {STEPS.map((s, i) => (
            <div key={s.id} className="glass-card step-card" id={s.id}>
              <div className="step-card__num">{s.num}</div>
              <div className="step-card__icon"><s.icon /></div>
              <h3 className="step-card__title">{s.title}</h3>
              <p className="step-card__desc">{s.desc}</p>
              {i < STEPS.length - 1 && <div className="step-card__connector" />}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* =============================================
   SIGNALS
   ============================================= */
const SIGNALS = [
  { icon: Icons.BarChart,       label: 'Change Volume',        desc: 'PR size vs. repo norms',             color: '#6366f1', w: '78%' },
  { icon: Icons.Target,         label: 'Scope Drift',          desc: 'Single-purpose vs. sprawl',          color: '#8b5cf6', w: '62%' },
  { icon: Icons.AlertTriangle,  label: 'Critical Path Impact', desc: 'Auth, payments, permissions',        color: '#ef4444', w: '90%' },
  { icon: Icons.Lock,           label: 'Security Patterns',    desc: 'Unsafe inputs, secrets, vulns',      color: '#f59e0b', w: '85%' },
  { icon: Icons.Cpu,            label: 'Code Complexity',      desc: 'Cyclomatic complexity, nesting',     color: '#10b981', w: '71%' },
  { icon: Icons.CheckCircle,    label: 'Test Coverage',        desc: 'Changed code without tests',         color: '#22d3ee', w: '68%' },
  { icon: Icons.Eye,            label: 'Code Quality',         desc: 'Maintainability, error handling',    color: '#a855f7', w: '74%' },
]

function Signals() {
  return (
    <section id="signals" className="signals-section">
      <div className="container">
        <div className="section-header">
          <div className="badge"><Icons.Search /> 7 Dimensions</div>
          <h2 className="section-title" id="signals-heading">
            Structured signals, not<br /><span className="gradient-text">generic AI prose</span>
          </h2>
          <p className="section-desc">Each finding is backed by diff evidence — not speculation.</p>
        </div>

        <div className="signals-list">
          {SIGNALS.map((s, i) => (
            <div key={i} className="glass-card signal-row" id={`signal-${i}`}>
              <div className="signal-row__icon" style={{ color: s.color }}>
                <s.icon />
              </div>
              <div className="signal-row__info">
                <div className="signal-row__label">{s.label}</div>
                <div className="signal-row__desc">{s.desc}</div>
              </div>
              <div className="signal-row__bar-wrap">
                <div className="signal-row__bar" style={{ width: s.w, background: s.color }} />
              </div>
              <span className="signal-row__val" style={{ color: s.color }}>{s.w}</span>
            </div>
          ))}
        </div>

        {/* PR Comment mock */}
        <div className="pr-mock glass-card" id="pr-comment-preview">
          <div className="pr-mock__header">
            <img src="/codelens-logo.jpg" alt="bot" className="pr-mock__avatar" />
            <span className="pr-mock__bot">codelens-ai</span>
            <span className="pr-mock__tag">bot</span>
            <span className="pr-mock__time">just now</span>
          </div>
          <div className="pr-mock__body">
            <p className="pr-mock__title">🔍 PR #1245 — Optimize User Auth Flow · <span className="score-badge">⚠️ Risk: 72/100</span></p>
            <div className="pr-mock__rows">
              {[
                { k: '🔐 Security',      v: 'HIGH — SQL injection in auth.py:108',        c: 'red' },
                { k: '🧩 Complexity',    v: '81/100 — validate_user() CC:14',             c: 'yellow' },
                { k: '✅ Coverage',      v: '68% — auth paths missing tests',             c: 'green' },
                { k: '⚠️ Critical Path', v: 'YES — authentication system modified',      c: 'red' },
                { k: '🎯 Scope',         v: 'Focused — single coherent change',          c: 'green' },
              ].map(r => (
                <div key={r.k} className="pr-row">
                  <span className="pr-row__key">{r.k}</span>
                  <span className={`pr-row__val pr-row__val--${r.c}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =============================================
   PRICING
   ============================================= */


function Pricing() {
  return (
    <section id="pricing" className="pricing-section">
      <div className="glow-blob pricing__glow" />
      <div className="container">
        <div className="section-header">
          <div className="badge"><Icons.Sparkles /> Pricing</div>
          <h2 className="section-title" id="pricing-heading">
            Start free.<br /><span className="gradient-text">Scale when ready.</span>
          </h2>
          <p className="section-desc">No credit card required. All 7 dimensions included free.</p>
        </div>
      </div>
    </section>
  )
}

/* =============================================
   CTA
   ============================================= */
function CTA() {
  return (
    <section className="cta-section" id="cta">
      <div className="container">
        <div className="cta-card glass-card" id="cta-card">
          <div className="glow-blob cta__glow-1" />
          <div className="glow-blob cta__glow-2" />
          <div className="cta-card__inner">
            <div className="badge"><Icons.Zap /> Ready to ship?</div>
            <h2 className="cta-card__title" id="cta-heading">
              Stop guessing where to<br /><span className="gradient-text">focus your review.</span>
            </h2>
            <p className="cta-card__desc">
              Install in under 60 seconds. CodeLens works automatically on every PR.
            </p>
            <div className="cta-card__actions">
              <a href="https://github.com/apps/codelens-ai" target="_blank" rel="noreferrer"
                className="btn btn-primary" id="cta-install-btn">
                <Icons.Github /> Install on GitHub — Free
              </a>
              <a href="#features" className="btn btn-ghost" id="cta-features-btn">
                Explore features <Icons.ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* =============================================
   FOOTER
   ============================================= */
function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <img src="/codelens-logo.jpg" alt="CodeLens" className="footer__logo" />
          <span className="footer__name">CodeLens</span>
          <p className="footer__tagline">AI-powered PR intelligence for GitHub teams.</p>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">Product</div>
          {['Features','How it Works','Signals','Pricing'].map(l => (
            <a key={l} href={`#${l.toLowerCase().replace(/ /g,'-')}`} className="footer__link">{l}</a>
          ))}
        </div>
        <div className="footer__col">
          <div className="footer__col-title">Links</div>
          <a href="https://github.com/apps/codelens-ai" className="footer__link" target="_blank" rel="noreferrer">GitHub App</a>
          <a href="#" className="footer__link">Documentation</a>
          <a href="#" className="footer__link">Changelog</a>
        </div>
        <div className="footer__col">
          <div className="footer__col-title">Legal</div>
          <a href="#" className="footer__link">Privacy</a>
          <a href="#" className="footer__link">Terms</a>
        </div>
      </div>
      <div className="footer__bottom container">
        <span>© 2026 CodeLens</span>
        <span>Built with Gemini AI</span>
      </div>
    </footer>
  )
}

/* =============================================
   ROOT
   ============================================= */
export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Signals />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
