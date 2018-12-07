import React from 'react'

const NotchHeaderContainer = ({ children }) =>
  <header>
    { children }
    <style jsx>{`
      header {
        position: fixed;
        width: 100%;
        z-index: 50;
      }
    `}</style>
  </header>

export default NotchHeaderContainer
