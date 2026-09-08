import { Icons } from './Icons'

export default function CTA() {
  return (
    <section className="py-12 pb-24" id="cta">
      <div className="px-6">
        <div
          className="relative overflow-hidden p-16 text-center bg-[var(--clr-bg-card)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] backdrop-blur-[12px]"
          id="cta-card"
        >
          {/* Glow blobs */}
          <div className="absolute rounded-full pointer-events-none blur-[70px] w-[350px] h-[350px] -top-[80px] -left-[80px] bg-[radial-gradient(circle,rgba(99,102,241,0.25)_0%,transparent_70%)]" />
          <div className="absolute rounded-full pointer-events-none blur-[70px] w-[280px] h-[280px] -bottom-[60px] -right-[60px] bg-[radial-gradient(circle,rgba(168,85,247,0.2)_0%,transparent_70%)]" />

          <div className="relative z-[1]">
            <div className="inline-flex items-center gap-[0.4rem] px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.07em] uppercase border border-[var(--clr-border-hi)] bg-[rgba(99,102,241,0.08)] text-[var(--clr-primary-hi)] mb-5">
              <Icons.Zap /> Ready to ship?
            </div>

            <h2
              className="font-[var(--font-display)] text-[clamp(1.6rem,3.5vw,2.4rem)] font-[800] tracking-[-0.025em] mb-3"
              id="cta-heading"
            >
              Stop guessing where to<br />
              <span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">focus your review.</span>
            </h2>

            <p className="text-[0.88rem] text-[var(--clr-text-muted)] max-w-[400px] mx-auto mb-8 leading-[1.75]">
              Install in under 60 seconds. CodeLens works automatically on every PR.
            </p>

            <div className="flex gap-3 justify-center flex-wrap">
              <a
                href="https://github.com/marketplace/codelens-prototype"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-[0.45rem] px-[1.4rem] py-[0.6rem] rounded-[var(--radius-md)] font-[var(--font-sans)] text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 no-underline border-0 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] text-white shadow-[var(--shadow-btn)] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(99,102,241,0.5)]"
                id="cta-install-btn"
              >
                <Icons.Github /> Install on GitHub — Free
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-[0.45rem] px-[1.4rem] py-[0.6rem] rounded-[var(--radius-md)] font-[var(--font-sans)] text-[0.82rem] font-semibold cursor-pointer transition-all duration-200 no-underline bg-transparent text-[var(--clr-text-muted)] border border-[var(--clr-border)] hover:border-white/[0.12] hover:text-[var(--clr-text)]"
                id="cta-features-btn"
              >
                Explore features <Icons.ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
