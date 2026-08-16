import { navLinks, profile } from '../data/resume'
import { useTheme } from '../hooks/useTheme'
import './Nav.css'

export function Nav() {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" className="nav-brand">
          {profile.brand}
        </a>
        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.id} href={`#${link.id}`}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={isDark}
          >
            <span className="theme-toggle-icon" aria-hidden="true">
              {isDark ? '☀' : '☾'}
            </span>
            <span className="theme-toggle-label">{isDark ? 'Light' : 'Dark'}</span>
          </button>
          <a
            className="nav-cta"
            href={profile.github.url}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
