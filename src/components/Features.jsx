import { Icons } from './Icons'

const FEATURES = [
  { icon: Icons.Lock,        title: 'Security Signals',      desc: 'Flags SQL injection, secrets, unsafe patterns, and vulnerable dependencies before they reach production.',    accent: '#ef4444', id: 'feat-security' },
  { icon: Icons.Activity,    title: 'Risk Scoring',          desc: 'Every PR gets an overall risk score with per-dimension breakdowns so reviewers know exactly where to focus.', accent: '#f97316', id: 'feat-risk' },
  { icon: Icons.Cpu,         title: 'Complexity Hotspots',   desc: 'Pinpoints high cyclomatic complexity, deep nesting, and maintainability issues at the function level.',       accent: '#a855f7', id: 'feat-complexity' },
  { icon: Icons.CheckCircle, title: 'Coverage Gaps',         desc: 'Shows which changed or high-risk code paths have no test coverage, with targeted suggestions.',              accent: '#10b981', id: 'feat-coverage' },
  { icon: Icons.Target,      title: 'Scope Drift Detection', desc: 'Detects when a PR is doing more than claimed — multiple concerns, sprawling changes, or off-topic edits.',    accent: '#22d3ee', id: 'feat-scope' },
  { icon: Icons.Zap,         title: 'Instant Integration',   desc: 'Install the GitHub App once. CodeLens posts a structured analysis comment automatically on every new PR.',   accent: '#6366f1', id: 'feat-instant' },
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-[var(--clr-bg-1)]">
      <div className="px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-[0.4rem] px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.07em] uppercase border border-[var(--clr-border-hi)] bg-[rgba(99,102,241,0.08)] text-[var(--clr-primary-hi)] mb-[0.9rem]">
            <Icons.Sparkles /> Features
          </div>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.025em] mb-3" id="features-heading">
            Every signal a reviewer<br /><span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">actually needs</span>
          </h2>
          <p className="text-[0.9rem] text-[var(--clr-text-muted)] max-w-[480px] mx-auto leading-[1.75]">
            Useful, explainable analysis — not generic AI prose.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-3 gap-4 max-[900px]:grid-cols-2 max-[560px]:grid-cols-1">
          {FEATURES.map(f => (
            <div
              key={f.id}
              id={f.id}
              style={{ '--accent': f.accent }}
              className="relative overflow-hidden p-6 flex flex-col gap-3 bg-[var(--clr-bg-card)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] backdrop-blur-[12px] transition-all duration-[250ms] hover:border-[rgba(99,102,241,0.2)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(99,102,241,0.12),var(--shadow-card)] before:content-[''] before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-[linear-gradient(90deg,transparent,var(--accent),transparent)] before:opacity-60 hover:before:opacity-100"
            >
              <div className="w-9 h-9 rounded-[var(--radius-sm)] bg-white/[0.04] border border-[var(--clr-border)] flex items-center justify-center [color:var(--accent)] [&_svg]:w-4 [&_svg]:h-4">
                <f.icon />
              </div>
              <h3 className="font-[var(--font-display)] text-[0.88rem] font-bold">{f.title}</h3>
              <p className="text-[0.8rem] text-[var(--clr-text-muted)] leading-[1.65] flex-1">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
