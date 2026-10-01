import { experience, education, certifications } from '../data/portfolio'
import './Experience.css'

export default function Experience() {
  return (
    <section className="section section--subtle" id="experience">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">My path</span>
          <h2 className="section-title">
            Professional <em>Journey</em>
          </h2>
          <p className="section-lead">
            An education background that became an engineering advantage — structured
            thinking, clear communication and user-centered design.
          </p>
        </div>

        <ol className="timeline reveal">
          {experience.map((job) => (
            <li key={job.role + job.period}>
              <span className="timeline__period">{job.period}</span>
              <h3 className="timeline__role">{job.role}</h3>
              <p className="timeline__org">{job.org}</p>
              <ul>
                {job.points.map((point) => (
                  <li key={point.slice(0, 32)}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>

        <div className="edu-grid">
          {education.map((edu) => (
            <article className="edu-card reveal" key={edu.title}>
              <span className="fact-label">Education</span>
              <h3>{edu.title}</h3>
              <p>{edu.school}</p>
              <p>{edu.period}</p>
            </article>
          ))}
          {certifications.map((cert) => (
            <article className="edu-card reveal" key={cert.title}>
              <span className="fact-label">Certification</span>
              <h3>{cert.title}</h3>
              <p>{cert.issuer}</p>
              {cert.detail && <p>{cert.detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
