import { useState } from 'react'
import { profile } from '../data/portfolio'
import './Contact.css'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    const body = `${form.message}

${form.name} (${form.email})`
    window.location.href =
      `mailto:${profile.email}?subject=${encodeURIComponent(form.subject)}` +
      `&body=${encodeURIComponent(body)}`
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section-title">
            Let&apos;s build something <em>great.</em>
          </h2>
        </div>

        <div className="contact__grid">
          <div className="contact__rows reveal">
            <a className="contact__row" href={`mailto:${profile.email}`}>
              <span className="contact__icon" aria-hidden="true">✉</span>
              <span>
                <small>Email</small>
                {profile.email}
              </span>
            </a>
            <a className="contact__row" href={`tel:+2${profile.phone}`}>
              <span className="contact__icon" aria-hidden="true">☏</span>
              <span>
                <small>Phone</small>
                {profile.phone}
              </span>
            </a>
            <div className="contact__row">
              <span className="contact__icon" aria-hidden="true">⚑</span>
              <span>
                <small>Location</small>
                {profile.location}
              </span>
            </div>
            <a className="contact__row" href={profile.linkedin} target="_blank" rel="noreferrer noopener">
              <span className="contact__icon" aria-hidden="true">in</span>
              <span>
                <small>LinkedIn</small>
                linkedin.com/in/remonda-ropil
              </span>
            </a>
          
          </div>

          <form className="contact__form reveal" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="cf-name">Your name</label>
              <input
                id="cf-name"
                name="name"
                required
                autoComplete="name"
                value={form.name}
                onChange={update('name')}
              />
            </div>
            <div className="field">
              <label htmlFor="cf-email">Email</label>
              <input
                id="cf-email"
                name="email"
                type="email"
                required
                autoComplete="email"
                value={form.email}
                onChange={update('email')}
              />
            </div>
            <div className="field">
              <label htmlFor="cf-subject">Subject</label>
              <input
                id="cf-subject"
                name="subject"
                required
                value={form.subject}
                onChange={update('subject')}
              />
            </div>
            <div className="field">
              <label htmlFor="cf-message">Message</label>
              <textarea
                id="cf-message"
                name="message"
                required
                value={form.message}
                onChange={update('message')}
              />
            </div>
            <button type="submit" className="btn btn--primary">
              Send message
            </button>
            <p className="contact__note">This opens your email app with the message ready to send.</p>
          </form>
        </div>
      </div>
    </section>
  )
}
