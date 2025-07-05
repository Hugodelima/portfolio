import React from 'react';
import './Footer.css';
import translations from '../../translations';

export default function Footer({ language }) {
  return (
    <div className='footer'>
      <div className='waves'>
        <div className="wave" id='wave1'></div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>
      <div className='icon-footer'>
        <a href="https://www.linkedin.com/in/hugo-de-lima" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Hugodelima" target="_blank" rel="noopener noreferrer">
          <i className="bi bi-github"></i>
        </a>
      </div>
      
      <p>{translations[language].footer.copyright}</p>
    </div>
  );
}