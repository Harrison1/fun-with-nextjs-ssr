import React from 'react'
import Logo from '../assets/Logo'

const NotchLogo = () =>
  <div>
    <Logo />
    <style jsx>{`
      div {
        background: #fff;
        border: 4px solid #222;
        border-radius: 0 0 10px 10px;
        border-top: none;
        // box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 2px 50px; 
      }
    `}</style>
  </div>

export default NotchLogo
