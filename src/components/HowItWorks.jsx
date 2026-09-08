import { Icons } from './Icons'

const STEPS = [
  { num: '01', icon: Icons.Github,    title: 'Install the App',   desc: 'One-click install from GitHub Marketplace. No tokens, no config files.', id: 'step-1' },
  { num: '02', icon: Icons.GitBranch, title: 'Open a PR',         desc: 'Create your PR as usual. CodeLens listens via webhooks — nothing to run.', id: 'step-2' },
  { num: '03', icon: Icons.Cpu,       title: 'Gemini Analyzes',   desc: 'The full diff and repo context is analyzed across 7 dimensions in parallel.', id: 'step-3' },
  { num: '04', icon: Icons.BarChart,  title: 'Review the Report', desc: 'A structured analysis comment appears on your PR within seconds.', id: 'step-4' },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20">
      {/* Glow blob */}
      <div className="absolute rounded-full pointer-events-none blur-[70px] w-[350px] h-[350px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle,rgba(168,85,247,0.12)_0%,transparent_70%)]" />

      <div className="px-6">
        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-[0.4rem] px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.07em] uppercase border border-[var(--clr-border-hi)] bg-[rgba(99,102,241,0.08)] text-[var(--clr-primary-hi)] mb-[0.9rem]">
            <Icons.Layers /> How It Works
          </div>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.025em] mb-3" id="how-heading">
            PR opened →<span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent"> insights delivered</span>
          </h2>
          <p className="text-[0.9rem] text-[var(--clr-text-muted)] max-w-[480px] mx-auto leading-[1.75]">
            Zero config beyond a single GitHub App install.
          </p>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-4 gap-4 relative z-[1] max-[900px]:grid-cols-2 max-[500px]:grid-cols-1">
          {STEPS.map((s, i) => (
            <div
              key={s.id}
              id={s.id}
              className="relative p-6 flex flex-col items-start gap-3 bg-[var(--clr-bg-card)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] backdrop-blur-[12px] transition-all duration-[250ms] hover:border-[rgba(99,102,241,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12),var(--shadow-card)]"
            >
              {/* Step number */}
              <div className="font-[var(--font-mono)] text-[0.68rem] font-semibold text-[var(--clr-primary-hi)] bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] w-8 h-8 rounded-full flex items-center justify-center">
                {s.num}
              </div>
              {/* Icon */}
              <div className="text-[var(--clr-text-muted)] [&_svg]:w-5 [&_svg]:h-5">
                <s.icon />
              </div>
              <h3 className="font-[var(--font-display)] text-[0.88rem] font-bold">{s.title}</h3>
              <p className="text-[0.8rem] text-[var(--clr-text-muted)] leading-[1.65]">{s.desc}</p>

              {/* Connector line (except last) */}
              {i < STEPS.length - 1 && (
                <div className="absolute -right-2 top-8 w-4 h-px bg-[var(--clr-border-hi)] max-[900px]:hidden" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
