import { profile } from '../data/resume'
import './Footer.css'

export function Footer() {
  return (
    <footer id="thanks" className="section footer">
      <div className="container">
        <p className="footer-label">Closing</p>
        <h2 className="footer-title">Thanks for reading through my portfolio</h2>
        <p className="footer-copy">
          I appreciate you taking the time to learn more about my experience and background. If
          anything here stood out, feel free to reach out — I&apos;d be happy to connect.
        </p>
        <p className="footer-bottom">
          © {new Date().getFullYear()} {profile.name}. Built with Vite + React.
        </p>
      </div>
    </footer>
  )
}
