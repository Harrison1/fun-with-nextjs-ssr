import React from 'react'

const MenuButton = ({ onClick }) => 
  <button
    aria-label='Toggle Menu'
    name='Toggle Menu'
    onClick={onClick}
    type='button'>
    <div className="outer-circle"><div className="inner-circle"></div></div>
    <style jsx>{`
      button {
        background: #fff;
        border: none;
        border-radius: 50%;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
        cursor: pointer;
        padding: 5px;
      }
      .outer-circle {
        align-items: center;
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        border: none;
        border-radius: 50%;
        display: flex;
        height: 34px;
        justify-content: center;
        width: 34px;
        animation: gradient 15s ease infinite;
      }
      .inner-circle {
        background: #fff;
        border-radius: 50%;
        height: 24px;
        width: 24px;
      }
      @keyframes gradient {
        0% {
          background-position: 0% 50%
        }
        50% {
          background-position: 100% 50%
        }
        100% {
          background-position: 0% 50%
        }
      }
    `}</style>
  </button>

export default MenuButton
