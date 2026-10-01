import { useEffect } from 'react'
import './ProjectModal.css'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="modal-backdrop" onClick={onClose} role="presentation">
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="icon-btn modal__close"
          onClick={onClose}
          aria-label="Close project details"
        >
          ✕
        </button>
        <h3 id="project-modal-title">{project.title}</h3>
        <p className="tagline">{project.tagline}</p>
        <p className="desc">{project.description}</p>
        {project.image && <img src={project.image} alt={`${project.title} preview`} />}
        <h4>Technologies</h4>
        <div className="chips">
          {project.technologies.map((t) => (
            <span className="chip" key={t}>{t}</span>
          ))}
        </div>
        <h4>Key features</h4>
        <ul>
          {project.features.map((f) => (
            <li key={f.slice(0, 28)}>{f}</li>
          ))}
        </ul>
        <h4>My contribution</h4>
        <p className="role">{project.role}</p>
      </div>
    </div>
  )
}
