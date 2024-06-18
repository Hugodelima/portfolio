import React, { useEffect, useState } from 'react'
import './Project.css';
import timelineElements from '../../../data/timelineElements';


import { 
  VerticalTimeline, 
  VerticalTimelineElement 
} from 'react-vertical-timeline-component';

import "react-vertical-timeline-component/style.min.css";

export default function Project() {
  const current_theme = localStorage.getItem('current_theme');

  return (
    <div id='project' className='project-menu'>
      <h1>Projetos</h1>
      <VerticalTimeline>
        {timelineElements.map(element =>{

            return (
              <VerticalTimelineElement
                key={element.key}
                date={element.data}
                lineColor={ 'black' }
                dateClassName='date'
                contentStyle={current_theme === 'dark'
                ? {background: '#000', color: '#fff', boxShadow:'0 0px 0 #ddd'}
                : {background: '#fff', color: '#000', boxShadow:'0 0px 0 #ddd'}
                }
                contentArrowStyle={current_theme === 'dark'
                ?  { borderRight: '7px solid  #000' }
                :  { borderRight: '7px solid  #fff' }
                }

              >
                <h3 className="vertical-timeline-element-title">{element.titulo}</h3>
                <img src={element.imagem_projeto} alt={element.titulo} style={{ width: '100%', height: 'auto' }} />
                <h4 className="vertical-timeline-element-subtitle">{element.descricao}</h4>
                <p>{element.tecnologias}</p>
                <div className="tecnologias-imagens">
                  {element.imagem_tecnologias.map((img) => (
                    <img src={img} style={{ width: '50px', height: '50px', margin: '0 5px' }} />
                  ))}
                </div>
                <div className={`buttons-projects ${current_theme}`}>
                  <a href={element.link_site} target="_blank" rel="noopener noreferrer">
                    <button className='buttons-projects-left'>Site</button>
                  </a>
                  <a href={element.link_codigo} target="_blank" rel="noopener noreferrer">
                    <button className='buttons-projects-right'>Código</button>
                  </a>
                </div>
              </VerticalTimelineElement>
            )
          })
        }
      </VerticalTimeline>
      
    </div>
  )
}
