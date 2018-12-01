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
    <div></div>
    { props.text }
    <style jsx>{`
      button {
        background: none;
        border: none;
      }
      button {
        border: 2px solid purple;
        border-radius: 10px;
        cursor: pointer;
        outline: none;
        padding: 20px 20px;
      }
      button:hover {
        background: linear-gradient(-45deg, #EE7752, #E73C7E, #23A6D5, #23D5AB);
        background-size: 400% 400%;
        color: #ffffff;
        animation: gradient 15s ease infinite;
      }
      button:active, 
      button:focus, 
      button:visited {
        border: 2px dashed purple;
        outline: none;
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
