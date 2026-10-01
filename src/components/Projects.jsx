import { useState } from 'react'
import { projects } from '../data/portfolio'
import ProjectModal from './ProjectModal'
import './Projects.css'

export default function Projects() {
  const [active, setActive] = useState(null)
  const featured = projects.find((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section className="section" id="projects">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Portfolio</span>
          <h2 className="section-title">
            Featured <em>Projects</em>
          </h2>
          <p className="section-lead">
            Work built end-to-end — from data models and APIs to accessible interfaces.
          </p>
        </div>

        {featured && (
          <article className="projects__featured reveal">
            <div className="projects__featured-media">
              <img src={featured.image} alt={`${featured.title} preview`} />
            </div>
            <div className="projects__featured-body">
              <span className="projects__featured-label">Featured project</span>
              <h3>{featured.title}</h3>
              <p className="tagline">{featured.tagline}</p>
              <p className="desc">{featured.description}</p>
              <div className="chips">
                {featured.technologies.map((t) => (
                  <span className="chip" key={t}>{t}</span>
                ))}
              </div>
              <button type="button" className="btn btn--primary" onClick={() => setActive(featured)}>
                View case details
              </button>
            </div>
          </article>
        )}

        <div className="projects__grid">
          {rest.map((project) => (
            <button
              type="button"
              key={project.id}
              className="project-card reveal"
              onClick={() => setActive(project)}
              aria-label={`View details for ${project.title}`}
            >
              {project.image && (
                <div className="project-card__media">
                  <img src={project.image} alt="" aria-hidden="true" />
                </div>
              )}
              <div className="project-card__body">
                <div className="chips">
                  {project.technologies.slice(0, 4).map((t) => (
                    <span className="chip" key={t}>{t}</span>
                  ))}
                </div>
                <h3>{project.title}</h3>
                <p className="project-card__tagline">{project.tagline}</p>
                <p className="project-card__desc">{project.description}</p>
                <span className="project-card__cta">View details →</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
