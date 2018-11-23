import React from 'react'

const Container = ({ children }) =>
  <footer>
    { children }
    <style jsx>{`
      footer {
        background-color: #333;
        width: 100%;
      }
    `}</style>
  </footer>

export default Container
