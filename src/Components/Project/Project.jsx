import React, { useState } from 'react';
import './Project.css';
import timelineElements from '../../../data/timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import translations from '../../translations';

export default function Project({ language, theme }) {
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendProjects = timelineElements.filter(project => project.type === 'frontend');
  const backendProjects = timelineElements.filter(project => project.type === 'backend');
  const mobileProjects = timelineElements.filter(project => project.type === 'mobile');
  console.log(translations[language])
  const renderProjects = (projects) => {
    return projects.map(element => (
      <VerticalTimelineElement
        key={element.id}
        date={element.data[language]}
        dateClassName={`date ${theme}`}
        contentStyle={{
          background: theme === 'dark' ? '#2d2d2d' : '#fff',
          color: theme === 'dark' ? '#f0f0f0' : '#333',
          boxShadow: `0 4px 8px ${theme === 'dark' ? 'rgba(0,0,0,0.3)' : 'rgba(0,0,0,0.1)'}`,
          borderRadius: '8px'
        }}
        contentArrowStyle={{
          borderRight: `7px solid ${theme === 'dark' ? '#2d2d2d' : '#fff'}`
        }}
        iconStyle={{
          background: '#FFB500',
          color: '#000',
          boxShadow: '0 0 0 4px #FFB500, inset 0 2px 0 rgba(0,0,0,.08), 0 3px 0 4px rgba(0,0,0,.05)',
          border: '1px solid black'
        }}
      >
        <h3 className="vertical-timeline-element-title">{element.titulo[language]}</h3>
        {element.imagem_projeto && (
          <img src={element.imagem_projeto} alt={element.titulo[language]} className="project-image" />
        )}
        <h4 className="vertical-timeline-element-subtitle">{element.descricao[language]}</h4>
        <p className="technologies-title">{translations[language].projects.technologies}</p>
        <div className="technologies-images">
          {element.imagem_tecnologias.map((img, index) => (
            <img key={index} src={img} alt="Technology icon" className="tech-icon" />
          ))}
        </div>
        <div className={`buttons-projects ${theme}`}>
          {element.link_site && (
            <a href={element.link_site} target="_blank" rel="noopener noreferrer" className="project-button-link">
              <button className='project-button'>
                {translations[language].projects.website}
              </button>
            </a>
          )}
          <a href={element.link_codigo} target="_blank" rel="noopener noreferrer" className="project-button-link">
            <button className='project-button'>
              {translations[language].projects.code}
            </button>
          </a>
        </div>
      </VerticalTimelineElement>
    ));
  };

  return (
    <div id='project' className={`project-menu ${theme}`}>
      <h1 className={`project-main-title ${theme}`}>{translations[language].projects.title}</h1>
      
      <div className="project-tabs">
        <button 
          className={`tab-button ${theme} ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          {translations[language].projects.frontend}
        </button>

        <button 
          className={`tab-button ${theme} ${activeTab === 'mobile' ? 'active' : ''}`}
          onClick={() => setActiveTab('mobile')}
        >
          {translations[language].projects.mobile}
        </button>
        <button 
          className={`tab-button ${theme} ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          {translations[language].projects.backend}
        </button>
      </div>

      <VerticalTimeline>
        {activeTab === 'frontend' ? renderProjects(frontendProjects) : 
         activeTab === 'backend' ? renderProjects(backendProjects) : 
         renderProjects(mobileProjects)}
      </VerticalTimeline>
    </div>
  );
}