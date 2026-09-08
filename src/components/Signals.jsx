import { Icons } from './Icons'

const SIGNALS = [
  { icon: Icons.BarChart,       label: 'Change Volume',        desc: 'PR size vs. repo norms',             color: '#6366f1', w: '78%' },
  { icon: Icons.Target,         label: 'Scope Drift',          desc: 'Single-purpose vs. sprawl',          color: '#8b5cf6', w: '62%' },
  { icon: Icons.AlertTriangle,  label: 'Critical Path Impact', desc: 'Auth, payments, permissions',        color: '#ef4444', w: '90%' },
  { icon: Icons.Lock,           label: 'Security Patterns',    desc: 'Unsafe inputs, secrets, vulns',      color: '#f59e0b', w: '85%' },
  { icon: Icons.Cpu,            label: 'Code Complexity',      desc: 'Cyclomatic complexity, nesting',     color: '#10b981', w: '71%' },
  { icon: Icons.CheckCircle,    label: 'Test Coverage',        desc: 'Changed code without tests',         color: '#22d3ee', w: '68%' },
  { icon: Icons.Eye,            label: 'Code Quality',         desc: 'Maintainability, error handling',    color: '#a855f7', w: '74%' },
]

export default function Signals() {
  return (
    <section id="signals" className="py-20 bg-[var(--clr-bg-1)]">
      <div className="px-6">

        {/* Section header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-[0.4rem] px-3 py-1 rounded-full text-[0.68rem] font-semibold tracking-[0.07em] uppercase border border-[var(--clr-border-hi)] bg-[rgba(99,102,241,0.08)] text-[var(--clr-primary-hi)] mb-[0.9rem]">
            <Icons.Search /> 7 Dimensions
          </div>
          <h2 className="font-[var(--font-display)] text-[clamp(1.6rem,3vw,2.3rem)] font-bold leading-[1.2] tracking-[-0.025em] mb-3" id="signals-heading">
            Structured signals, not<br /><span className="bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">generic AI prose</span>
          </h2>
          <p className="text-[0.9rem] text-[var(--clr-text-muted)] max-w-[480px] mx-auto leading-[1.75]">
            Each finding is backed by diff evidence — not speculation.
          </p>
        </div>

        {/* Signal rows */}
        <div className="flex flex-col gap-[0.6rem] mb-12">
          {SIGNALS.map((s, i) => (
            <div
              key={i}
              id={`signal-${i}`}
              className="flex items-center gap-4 px-5 py-[0.9rem] rounded-[var(--radius-md)] bg-[var(--clr-bg-card)] border border-[var(--clr-border)] shadow-[var(--shadow-card)] backdrop-blur-[12px] transition-[border-color] duration-200 hover:border-[rgba(99,102,241,0.2)] max-[600px]:[&_.bar-wrap]:hidden"
            >
              <div className="shrink-0 [&_svg]:w-4 [&_svg]:h-4" style={{ color: s.color }}>
                <s.icon />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-[var(--font-display)] text-[0.83rem] font-semibold">{s.label}</div>
                <div className="text-[0.72rem] text-[var(--clr-text-muted)]">{s.desc}</div>
              </div>
              <div className="bar-wrap w-[120px] h-1 bg-white/[0.06] rounded-sm overflow-hidden shrink-0">
                <div
                  className="h-full rounded-sm shadow-[0_0_6px_currentColor]"
                  style={{ width: s.w, background: s.color }}
                />
              </div>
              <span
                className="font-[var(--font-mono)] text-[0.72rem] font-semibold w-9 text-right shrink-0"
                style={{ color: s.color }}
              >
                {s.w}
              </span>
            </div>
          ))}
        </div>

        {/* PR Comment mock */}
        <div className="max-w-[640px] mx-auto overflow-hidden p-0 bg-[var(--clr-bg-card)] border border-[var(--clr-border)] rounded-[var(--radius-lg)] shadow-[var(--shadow-card)] backdrop-blur-[12px]" id="pr-comment-preview">
          <div className="flex items-center gap-[0.6rem] px-5 py-[0.9rem] border-b border-[var(--clr-border)] bg-white/[0.015]">
            <img src="/codelens-logo.jpg" alt="bot" className="w-7 h-7 rounded-full object-cover" />
            <span className="text-[0.82rem] font-bold">codelens-ai</span>
            <span className="ml-[0.4rem] px-[0.4rem] py-[0.08rem] border border-[var(--clr-border)] rounded-[3px] text-[0.65rem] text-[var(--clr-text-muted)]">bot</span>
            <span className="ml-auto text-[0.72rem] text-[var(--clr-text-dim)]">just now</span>
          </div>
          <div className="p-5">
            <p className="text-[0.83rem] font-semibold mb-[0.9rem]">
              🔍 PR #1245 — Optimize User Auth Flow ·{' '}
              <span className="inline-block px-[0.6rem] py-[0.15rem] rounded-[4px] text-[0.75rem] font-bold bg-[rgba(245,158,11,0.12)] border border-[rgba(245,158,11,0.25)] text-[var(--clr-yellow)]">
                ⚠️ Risk: 72/100
              </span>
            </p>
            <div className="flex flex-col gap-[0.4rem]">
              {[
                { k: '🔐 Security',      v: 'HIGH — SQL injection in auth.py:108',        c: 'text-[var(--clr-red)]' },
                { k: '🧩 Complexity',    v: '81/100 — validate_user() CC:14',             c: 'text-[var(--clr-yellow)]' },
                { k: '✅ Coverage',      v: '68% — auth paths missing tests',             c: 'text-[var(--clr-green)]' },
                { k: '⚠️ Critical Path', v: 'YES — authentication system modified',       c: 'text-[var(--clr-red)]' },
                { k: '🎯 Scope',         v: 'Focused — single coherent change',           c: 'text-[var(--clr-green)]' },
              ].map(r => (
                <div key={r.k} className="flex justify-between items-center gap-4 text-[0.78rem] px-[0.6rem] py-[0.4rem] rounded-[5px] bg-white/[0.02] max-[600px]:flex-col max-[600px]:items-start">
                  <span className="font-semibold text-[var(--clr-text-muted)] shrink-0">{r.k}</span>
                  <span className={`font-semibold text-right ${r.c}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
