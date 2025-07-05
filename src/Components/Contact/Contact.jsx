import React, { useRef, useState, useEffect } from 'react'
import './Contact.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';

export default function Contact() {
  const [currentTheme, setCurrentTheme] = useState(localStorage.getItem('current_theme') || 'dark');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

  // Observar mudanças no tema
  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentTheme(localStorage.getItem('current_theme') || 'dark');
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm('service_r9iq8t5', 'template_8gi1j1h', form.current, {
        publicKey: 'Gea9-QUEvinfMJ8RD',
      })  
      .then(
        () => {
          notifySuccess();
          form.current.reset();
        },
        () => {
          notifyError();
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const notifySuccess = () => {
    toast.success('Mensagem enviada com sucesso!', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: currentTheme,
    });
  };

  const notifyError = () => {
    toast.error('Por favor, preencha todos os campos corretamente', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: currentTheme,
    });
  };

  const validateForm = (event) => {
    event.preventDefault();
    if (form.current.checkValidity()) {
      sendEmail(event);
    } else {
      notifyError();
    }
  };

  return (
    <div id='contact' className={`contact-section ${currentTheme}`}>
      <div className="contact-container">
        <h1 className="contact-title">Contato</h1>
        <p className="contact-subtitle">Entre em contato para projetos ou oportunidades</p>
        
        <form ref={form} className={`contact-form ${currentTheme}`} onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="nome">Nome</label>
            <input 
              type="text" 
              id="nome" 
              name="user_name" 
              placeholder="Seu nome completo" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input 
              type="email" 
              id="email" 
              name="user_email" 
              placeholder="seu@email.com" 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">Mensagem</label>
            <textarea 
              name="message" 
              id="assunto" 
              placeholder="Descreva sua mensagem aqui..." 
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : (
              <>
                Enviar <FaPaperPlane className="send-icon" />
              </>
            )}
          </button>
        </form>
      </div>

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
        theme={currentTheme}
      />
    </div>
  )
}