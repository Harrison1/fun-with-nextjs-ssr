import React from 'react'
import Logo from '../assets/Logo'

const NotchLogo = () =>
  <div>
    <Logo />
    <style jsx>{`
      div {
        background: #fff;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
        padding: 5px 10px; 
      }
    `}</style>
  </div>

export default NotchLogo
