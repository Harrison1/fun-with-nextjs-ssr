import React from 'react'

const Button = props =>
  <button
    aria-lable={props.ariaLabel}
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
        padding: 20px 10px;
      }
      button:active, 
      button:focus, 
      button:visited {
        border: 2px dashed purple;
        outline: none;
      }
    `}</style>
  </button>

export default Button
