import { heroImages, profile } from '../data/resume'
import { ScrollPanel } from './ScrollPanel'
import './Hero.css'

export function Hero() {
  const hasGallery = heroImages.length > 0

  return (
    <ScrollPanel className="hero section">
      <div className={`container hero-grid${hasGallery ? '' : ' hero-grid--solo'}`}>
        <div className="hero-copy">
          <h1 className="hero-title">{profile.name}</h1>
          <p className="hero-school">{profile.school}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-description">{profile.intro}</p>
          <div className="hero-actions">
            <a className="hero-button hero-button-primary" href="#experience">
              See my experience
            </a>
            <a
              className="hero-button hero-button-secondary"
              href={profile.github.url}
              target="_blank"
              rel="noreferrer"
            >
              {profile.github.label} ↗
            </a>
          </div>
          <div className="hero-meta">
            <span className="hero-meta__line">
              <svg
                className="hero-meta__icon"
                viewBox="0 0 16 16"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M8 0 10 6 16 8 10 10 8 16 6 10 0 8 6 6 8 0Z"
                />
              </svg>
              Open to tech opportunities 2027
            </span>
          </div>
        </div>

        {hasGallery && (
          <aside className="hero-gallery" aria-label="Gallery">
            {heroImages.map((image) => (
              <img
                key={image.src}
                className="hero-gallery__image"
                src={image.src}
                alt={image.alt}
              />
            ))}
          </aside>
        )}
      </div>
    </ScrollPanel>
  )
}
