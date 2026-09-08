import { useState, useEffect } from 'react'
import { Icons } from './Icons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] py-[0.85rem] border-b border-transparent transition-all duration-300 ${scrolled ? 'bg-[rgba(5,8,15,0.88)] backdrop-blur-[20px] border-b-[var(--clr-border)]' : ''}`}>
      <div className="max-w-[1100px] mx-auto px-6 flex items-center gap-6">

        {/* Brand */}
        <a href="#" className="flex items-center gap-[0.55rem] no-underline shrink-0" id="navbar-logo">
          <img src="/codelens-logo.jpg" alt="CodeLens" className="w-7 h-7 rounded-[6px] object-cover" />
          <span className="font-[var(--font-display)] text-base font-bold bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent">
            CodeLens
          </span>
        </a>

        {/* Nav links */}
        <div className={`flex items-center gap-[0.1rem] mx-auto max-md:hidden ${menuOpen ? '!flex !flex-col !absolute !top-full !left-0 !right-0 !bg-[var(--clr-bg-1)] !border-b !border-[var(--clr-border)] !p-3 !gap-[0.1rem]' : ''}`}>
          {['Features', 'How it Works', 'Signals', 'Pricing'].map(l => (
            <a
              key={l}
              href={`#${l.toLowerCase().replace(/ /g, '-')}`}
              className="px-[0.8rem] py-[0.4rem] text-[var(--clr-text-muted)] no-underline text-[0.82rem] font-medium rounded-[var(--radius-sm)] transition-all duration-200 hover:text-[var(--clr-text)] hover:bg-white/[0.04]"
              id={`nav-${l.replace(/ /g, '')}`}
            >
              {l}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/marketplace/codelens-prototype"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-[0.45rem] px-[1.1rem] py-[0.5rem] rounded-[var(--radius-md)] font-[var(--font-sans)] text-[0.8rem] font-semibold cursor-pointer transition-all duration-200 no-underline border-0 bg-gradient-to-r from-[#6366f1] via-[#a855f7] to-[#22d3ee] text-white shadow-[var(--shadow-btn)] hover:-translate-y-px hover:shadow-[0_6px_24px_rgba(99,102,241,0.5)]"
            id="nav-install-btn"
          >
            <Icons.Github /> Install on GitHub
          </a>
          <button
            className="hidden max-md:flex flex-col gap-1 bg-transparent border-0 cursor-pointer p-1"
            onClick={() => setMenuOpen(v => !v)}
            id="nav-hamburger"
            aria-label="Menu"
          >
            <span className="block w-5 h-[1.5px] bg-[var(--clr-text-muted)] rounded-sm transition-all duration-200" />
            <span className="block w-5 h-[1.5px] bg-[var(--clr-text-muted)] rounded-sm transition-all duration-200" />
            <span className="block w-5 h-[1.5px] bg-[var(--clr-text-muted)] rounded-sm transition-all duration-200" />
          </button>
        </div>
      </div>
    </nav>
  )
}
