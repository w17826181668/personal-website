import { useEffect, useState } from 'react'
import { navLinks, profile } from '../data/content.js'
import { useScrolled } from '../hooks/useReveal.js'
import './Navbar.css'

export default function Navbar() {
  const scrolled = useScrolled(40)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav-solid' : ''} ${open ? 'nav-open' : ''}`}>
      <div className="nav-inner container">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 40 40" fill="none">
              <circle cx="20" cy="20" r="14.5" stroke="currentColor" strokeWidth="2.5" />
              <circle cx="20" cy="20" r="5" fill="currentColor" />
            </svg>
          </span>
          <span className="brand-text">
            <b>{profile.name}</b>
            <i>{profile.nameEn}</i>
          </span>
        </a>

        <nav className="nav-links" aria-label="主导航">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href}>
              <em>{l.no}</em>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="nav-right">
          <span className="nav-avail">
            <i className="dot" />
            {profile.availability}
          </span>
          <a className="btn btn-primary nav-cta" href="#contact">
            联系我
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <button
            className={`burger ${open ? 'on' : ''}`}
            aria-label="菜单"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <i />
            <i />
          </button>
        </div>
      </div>

      {/* 移动端展开面板 */}
      <div className={`nav-drawer ${open ? 'show' : ''}`}>
        {navLinks.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <em>{l.no}</em>
            {l.label}
          </a>
        ))}
        <a className="drawer-cta" href="#contact" onClick={() => setOpen(false)}>联系我</a>
      </div>
    </header>
  )
}
