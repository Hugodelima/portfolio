import React, { useRef } from 'react'
import './Contact.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import emailjs from '@emailjs/browser';



export default function Contact() {
  const current_theme = localStorage.getItem('current_theme');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r9iq8t5', 'template_8gi1j1h', form.current, {
        publicKey: 'Gea9-QUEvinfMJ8RD',
      })  
      .then(
        () => {
          notifySucess();
          e.re
        },
        () => {
          notifyErro();
        },
      );
  };

  const notifySucess = () => {
    toast.success('Foi enviado com sucesso', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
    
  };
  const notifyErro = () =>{
    toast.error('Preencha os dados corretamente', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      });
  }
  const validateForm = (event) =>{
    event.preventDefault()
    const formValidation = document.querySelector('.contact-form')
    if (formValidation.checkValidity()){
      sendEmail(event);
      formValidation.reset()
    }else{
      notifyErro()
    }

  }
  return (
    <div id='contact' className='contact-menu'>
      <h1>Contato</h1>
      <ToastContainer 
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <form ref={form} className={`contact-form ${current_theme}`}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="user_name" placeholder="Seu nome" required/>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="user_email" placeholder="Seu e-mail" required />

        <label htmlFor="assunto">Assunto</label><br/>
        <textarea name="message" id="assunto" cols="60" rows="10" placeholder="Assunto da mensagem" required></textarea><br/>

        <input type='submit' value="Enviar" className='submitForm' onClick={validateForm}></input>
        
      </form>
    </div>
  )
}
