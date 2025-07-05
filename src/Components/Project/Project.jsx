import React, { useEffect, useState } from 'react';
import './Project.css';
import timelineElements from '../../../data/timelineElements';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import translations from '../../translations';

export default function Project({ language }) {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('current_theme') || 'dark');
  const [activeTab, setActiveTab] = useState('frontend');

  const frontendProjects = timelineElements.filter(project => project.type === 'frontend');
  const backendProjects = timelineElements.filter(project => project.type === 'backend');

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentTheme(localStorage.getItem('current_theme') || 'dark');
    };
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const renderProjects = (projects) => {
    return projects.map(element => (
      <VerticalTimelineElement
        key={element.id}
        date={element.data[language]}
        dateClassName='date'
        contentStyle={{
          background: currentTheme === 'dark' ? '#000' : '#fff',
          color: currentTheme === 'dark' ? '#fff' : '#000',
          boxShadow: '0 0px 0 #ddd'
        }}
        contentArrowStyle={{
          borderRight: `7px solid ${currentTheme === 'dark' ? '#000' : '#fff'}`
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
        <div className={`buttons-projects ${currentTheme}`}>
          {element.link_site && (
            <a href={element.link_site} target="_blank" rel="noopener noreferrer">
              <button className='project-button'>
                {language === 'pt' ? 'Site' : 'Website'}
              </button>
            </a>
          )}
          <a href={element.link_codigo} target="_blank" rel="noopener noreferrer">
            <button className='project-button'>
              {language === 'pt' ? 'Código' : 'Code'}
            </button>
          </a>
        </div>
      </VerticalTimelineElement>
    ));
  };

  return (
    <div id='project' className={`project-menu ${currentTheme}`}>
      <h1 className="project-main-title">{translations[language].projects.title}</h1>
      
      <div className="project-tabs">
        <button 
          className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          {translations[language].projects.frontend}
        </button>
        <button 
          className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          {translations[language].projects.backend}
        </button>
      </div>

      <VerticalTimeline>
        {activeTab === 'frontend' ? renderProjects(frontendProjects) : renderProjects(backendProjects)}
      </VerticalTimeline>
    </div>
  );
}