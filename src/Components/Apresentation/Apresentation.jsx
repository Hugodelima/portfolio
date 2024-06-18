import React from 'react'
import './Apresentation.css';
import king from '../../assets/img/king.png';

const Apresentation = () => {
  return (
    <div id='home' className="apresentation-menu">
        <div className='apresentation-left'>
            <div className='apresentation-left-text'>

                <p>
                    Olá, eu sou Hugo Rodrigues
                </p>
                <button className='buttonApresentation'>
                    <p>Desenvolver Front-End</p>
                </button>
            </div>
        </div>

        <div className='apresentation-right'>
            <img src={king}  />
        </div>
      
    </div>
  )
}

export default Apresentation

/*rfc*/