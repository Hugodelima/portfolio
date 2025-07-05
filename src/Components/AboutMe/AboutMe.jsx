import React, { useEffect, useState, useCallback } from 'react';
import './AboutMe.css';
import brain from '../../assets/img/cerebro.png';
import { FaArrowUp } from "react-icons/fa";
import translations from '../../translations';

export default function AboutMe({ language }) {
  const [showButton, setShowButton] = useState(false);
  const currentTheme = localStorage.getItem('current_theme') || 'dark';
  
  const onScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setShowButton(scrollPosition > 400);
  }, []);

  useEffect(() => {
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          onScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", throttledScroll, { passive: true });
    return () => window.removeEventListener("scroll", throttledScroll);
  }, [onScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  return (
    <div id='about-me' className='aboutMe-menu'>
      <h1 className={`title-aboutMe ${currentTheme}`}>{translations[language].about.title}</h1>
      <div className="aboutMe-menu-text">
        <div className="aboutMe-left">
          <img src={brain} alt="Brain illustration" loading="lazy" />
        </div>
        <div className='aboutMe-right'>
          <p dangerouslySetInnerHTML={{ __html: translations[language].about.content }} />
        </div>
      </div>
      
      <button
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        aria-label={language === 'pt' ? "Voltar ao topo" : "Back to top"}
        title={language === 'pt' ? "Voltar ao topo" : "Back to top"}
        type="button"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
}