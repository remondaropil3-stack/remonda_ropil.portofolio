import { skillGroups } from '../data/portfolio'
import './Skills.css'

export default function Skills() {
  return (
    <section className="section section--subtle" id="skills">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title">
            Skills &amp; <em>Technologies</em>
          </h2>
          <p className="section-lead">
            From component-driven frontends to REST APIs, data models and the tooling
            that ties them together.
          </p>
        </div>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <article className="skill-card reveal" key={group.title}>
              <div className="skill-card__icon" aria-hidden="true">
                {group.icon}
              </div>
              <h3>{group.title}</h3>
              <div className="chips">
                {group.skills.map((skill) => (
                  <span className="chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
