import { profile } from '../data/portfolio'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" id="top" aria-label="Introduction">
      <div className="container hero__grid">
        <div>
          <span className="hero__badge">
            <i aria-hidden="true" />
            {profile.availability} · {profile.location}
          </span>
          <h1 className="hero__name">
            {profile.firstName} <em>{profile.name.split(' ')[1]}</em>
          </h1>
          <p className="hero__subtitle">{profile.title} · {profile.subtitle}</p>
          <p className="hero__desc">
            I build complete web applications across the MERN stack — from database
            design and REST APIs to a polished, accessible UI. My background in
            teaching shapes how I design for real users.
          </p>
          <div className="hero__cta">
            <a className="btn btn--primary" href="#projects">
              View My Projects
            </a>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>
          <div className="hero__social">
            <a href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              LinkedIn ↗
            </a>
            <a href={profile.portfolioUrl} target="_blank" rel="noreferrer noopener">
              Portfolio ↗
            </a>
            <a href={`mailto:${profile.email}`}>Email</a>
          </div>
        </div>

        <div className="hero__portrait">
          <figure className="portrait-frame">
            <img src={profile.portrait} alt={`Portrait of ${profile.name}`} />
            <figcaption className="portrait-tag">React · Node.js</figcaption>
          </figure>
        </div>
      </div>
    </section>
  )
}
