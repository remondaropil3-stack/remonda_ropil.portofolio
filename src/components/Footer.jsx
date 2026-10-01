import { profile } from '../data/portfolio'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>
          <b>{profile.firstName}.</b> © {new Date().getFullYear()} {profile.name}
        </span>
        <span>
          <a href="#projects">Work</a> · <a href="#contact">Contact</a>
        </span>
      </div>
    </footer>
  )
}
