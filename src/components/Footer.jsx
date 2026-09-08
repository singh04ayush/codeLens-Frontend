export default function Footer() {
  return (
    <footer
      className="w-full max-w-[1380px] mx-auto border-t border-[var(--clr-border)] pt-14 pb-6 bg-[var(--clr-bg-1)]"
      id="footer"
    >
      <div className="px-6">
        {/* Grid */}
        <div className="grid grid-cols-[1.6fr_repeat(3,1fr)] gap-10 mb-10 max-[850px]:grid-cols-2 max-[500px]:grid-cols-1">

          {/* Brand */}
          <div className="flex flex-col gap-[0.6rem] max-[850px]:col-span-2 max-[500px]:col-span-1">
            <img src="/codelens-logo.jpg" alt="CodeLens" className="w-8 h-8 rounded-[8px] object-cover" />
            <span className="font-[var(--font-display)] text-[0.95rem] font-bold bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
              CodeLens
            </span>
            <p className="text-[0.78rem] text-[var(--clr-text-dim)] max-w-[200px]">
              AI-powered PR intelligence for GitHub teams.
            </p>
          </div>

          {/* Product links */}
          <div className="flex flex-col gap-[0.6rem]">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[var(--clr-text)] mb-[0.2rem]">Product</div>
            {['Features', 'How it Works', 'Signals', 'Pricing'].map(l => (
              <a
                key={l}
                href={`#${l.toLowerCase().replace(/ /g, '-')}`}
                className="text-[0.8rem] text-[var(--clr-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--clr-text)]"
              >
                {l}
              </a>
            ))}
          </div>

          {/* Links */}
          <div className="flex flex-col gap-[0.6rem]">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[var(--clr-text)] mb-[0.2rem]">Links</div>
            <a href="https://github.com/marketplace/codelens-prototype" className="text-[0.8rem] text-[var(--clr-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--clr-text)]" target="_blank" rel="noreferrer">GitHub App</a>
            <a href="#" className="text-[0.8rem] text-[var(--clr-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--clr-text)]">Documentation</a>
            <a href="#" className="text-[0.8rem] text-[var(--clr-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--clr-text)]">Changelog</a>
          </div>

          {/* Legal */}
          <div className="flex flex-col gap-[0.6rem]">
            <div className="text-[0.72rem] font-bold uppercase tracking-[0.08em] text-[var(--clr-text)] mb-[0.2rem]">Legal</div>
            <a href="#" className="text-[0.8rem] text-[var(--clr-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--clr-text)]">Privacy</a>
            <a href="#" className="text-[0.8rem] text-[var(--clr-text-muted)] no-underline transition-colors duration-200 hover:text-[var(--clr-text)]">Terms</a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex justify-between items-center pt-5 border-t border-[var(--clr-border)] text-[0.75rem] text-[var(--clr-text-dim)] max-[500px]:flex-col max-[500px]:gap-[0.4rem]">
          <span>© 2026 CodeLens</span>
          <span>Built with Gemini AI</span>
        </div>
      </div>
    </footer>
  )
}
