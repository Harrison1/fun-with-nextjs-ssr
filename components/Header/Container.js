import React from 'react'

const Container = ({ children }) =>
  <header>
    { children }
    <style jsx>{`
      header {
        background-color: #ffffff;
        border-bottom: 3px solid #03a9f4;
        width: 100%;
      }
    `}</style>
  </header>

export default Container
