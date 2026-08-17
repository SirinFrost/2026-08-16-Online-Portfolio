import { profile, skills } from '../data/resume'
import { ScrollPanel } from './ScrollPanel'
import './SkillsInterests.css'

export function SkillsInterests() {
  return (
    <ScrollPanel id="skills" className="section skills-interests">
      <div className="container">
        <p className="section-label">Skills & Interests</p>
        <h2 className="section-title">
          What I know and what I&apos;m <span className="highlight">into</span>
        </h2>
        <p className="section-intro">{skills.subtitle}</p>

        <div className="skills-group">
          <h3>Interests</h3>
          <div className="skills-tags">
            {profile.interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-group">
          <h3>Software & Tools</h3>
          <div className="skills-tags">
            {skills.software.map((tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ScrollPanel>
  )
}
