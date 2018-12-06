import React from 'react'

const FeaturedImage = ({ alt, src }) =>
  <div>
    <img src={ src } alt={ alt } />
    <style jsx>{`
      img {
        display: block;
        height: 100%;
        margin: auto;
        width: 100%;
      }  
    `}</style>
  </div>

export default FeaturedImage
