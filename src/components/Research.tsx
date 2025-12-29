import { useState } from 'react';
import { researchProjects, skillCategories, personalInfo, researchContent } from '../data';
import { SectionHeader, CTASection, Card } from './ui';
import './Research.css';

const Research = () => {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const openModal = (projectId: string) => {
    setSelectedProject(projectId);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  const selectedProjectData = selectedProject 
    ? researchProjects.find(p => p.id === selectedProject)
    : null;

  const handleCardClick = (project: typeof researchProjects[0]) => {
    if (project.websiteUrl) {
      window.open(project.websiteUrl, '_blank', 'noopener,noreferrer');
    } else if (project.researchPaperUrl) {
      window.open(project.researchPaperUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="research" className="research">
      <div className="research-container">
        <SectionHeader
          title={researchContent.title}
          subtitle={researchContent.subtitle}
        />

        <div className="research-grid">
          {researchProjects.map((project) => {
            const hasLink = project.websiteUrl || project.researchPaperUrl;
            return (
              <div
                key={project.id}
                className={`research-card-wrapper ${hasLink ? 'research-card-clickable' : ''}`}
                onClick={hasLink ? () => handleCardClick(project) : undefined}
              >
                <Card className="research-card" border>
                  <div className="research-image">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="research-image-img"
                    />
                  </div>
                  <div className="research-content">
                    <div className="research-info">
                      <p className="research-project-title">{project.title}</p>
                      <p className="research-category">{project.category}</p>
                      <div className="research-description-wrapper">
                        <p className="research-description">
                          {project.description}
                        </p>
                        <button 
                          className="research-read-more-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            openModal(project.id);
                          }}
                        >
                          Read more
                        </button>
                      </div>
                    </div>
                    <Card className="research-year-card" border>
                      <span className="research-year">{project.year}</span>
                    </Card>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>

        {/* Skills Section */}
        <div className="skills-section">
          <div className="skills-header">
            <h2 className="skills-title">{researchContent.skills.title}</h2>
            <p className="skills-description">
              {researchContent.skills.description}
            </p>
          </div>
          <div className="skills-grid">
            {skillCategories.map((category, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{category.title}</h3>
                <ul className="skill-list">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <CTASection
          title={researchContent.cta.title}
          buttonText={researchContent.cta.buttonText}
          onButtonClick={() => window.location.href = `mailto:${personalInfo.email}`}
        />
      </div>

      {/* Modal for full description */}
      {selectedProjectData && (
        <div className="research-modal-overlay" onClick={closeModal}>
          <div className="research-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="research-modal-close" onClick={closeModal}>×</button>
            <h2 className="research-modal-title">{selectedProjectData.title}</h2>
            <p className="research-modal-category">{selectedProjectData.category}</p>
            <p className="research-modal-description">{selectedProjectData.description}</p>
            {selectedProjectData.websiteUrl ? (
              <a 
                href={selectedProjectData.websiteUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="research-modal-link"
              >
                Visit Website →
              </a>
            ) : selectedProjectData.researchPaperUrl && (
              <a 
                href={selectedProjectData.researchPaperUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="research-modal-link"
              >
                View Research Paper →
              </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Research;

