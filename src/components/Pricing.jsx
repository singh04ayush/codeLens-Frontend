import { Icons } from './Icons'



export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20">
      {/* Glow blob */}
      <div className="absolute rounded-full pointer-events-none blur-[70px] w-[400px] h-[400px] -bottom-[100px] -right-[100px] bg-[radial-gradient(circle,rgba(99,102,241,0.1)_0%,transparent_70%)]" />

      <div className="px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-[0.4rem] px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.07em] uppercase border border-[var(--clr-border-hi)] bg-[rgba(99,102,241,0.08)] text-[var(--clr-primary-hi)] mb-[0.9rem]">
            <Icons.Sparkles /> Pricing
          </div>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.025em] mb-3" id="pricing-heading">
            Start free.<br /><span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">Scale when ready.</span>
          </h2>
          <p className="text-[0.9rem] text-[var(--clr-text-muted)] max-w-[480px] mx-auto leading-[1.75]">
            No credit card required. All 7 dimensions included free.
          </p>
        </div>

      </div>
    </section>
  )
}
