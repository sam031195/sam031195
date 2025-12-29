import { projects, projectsContent } from '../data';
import { SectionHeader } from './ui';
import './Projects.css';

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <SectionHeader
          title={projectsContent.title}
          subtitle={projectsContent.subtitle}
        />

        {/* Projects Grid */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-image">
                {project.imageUrl ? (
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="project-image-img"
                  />
                ) : (
                  <div className="project-image-placeholder"></div>
                )}
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a href={project.liveUrl || '#'} className="project-link">
                  {projectsContent.readMore} <span className="arrow">↗</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Section */}
        <div className="newsletter-section">
          <span className="newsletter-label">{projectsContent.newsletter.label}</span>
          <h2 className="newsletter-title">
            <span>{projectsContent.newsletter.heading[0]}</span>
            <span>{projectsContent.newsletter.heading[1]}</span>
          </h2>
          <div className="newsletter-cta">
            <button className="newsletter-btn">
              {projectsContent.newsletter.buttonText} <span className="arrow">↗</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

