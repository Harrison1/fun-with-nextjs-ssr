import React from 'react'

const BlurryDiv = ({ children, blur }) =>
  <div>
    { children }
    <style jsx>{`
      div {
        filter: blur : hue-rotate(90deg) blur(10px) ? none;
      }
    `}</style>
  </div>

export default BlurryDiv 
