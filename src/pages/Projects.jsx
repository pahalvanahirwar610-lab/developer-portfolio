
import { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Code2,
  ScanText,
  Globe,
  Dumbbell,
  Calculator,
  Wrench
} from 'lucide-react';

import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'Hybrid OCR System',
    category: 'AI & Automation',
    description:
      'An upcoming document-processing solution focused on identifying important pages and extracting useful information from large, unstructured documents. Designed around a real-world workflow challenge.',
    technologies: [
      'OCR',
      'Python',
      'Document Processing'
    ],
    icon: ScanText,
    status: 'In Development',
    featured: true,
    github: '',
    demo: ''
  },
  {
    id: 2,
    title: 'Personal Developer Portfolio',
    category: 'React Development',
    description:
      'A responsive multi-page developer portfolio built using React, featuring reusable components, client-side routing, animated sections and a modern dark-themed interface.',
    technologies: [
      'React',
      'JavaScript',
      'CSS3',
      'React Router'
    ],
    icon: Globe,
    status: 'Built Locally',
    featured: false,
    github: '',
    demo: ''
  },
  {
    id: 3,
    title: 'Gym Landing Page',
    category: 'Frontend Development',
    description:
      'A fitness-themed landing page focused on clean layouts, attractive visual design and an engaging user interface.',
    technologies: [
      'HTML5',
      'CSS3'
    ],
    icon: Dumbbell,
    status: 'Project',
    featured: false,
    github: '',
    demo: ''
  },
  {
    id: 4,
    title: 'Unit & Temperature Converter',
    category: 'Frontend Development',
    description:
      'An interactive web application for converting temperatures between Celsius, Fahrenheit and Kelvin using JavaScript-based conversion logic.',
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript'
    ],
    icon: Calculator,
    status: 'Project',
    featured: false,
    github: '',
    demo: ''
  }
];

const filters = [
  'All Projects',
  'AI & Automation',
  'React Development',
  'Frontend Development'
];

function Projects() {
  const [activeFilter, setActiveFilter] =
    useState('All Projects');

  const visibleProjects =
    activeFilter === 'All Projects'
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter
        );

  return (
    <main className="projects-page">
      <div className="projects-container">

        {/* PAGE HEADING */}
        <header className="projects-heading">
          <p className="projects-eyebrow">
            MY WORK
          </p>

          <h1>
            My <span>Projects.</span>
          </h1>

          <p>
            A collection of projects that reflect
            my interest in web development,
            programming and real-world
            problem-solving.
          </p>
        </header>

        {/* PROJECT FILTERS */}
        <div
          className="project-filters"
          aria-label="Filter projects"
        >
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              className={
                activeFilter === filter
                  ? 'filter-btn active'
                  : 'filter-btn'
              }
              aria-pressed={
                activeFilter === filter
              }
              onClick={() =>
                setActiveFilter(filter)
              }
            >
              {filter}
            </button>
          ))}
        </div>

        {/* PROJECT CARDS */}
        <section className="projects-grid">
          {visibleProjects.map((project) => {
            const ProjectIcon = project.icon;

            return (
              <article
                key={project.id}
                className={
                  project.featured
                    ? 'project-card featured-project'
                    : 'project-card'
                }
              >
                <div className="project-visual">
                  <div className="project-visual-icon">
                    <ProjectIcon
                      size={46}
                      strokeWidth={1.5}
                    />
                  </div>

                  <span className="project-status">
                    {project.status}
                  </span>

                  {project.featured && (
                    <span className="featured-label">
                      <Wrench size={13} />
                      Flagship Project
                    </span>
                  )}
                </div>

                <div className="project-body">

                  <p className="project-category">
                    <Code2 size={15} />
                    {project.category}
                  </p>

                  <h2>{project.title}</h2>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-technologies">
                    {project.technologies.map(
                      (tech) => (
                        <span key={tech}>
                          {tech}
                        </span>
                      )
                    )}
                  </div>

                  <div className="project-actions">

                    {project.github ? (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Source Code
                        <ArrowUpRight size={17} />
                      </a>
                    ) : (
                      <span className="project-unavailable">
                        Source code link pending
                      </span>
                    )}

                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live Demo
                        <ExternalLink size={16} />
                      </a>
                    )}

                  </div>
                </div>
              </article>
            );
          })}
        </section>

        {/* GITHUB CTA */}
        <div className="projects-bottom">

          <h2>
            More projects coming soon.
          </h2>

          <p>
            I'm continuously learning, improving
            existing projects and building
            practical applications.
          </p>

          <a
            href="https://github.com/pahalvanahirwar610-lab"
            target="_blank"
            rel="noopener noreferrer"
            className="github-profile-btn"
          >
            <Code2 size={19} />
            Explore My GitHub
            <ArrowUpRight size={17} />
          </a>

        </div>
      </div>
    </main>
  );
}

export default Projects;
