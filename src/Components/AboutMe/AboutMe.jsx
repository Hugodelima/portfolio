import React, { useEffect, useState, useCallback } from 'react';
import './AboutMe.css';
import brain from '../../assets/img/cerebro.png';
import { FaArrowUp } from "react-icons/fa";

export default function AboutMe() {
  const [showButton, setShowButton] = useState(false);
  const current_theme = localStorage.getItem('current_theme');
  
  const onScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setShowButton(scrollPosition > 400);
  }, []);

  useEffect(() => {
    // Throttle da função de scroll para melhor performance
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
    
    return () => {
      window.removeEventListener("scroll", throttledScroll);
    };
  }, [onScroll]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  }, []);

  // Função para lidar com teclas (acessibilidade)
  const handleKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      scrollToTop();
    }
  }, [scrollToTop]);

  return (
    <div id='about-me' className='aboutMe-menu'>
      <h1 className={`title-aboutMe ${current_theme}`}>Sobre mim</h1>
      <div className="aboutMe-menu-text">
        <div className="aboutMe-left">
          <img 
            src={brain} 
            alt="Ilustração de cérebro representando desenvolvimento e criatividade" 
            loading="lazy"
          />
        </div>
        <div className='aboutMe-right'>
          <p>
            Olá! Sou Hugo Lima, <strong>Desenvolvedor Full Stack</strong> com paixão por criar soluções digitais completas e eficientes.
            <br/><br/>
            Minha expertise abrange tanto o front-end quanto o back-end, permitindo-me construir aplicações web robustas desde a interface do usuário até a lógica de negócios e integração de banco de dados.
            <br/><br/>
            Atualmente cursando Análise e Desenvolvimento de Sistemas, mantenho-me constantemente atualizado com as últimas tecnologias e melhores práticas de desenvolvimento. Este portfólio apresenta meus projetos mais relevantes, demonstrando minha capacidade de resolver problemas complexos e entregar produtos de alta qualidade.
            <br/><br/>
            Estou sempre aberto a novos desafios e oportunidades para colaborar em projetos inovadores!
          </p>
        </div>
      </div>
      
      {/* Botão de scroll melhorado com melhor acessibilidade */}
      <button
        className={showButton ? "showButton" : "hidden"}
        onClick={scrollToTop}
        onKeyDown={handleKeyDown}
        aria-label="Voltar ao topo da página"
        title="Voltar ao topo"
        type="button"
      >
        <FaArrowUp aria-hidden="true" />
      </button>
    </div>
  );
}