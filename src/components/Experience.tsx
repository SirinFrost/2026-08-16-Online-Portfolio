import { experience } from '../data/resume'
import './Experience.css'

export function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="container">
        <p className="section-label">Experience</p>
        <h2 className="section-title">
          Places I&apos;ve learned at and <span className="highlight">led</span>
        </h2>
        <p className="section-intro">
          A few of the teams and programs where I&apos;ve built real skills — from robotics camps
          to Python classrooms and badminton coaching
        </p>

        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="experience-item">
              <div className="experience-heading">
                <div className="experience-title">
                  {item.logo && (
                    <img src={item.logo} alt="" className="experience-logo" />
                  )}
                  <div>
                    <p className="experience-company">{item.company}</p>
                    <h3 className="experience-role">{item.role}</h3>
                  </div>
                </div>
                <span className="experience-period">{item.period}</span>
              </div>

              <div className="experience-body">
                <div className="experience-tags">
                  {item.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul>
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
