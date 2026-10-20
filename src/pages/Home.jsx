
import { Link } from 'react-router-dom';
import {
  Mail,
  Download,
  ArrowUpRight,
  ArrowRight
} from 'lucide-react';

import './Home.css';

function Home() {
  return (
    <main className="home-page">
      <section className="hero">

        {/* LEFT SIDE - INTRODUCTION */}
        <div className="hero-content">

          <p className="hero-greeting">
            <span className="status-dot"></span>
            Welcome to my portfolio
          </p>

          <h1>
            Hi, I'm <span>Pahalvan Ahirwar.</span>
          </h1>

          <h2>Full Stack Developer</h2>

          <p className="hero-description">
            I'm a Computer Science graduate passionate
            about building modern, responsive and
            user-friendly web applications using React,
            JavaScript, Python and Django.
          </p>

          {/* ACTION BUTTONS */}
          <div className="hero-buttons">

            <Link
              to="/projects"
              className="primary-btn"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <a
              href="/resume.pdf"
              download="Pahalvan_Ahirwar_Resume.pdf"
              className="secondary-btn"
            >
              Download Resume
              <Download size={18} />
            </a>

          </div>

          {/* SOCIAL LINKS */}
          <div className="hero-socials">

            <a
              href="https://github.com/pahalvanahirwar610-lab"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              GH
            </a>

            <Link
              to="/contact"
              aria-label="Contact Me"
              title="Contact Me"
            >
              <Mail size={21} />
            </Link>

          </div>
        </div>

        {/* RIGHT SIDE - CODE EDITOR */}
        <div className="hero-visual">

          <div className="code-window">

            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="code-label">
              <span>developer.js</span>
              <ArrowUpRight size={15} />
            </div>

            <pre>
              <code>{`const developer = {
  name: "Pahalvan",
  role: "Full Stack Developer",
  skills: [
    "React",
    "JavaScript",
    "Python",
    "Django"
  ],
  passion: "Building for the web"
};`}</code>
            </pre>

          </div>
        </div>

      </section>
    </main>
  );
}

export default Home;
