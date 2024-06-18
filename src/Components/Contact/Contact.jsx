import React from 'react'
import './Contact.css'

export default function Contact() {
  const current_theme = localStorage.getItem('current_theme');

  return (
    <div id='contact' className='contact-menu'>
      <h1>Contato</h1>
      <form className={`contact-form ${current_theme}`}>
        <label htmlFor="nome">Nome</label>
        <input type="text" id="nome" name="nome" placeholder="Seu nome" required/>

        <label htmlFor="email">E-mail</label>
        <input type="email" id="email" name="email" placeholder="Seu e-mail" required />

        <label htmlFor="assunto">Assunto</label><br/>
        <textarea name="assunto" id="assunto" cols="60" rows="10" placeholder="Assunto da mensagem" required></textarea><br/>

        <button type='submit'>Enviar</button>
      </form>
    </div>
  )
}
