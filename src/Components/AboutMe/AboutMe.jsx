import React, { useEffect, useState } from 'react';
import './AboutMe.css';
import brain from '../../assets/img/cerebro.png';
import { FaArrowUp } from "react-icons/fa";

export default function AboutMe() {

  const [showButton, setShowButton] = useState(false);
  const onScroll = () =>{
    window.scrollY > 500 ? setShowButton(true) : setShowButton(false);
  }

  useEffect(() =>{
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });
  const scrollToTop = () =>{
    window.scrollTo(0,0);
  }

  return (
    <div  id='about-me' className='aboutMe-menu'>
      <h1 className='title-aboutMe'>Sobre mim</h1>
      <div className="aboutMe-menu-text">
        <div className="aboutMe-left">
          <img src={brain}/>
        </div>
        <div className='aboutMe-right'>
          <p>
          Bem vindo ao meu portófolio! Meu nome é hugo e estou sempre pensando no meu desenvolvimento e me esforçando para aprimorar minhas habilidades e conhecimentos voltado para área do front-end.
          <br/>
          <br/>
          Neste portófolio irei estar apresentando meus principais projetos que desenvolvi ao longo da faculdade, onde estou cursando análise e desenvolvimento de sistemas, na qual me desafiei a estar criando este site com react embora nunca tenha utilizando, enfim espero que goste!
          </p>
        </div>
      </div>
      <FaArrowUp className={showButton ? "showButton" : "hidden"} onClick={scrollToTop}></FaArrowUp>
    </div>
  )
}

