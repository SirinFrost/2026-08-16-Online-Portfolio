import { education } from '../data/resume'
import './Education.css'

export function Education() {
  return (
    <section id="education" className="section education">
      <div className="container">
        <p className="section-label">Education</p>
        <h2 className="section-title">
          Where I&apos;m <span className="highlight">learning</span>
        </h2>

        <div className="education-list">
          {education.map((item) => (
            <article key={item.school} className="education-item">
              <div className="education-header">
                <h3>{item.school}</h3>
                <p>{item.period}</p>
              </div>
              <ul>
                {item.details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
