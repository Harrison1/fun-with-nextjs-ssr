import React from 'react'

const Image = ({ alt, src }) =>
  <>
    <img alt={ alt } src={ src } />
    <style jsx>{`
      img {
        border-radius: 1rem;
        width: 100%;
      }
    `}</style>
  </>

export default Image
