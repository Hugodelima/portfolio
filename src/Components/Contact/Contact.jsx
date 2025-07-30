import React, { useRef, useState } from 'react';
import './Contact.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';
import { FaPaperPlane } from 'react-icons/fa';
import translations from '../../translations';

export default function Contact({ language, theme }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const form = useRef();

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
    toast.success(translations[language].contact.success, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
    });
  };

  const notifyError = () => {
    toast.error(translations[language].contact.error, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: theme,
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
    <div id='contact' className={`contact-section ${theme}`}>
      <div className="contact-container">
        <h1 className={`contact-title ${theme}`}>{translations[language].contact.title}</h1>
        <p className={`contact-subtitle ${theme}`}>{translations[language].contact.subtitle}</p>
        
        <form ref={form} className={`contact-form ${theme}`} onSubmit={validateForm}>
          <div className="form-group">
            <label htmlFor="nome">{translations[language].contact.form.name}</label>
            <input 
              type="text" 
              id="nome" 
              name="user_name" 
              placeholder={translations[language].contact.form.name} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">{translations[language].contact.form.email}</label>
            <input 
              type="email" 
              id="email" 
              name="user_email" 
              placeholder={translations[language].contact.form.email} 
              required 
            />
          </div>

          <div className="form-group">
            <label htmlFor="assunto">{translations[language].contact.form.message}</label>
            <textarea 
              name="message" 
              id="assunto" 
              placeholder={translations[language].contact.form.message} 
              required
            ></textarea>
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? (
              translations[language].contact.form.sending
            ) : (
              <>
                {translations[language].contact.form.submit} <FaPaperPlane className="send-icon" />
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
        theme={theme}
      />
    </div>
  );
}