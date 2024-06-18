import React, { useState } from 'react';
import './Navbar.css';
import logo_light from '../../assets/img/sun.png';
import logo_dark from '../../assets/img/moon.png';

const Navbar = ({ theme, setTheme }) => {

  const toggleMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };


  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () =>{
    setIsOpen((open) => !open)
  }


  return (
    <div className={`navbar ${theme}`}>
      

      <label for="check" className={`hamburguer ${theme}`} >
        <input type="checkbox" onClick={toggleMenu} id="check"/> 
        <span></span>
        <span></span>
        <span></span>
      </label>
      <div className={`nav-list ${isOpen ? 'is-open' : ''}`}>
        <ul>
          <li><a href="#home">Pagina Inicial</a></li>
          <li><a href="#about-me">Sobre mim</a></li>
          <li><a href="#project">Projetos</a></li>
          <li><a href="#contact">Contato</a></li>
        </ul>
      </div>
      

      <img
        src={theme === 'light' ? logo_dark : logo_light}
        alt="Toggle Theme"
        className="icon-background"
        onClick={toggleMode}
      />
    </div>
  );
};

export default Navbar;
