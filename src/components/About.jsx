import { about, languages } from '../data/portfolio'
import './About.css'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">About me</span>
          <h2 className="section-title">
            Where Education Meets <em>Engineering</em>
          </h2>
        </div>

        <div className="about__grid">
          <div className="about__text reveal">
            {about.paragraphs.map((p) => (
              <p key={p.slice(0, 32)}>{p}</p>
            ))}
            <div className="about__chips">
              {about.highlights.map((h) => (
                <span className="chip" key={h}>
                  {h}
                </span>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="fact-card">
              <span className="fact-label">Languages</span>
              {languages.map((l) => (
                <h3 key={l.name}>
                  {l.name} <span style={{ fontWeight: 400, color: 'var(--muted)', fontSize: '0.85rem' }}>— {l.level}</span>
                </h3>
              ))}
            </div>
            <div className="fact-card">
              <span className="fact-label">Education</span>
              <h3>Ain Shams University</h3>
              <p>Bachelor & Diploma in Education</p>
            </div>
            <div className="fact-card">
              <span className="fact-label">Certifications</span>
              <h3>Meta Front-End Developer</h3>
              <p>Professional Certificate · 2026</p>
              <h3 style={{ marginTop: 10 }}>Italian B1</h3>
              <p>Istituto Italiano di Cultura · 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
