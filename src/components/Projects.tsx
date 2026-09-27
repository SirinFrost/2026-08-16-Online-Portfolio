import { projects } from '../data/resume'
import { ScrollPanel } from './ScrollPanel'
import { ScrollSlide } from './ScrollSlide'
import './Projects.css'

export function Projects() {
  return (
    <ScrollPanel id="projects" className="section projects" drift={false}>
      <div className="container">
        <ScrollSlide>
          <p className="section-label">Projects</p>
          <h2 className="section-title">
            Things I&apos;ve <span className="highlight">built</span>
          </h2>
          <p className="section-intro">
            Games, tools, and full-stack apps I&apos;ve made — from a custom game engine to local AI
            video pipelines
          </p>
        </ScrollSlide>

        <div className="project-list">
          {projects.map((project) => (
            <ScrollSlide as="article" key={project.name} className="project-item">
              <div className="project-heading">
                <div>
                  <h3 className="project-name">{project.name}</h3>
                  {project.url && (
                    <a
                      className="project-link"
                      href={project.url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub ↗
                    </a>
                  )}
                </div>
                <span className="project-period">{project.period}</span>
              </div>

              <div className="project-body">
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <ul>
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </ScrollSlide>
          ))}
        </div>
      </div>
    </ScrollPanel>
  )
}
