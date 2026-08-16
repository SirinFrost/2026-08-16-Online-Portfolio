import { heroImages, profile } from '../data/resume'
import './Hero.css'

export function Hero() {
  const hasGallery = heroImages.length > 0

  return (
    <section className="hero section">
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
            <span>Open to co-op, teaching, and tech opportunities</span>
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
    </section>
  )
}
