import React from 'react'

const NotchHeaderContainer = ({ children }) =>
  <header>
    { children }
    <style jsx>{`
      header {
        position: absolute;
        width: 100%;
      }
    `}</style>
  </header>

export default NotchHeaderContainer
