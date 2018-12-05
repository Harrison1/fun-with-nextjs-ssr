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
        border: 4px solid rebeccapurple;
        border-radius: 50%;
        display: flex;
        height: 34px;
        justify-content: center;
        width: 34px;
      }
      .inner-circle {
        background: rebeccapurple;
        border-radius: 50%;
        height: 8px;
        width: 8px;
      }
    `}</style>
  </button>

export default MenuButton
