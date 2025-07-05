import React, { useEffect, useState } from 'react'
import './Project.css';
import timelineElements from '../../../data/timelineElements';

import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";

export default function Project() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('current_theme') || 'dark');
  const [activeTab, setActiveTab] = useState('frontend'); // 'frontend' or 'backend'

  // Filtrar projetos
  const frontendProjects = timelineElements.filter(project => project.type === 'frontend');
  const backendProjects = timelineElements.filter(project => project.type === 'backend');

  // Observar mudanças no tema
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
        date={element.data}
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
        <h3 className="vertical-timeline-element-title">{element.titulo}</h3>
        <img 
          src={element.imagem_projeto} 
          alt={element.titulo} 
          className="project-image"
        />
        <h4 className="vertical-timeline-element-subtitle">{element.descricao}</h4>
        <p className="technologies-title">{element.tecnologias}</p>
        <div className="technologies-images">
          {element.imagem_tecnologias.map((img, index) => (
            <img 
              key={index}
              src={img} 
              alt="Technology icon"
              className="tech-icon"
            />
          ))}
        </div>
        <div className={`buttons-projects ${currentTheme}`}>
          {element.link_site && (
            <a href={element.link_site} target="_blank" rel="noopener noreferrer">
              <button className='project-button'>Site</button>
            </a>
          )}
          <a href={element.link_codigo} target="_blank" rel="noopener noreferrer">
            <button className='project-button'>Código</button>
          </a>
        </div>
      </VerticalTimelineElement>
    ));
  };

  return (
    <div id='project' className={`project-menu ${currentTheme}`}>
      <h1 className="project-main-title">Meus Projetos</h1>
      
      <div className="project-tabs">
        <button 
          className={`tab-button ${activeTab === 'frontend' ? 'active' : ''}`}
          onClick={() => setActiveTab('frontend')}
        >
          Front-end
        </button>
        <button 
          className={`tab-button ${activeTab === 'backend' ? 'active' : ''}`}
          onClick={() => setActiveTab('backend')}
        >
          Back-end
        </button>
      </div>

      <VerticalTimeline>
        {activeTab === 'frontend' ? renderProjects(frontendProjects) : renderProjects(backendProjects)}
      </VerticalTimeline>
    </div>
  );
}