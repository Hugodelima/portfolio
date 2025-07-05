import React from 'react'
import './Footer.css'
import logoLinkedin from '../../assets/img/linkedin_icon.png'
import logoGitHub from '../../assets/img/git_icon_icon.png'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='waves'>
        <div className="wave" id='wave1'></div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>
      <div className='icon-footer'>
        <a href="https://github.com/Hugodelima/Cold-Mart" target="_blank">
          <i class="bi bi-linkedin"></i>
        </a>
        <a href="https://github.com/Hugodelima" target="_blank">
          <i class="bi bi-github"></i>
        </a>
      </div>
      
      <p>Copyright ©2024;  Feito por Hugo</p>
    </div>
  )
}