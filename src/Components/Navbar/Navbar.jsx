import React, { useState } from 'react';
import './Navbar.css';
import logo_light from '../../assets/img/sun.png';
import logo_dark from '../../assets/img/moon.png';

const Navbar = ({ theme, setTheme, language, setLanguage }) => {
  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
    localStorage.setItem('current_theme', theme === 'light' ? 'dark' : 'light');
  };

  const toggleLanguage = () => {
    const newLanguage = language === 'pt' ? 'en' : 'pt';
    setLanguage(newLanguage);
    localStorage.setItem('current_language', newLanguage);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((open) => !open);
  };

  return (
    <div className={`navbar ${theme}`}>
      <label htmlFor="check" className={`hamburguer ${theme}`}>
        <input type="checkbox" onClick={toggleMenu} id="check" checked={isOpen} onChange={() => {}} /> 
        <span></span>
        <span></span>
        <span></span>
      </label>
      
      <div className={`nav-list ${isOpen ? 'is-open' : ''}`}>
        <ul>
          <li><a href="#home">{language === 'pt' ? 'Inicio' : 'Home'}</a></li>
          <li><a href="#about-me">{language === 'pt' ? 'Sobre' : 'About'}</a></li>
          <li><a href="#project">{language === 'pt' ? 'Projetos' : 'Projects'}</a></li>
          <li><a href="#contact">{language === 'pt' ? 'Contato' : 'Contact'}</a></li>
        </ul>
      </div>
      
      <div className="navbar-controls">
        <button 
          onClick={toggleLanguage}
          className={`language-toggle ${theme}`}
          aria-label={language === 'pt' ? "Switch to English" : "Mudar para Português"}
        >
          {language === 'pt' ? 'EN' : 'PT'}
        </button>
        
        <img
          src={theme === 'light' ? logo_dark : logo_light}
          alt="Toggle Theme"
          className="icon-background"
          onClick={toggleMode}
        />
      </div>
    </div>
  );
};

export default Navbar;