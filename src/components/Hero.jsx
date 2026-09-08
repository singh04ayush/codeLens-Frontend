import { Icons } from './Icons'

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-12 overflow-hidden"
      id="hero"
    >
      {/* Glow blobs */}
      <div className="absolute rounded-full pointer-events-none blur-[70px] w-[500px] h-[500px] -top-[150px] -left-[150px] bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,transparent_70%)]" />
      <div className="absolute rounded-full pointer-events-none blur-[70px] w-[400px] h-[400px] top-[50px] -right-[100px] bg-[radial-gradient(circle,rgba(168,85,247,0.15)_0%,transparent_70%)]" />

      {/* Main grid */}
      <div className="px-6 grid grid-cols-2 gap-16 items-center relative z-[1] max-[900px]:grid-cols-1">

        {/* Content */}
        <div className="animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-[0.4rem] px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.07em] uppercase border border-[var(--clr-border-hi)] bg-[rgba(99,102,241,0.08)] text-[var(--clr-primary-hi)] mb-5">
            <span className="w-[6px] h-[6px] rounded-full bg-[var(--clr-green)] shadow-[0_0_6px_var(--clr-green)] animate-[pulse-glow_2s_ease-in-out_infinite]" />
            Powered by Gemini AI · GitHub Marketplace
          </div>

          <h1 className="font-[var(--font-display)] text-[clamp(2rem,4.5vw,3.2rem)] font-[800] leading-[1.12] tracking-[-0.03em] mb-[1.1rem]" id="hero-headline">
            Understand any PR<br />
            <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">before you review it.</span>
          </h1>

          <p className="text-[0.9rem] text-[var(--clr-text-muted)] leading-[1.8] max-w-[440px] mb-8">
            CodeLens analyzes your GitHub pull requests and surfaces what actually matters —
            risk scores, security signals, and complexity hotspots. Automatically.
          </p>

          <div className="flex gap-3 flex-wrap mb-10">
            <a
              href="https://github.com/marketplace/codelens-prototype"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-[0.45rem] px-[1.4rem] py-[0.6rem] rounded-[var(--radius-md)] font-[var(--font-sans)] text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 no-underline border-0 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] text-white shadow-[var(--shadow-btn)] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(99,102,241,0.5)]"
              id="hero-install-btn"
            >
              <Icons.Github /> Install Free
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center gap-[0.45rem] px-[1.4rem] py-[0.6rem] rounded-[var(--radius-md)] font-[var(--font-sans)] text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 no-underline bg-transparent text-[var(--clr-text-muted)] border border-[var(--clr-border)] hover:border-white/[0.12] hover:text-[var(--clr-text)]"
              id="hero-learn-btn"
            >
              How it works <Icons.ArrowRight />
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-6 border-t border-[var(--clr-border)]">
            {[
              { v: '< 60s', l: 'Setup time' },
              { v: '7',     l: 'Risk dimensions' },
              { v: 'Any',   l: 'Repo size' },
            ].map(s => (
              <div key={s.l} className="flex flex-col gap-[0.15rem]">
                <span className="font-[var(--font-display)] text-[1.35rem] font-bold bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">{s.v}</span>
                <span className="text-[0.72rem] text-[var(--clr-text-muted)]">{s.l}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual */}
        <div className="relative flex justify-center animate-[float_5s_ease-in-out_infinite] max-[900px]:hidden">
          <div className="relative rounded-[var(--radius-xl)] overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.7),0_0_0_1px_rgba(255,255,255,0.06)]">
            <img
              src="/codelens-dashboard.jpg"
              alt="CodeLens Dashboard"
              className="w-full max-w-[540px] block rounded-[var(--radius-xl)]"
              id="hero-dashboard-img"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[rgba(99,102,241,0.12)] to-[rgba(168,85,247,0.08)] rounded-[var(--radius-xl)] pointer-events-none" />
          </div>

          {/* Floating chips */}
          <div className="absolute top-[8%] -left-[85px] flex items-center gap-[0.55rem] px-[0.85rem] py-[0.55rem] bg-[rgba(5,8,15,0.9)] border border-[var(--clr-border-hi)] rounded-[var(--radius-md)] backdrop-blur-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] text-[0.72rem] whitespace-nowrap animate-[float_4s_ease-in-out_infinite] text-[var(--clr-red)]" id="chip-security">
            <Icons.Lock />
            <div>
              <div className="text-[var(--clr-text-muted)] text-[0.65rem] mb-[2px]">Security</div>
              <div className="font-bold text-[0.72rem] text-[var(--clr-red)]">HIGH · SQL Injection</div>
            </div>
          </div>

          <div className="absolute bottom-[22%] -right-[80px] flex items-center gap-[0.55rem] px-[0.85rem] py-[0.55rem] bg-[rgba(5,8,15,0.9)] border border-[var(--clr-border-hi)] rounded-[var(--radius-md)] backdrop-blur-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] text-[0.72rem] whitespace-nowrap animate-[float_4s_ease-in-out_1.2s_infinite] text-[var(--clr-green)]" id="chip-coverage">
            <Icons.CheckCircle />
            <div>
              <div className="text-[var(--clr-text-muted)] text-[0.65rem] mb-[2px]">Coverage</div>
              <div className="font-bold text-[0.72rem] text-[var(--clr-green)]">68% · Auth untested</div>
            </div>
          </div>

          <div className="absolute bottom-[4%] -left-[70px] flex items-center gap-[0.55rem] px-[0.85rem] py-[0.55rem] bg-[rgba(5,8,15,0.9)] border border-[var(--clr-border-hi)] rounded-[var(--radius-md)] backdrop-blur-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.5)] text-[0.72rem] whitespace-nowrap animate-[float_4s_ease-in-out_2.4s_infinite] text-[var(--clr-yellow)]" id="chip-complexity">
            <Icons.Activity />
            <div>
              <div className="text-[var(--clr-text-muted)] text-[0.65rem] mb-[2px]">Complexity</div>
              <div className="font-bold text-[0.72rem] text-[var(--clr-yellow)]">81 / 100</div>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="mt-16 relative z-[1] px-6">
        <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
          <div className="flex gap-4 w-max animate-[marquee_18s_linear_infinite]">
            {['GitHub App','Gemini AI','Webhooks','REST API','Vercel','Node.js','GitHub Actions','GitHub App','Gemini AI','Webhooks','REST API','Vercel','Node.js','GitHub Actions'].map((t, i) => (
              <span key={i} className="px-4 py-[0.35rem] border border-[var(--clr-border)] rounded-full text-[0.75rem] font-medium text-[var(--clr-text-muted)] whitespace-nowrap bg-white/[0.02]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
