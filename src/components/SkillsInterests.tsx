import { profile, skills } from '../data/resume'
import { ScrollPanel } from './ScrollPanel'
import { ScrollSlide } from './ScrollSlide'
import './SkillsInterests.css'

export function SkillsInterests() {
  return (
    <ScrollPanel id="skills" className="section skills-interests" drift={false}>
      <div className="container">
        <ScrollSlide>
          <p className="section-label">Skills & Interests</p>
          <h2 className="section-title">
            What I know and what I&apos;m <span className="highlight">into</span>
          </h2>
          <p className="section-intro">{skills.subtitle}</p>
        </ScrollSlide>

        <ScrollSlide className="skills-group">
          <h3>Interests</h3>
          <div className="skills-tags">
            {profile.interests.map((interest) => (
              <span key={interest} className="tag">
                {interest}
              </span>
            ))}
          </div>
        </ScrollSlide>

        <ScrollSlide className="skills-group">
          <h3>Software & Tools</h3>
          <div className="skills-tags">
            {skills.software.map((tool) => (
              <span key={tool} className="tag">
                {tool}
              </span>
            ))}
          </div>
        </ScrollSlide>
      </div>
    </ScrollPanel>
  )
}
