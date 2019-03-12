import React from 'react'

const BlankBackground = ({ onClick, show }) =>
  show
  ? <div onClick={ onClick }>
      <style jsx>{`
        div {
          background: rgba(0, 0, 0, 0.8);
          height: 100%;
          left: 0;
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 80;
        }
      `}</style>
    </div>
  : null

export default BlankBackground
