import React from 'react';
import './Footer.css';
import waveimg from '../../../assets/Home/shape-bg.png'
export default function Footer() {
  return (
    <div className='footer-container'>
        <div className='footer-parent'>
            <img src={waveimg} alt='no internet connection'/>
        </div>

    </div>
  )
}
