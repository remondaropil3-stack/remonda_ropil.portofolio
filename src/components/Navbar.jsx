import { useState } from 'react'
import { navLinks, profile } from '../data/portfolio'
import './Navbar.css'

export default function Navbar({ theme, onToggleTheme }) {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="nav">
      <div className="nav__inner">
        <a href="#top" className="nav__logo" onClick={closeMenu} aria-label="Back to top">
          {profile.firstName}
          <span>.</span>
        </a>

        <nav aria-label="Primary">
          <ul className={`nav__links ${open ? 'is-open' : ''}`} id="primary-nav">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="nav__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? '☀' : '☾'}
          </button>
          <button
            type="button"
            className="icon-btn nav__menu-btn"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="primary-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
