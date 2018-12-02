import React from 'react'

const Button = props =>
  <button
    aria-label={props.ariaLabel}
    autoFocus={props.autoFocus}
    disabled={props.disabled}
    name={props.name}
    onClick={props.onClick}
    type={props.type}
    value={props.value}>
    <div>
      { props.text }
    </div>
    <style jsx>{`
      button {
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        border: none;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        padding: 2px;
        background-size: 400% 400%;
      }
      button:hover {0%;
        animation: gradient 15s ease infinite;
      }
      button:active, 
      button:focus, 
      button:visited {
        border: 2px dashed purple;
        outline: none;
      }
      div {
        background: #fff;
        border-radius: 10px;
        padding: 10px 20px;
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

export default Button
