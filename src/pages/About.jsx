
import { Link } from 'react-router-dom';

import {
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  MapPin,
  ArrowUpRight
} from 'lucide-react';

import './About.css';

// Technical Skills
const skills = [
  {
    name: 'C Programming',
    category: 'Programming',
    symbol: 'C'
  },
  {
    name: 'HTML5',
    category: 'Frontend',
    symbol: 'H'
  },
  {
    name: 'CSS3',
    category: 'Frontend',
    symbol: 'C3'
  },
  {
    name: 'JavaScript',
    category: 'Frontend',
    symbol: 'JS'
  },
  {
    name: 'React',
    category: 'Frontend',
    symbol: 'R'
  },
  {
    name: 'Python',
    category: 'Backend',
    symbol: 'Py'
  },
  {
    name: 'Django',
    category: 'Backend',
    symbol: 'Dj'
  },
  {
    name: 'SQL',
    category: 'Database',
    symbol: 'SQL'
  },
  {
    name: 'Git & GitHub',
    category: 'Tools',
    symbol: 'Git'
  }
];

function About() {
  return (
    <main className="about-page">
      <div className="about-container">

        {/* PAGE HEADING */}
        <header className="about-heading">
          <p className="about-eyebrow">
            GET TO KNOW ME
          </p>

          <h1>
            About <span>Me.</span>
          </h1>

          <p>
            A Computer Science graduate passionate about
            web development, problem-solving and continuous
            learning.
          </p>
        </header>

        {/* INTRODUCTION SECTION */}
        <section className="about-intro">

          <div className="about-intro-icon">
            <Code2 size={32} />
          </div>

          <div>
            <h2>Who am I?</h2>

            <p>
              I'm Pahalvan Ahirwar, a Computer Science
              Engineering graduate from Technocrats
              Institute of Technology (Excellence),
              Bhopal.
            </p>

            <p>
              I enjoy building responsive websites and
              web applications using React, JavaScript,
              Python and Django. I also have a strong
              foundation in C programming and
              problem-solving.
            </p>

            <p>
              I'm focused on strengthening my development
              skills through practical projects and
              real-world problem-solving.
            </p>

            <p>
              I'm currently working in healthcare
              operations while pursuing opportunities
              to begin my professional career in
              software development.
            </p>

            <div className="about-location">
              <MapPin size={17} />
              Madhya Pradesh, India
            </div>
          </div>

        </section>

        {/* TECHNICAL SKILLS SECTION */}
        <section className="about-section">

          <div className="about-section-title">
            <h2>
              Technical <span>Skills</span>
            </h2>

            <p>
              Technologies and tools I work with.
            </p>
          </div>

          <div className="skills-grid">

            {skills.map((skill) => (
              <div
                className="skill-card"
                key={skill.name}
              >
                <div className="skill-symbol">
                  {skill.symbol}
                </div>

                <h3>{skill.name}</h3>

                <p>{skill.category}</p>
              </div>
            ))}

          </div>
        </section>

        {/* EDUCATION & EXPERIENCE */}
        <section className="about-section">

          <div className="about-section-title">
            <h2>
              My <span>Journey</span>
            </h2>

            <p>
              Education and professional experience.
            </p>
          </div>

          <div className="journey-grid">

            {/* EDUCATION CARD */}
            <article className="journey-card">

              <div className="journey-icon">
                <GraduationCap size={24} />
              </div>

              <p className="journey-type">
                EDUCATION
              </p>

              <h3>
                B.Tech — Computer Science
              </h3>

              <p className="journey-organization">
                Technocrats Institute of Technology
                (Excellence)
              </p>

              <p className="journey-meta">
                Bhopal · 2021–2025
              </p>

              <p className="journey-description">
                Built a strong foundation in programming,
                web development, databases and software
                engineering through academic coursework
                and practical projects.
              </p>

            </article>

            {/* PROFESSIONAL EXPERIENCE CARD */}
            <article className="journey-card">

              <div className="journey-icon">
                <BriefcaseBusiness size={24} />
              </div>

              <p className="journey-type">
                PROFESSIONAL EXPERIENCE
              </p>

              <h3>
                Process Consultant 3
              </h3>

              <p className="journey-organization">
                Sagility
              </p>

              <p className="journey-meta">
                Healthcare Operations · 2025–Present
              </p>

              <p className="journey-description">
                Working in US healthcare operations
                with a focus on process accuracy,
                documentation and time-sensitive
                workflows. Developing communication,
                attention to detail and problem-solving
                skills.
              </p>

            </article>

          </div>
        </section>

        {/* PROJECTS CALL TO ACTION */}
        <div className="about-bottom">

          <p>
            Interested in seeing what I've built?
          </p>

          <Link
            to="/projects"
            className="about-project-link"
          >
            Explore My Projects
            <ArrowUpRight size={18} />
          </Link>

        </div>

      </div>
    </main>
  );
}

export default About;
