import React from 'react';
import './Apresentation.css';
import king from '../../assets/img/king.png';
import translations from '../../translations';

const Apresentation = ({ language }) => {
  return (
    <div id='home' className="apresentation-menu">
        <div className='apresentation-left'>
            <div className='apresentation-left-text'>
                <p>{translations[language].home.title}</p>
                <button className='buttonApresentation'>
                    <p>{translations[language].home.subtitle}</p>
                </button>
            </div>
        </div>

        <div className='apresentation-right'>
            <img src={king} alt="Illustration" />
        </div>
    </div>
  );
};

export default Apresentation;