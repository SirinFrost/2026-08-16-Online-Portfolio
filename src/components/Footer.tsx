import { profile } from '../data/resume'
import { ScrollPanel } from './ScrollPanel'
import './Footer.css'

export function Footer() {
  return (
    <>
      <ScrollPanel as="section" id="thanks" className="section closing">
        <div className="container">
          <p className="section-label">Closing</p>
          <h2 className="section-title closing-title">Thanks for reading through my portfolio</h2>
          <p className="section-intro closing-copy">
            I appreciate you taking the time to learn more about my experience and background. If
            anything here stood out, feel free to reach out — I&apos;d be happy to connect.
          </p>
        </div>
      </ScrollPanel>

      <footer className="site-meta">
        <div className="container site-meta__inner">
          <p className="site-meta__copy">
            © {new Date().getFullYear()} {profile.name}. Built with Vite + React.
          </p>
        </div>
      </footer>
    </>
  )
}
