import React from 'react'
import './Apresentation.css';
import king from '../../assets/img/king.png';

const Apresentation = () => {
  return (
    <div id='home' className="apresentation-menu">
        <div className='apresentation-left'>
            <div className='apresentation-left-text'>

                <p>
                    Hugo Lima</p>
                <button className='buttonApresentation'>
                    <p>Mobile Developer</p>
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

