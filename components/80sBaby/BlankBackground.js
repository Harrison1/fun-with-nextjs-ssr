import React from 'react'

const BlankBackground = ({ onClick, show }) =>
  show
  ? <div onClick={ onClick }>
      <style jsx>{`
        div {
          background: rgba(0, 0, 0, 0.3);
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

// import React, { Component } from 'react'

// class BlankBackground extends Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       display: true
//     }
//   }



//   render() {
//     return (
//       this.state.display
//       ? <div className={this.props.show ? 'show' : null} onClick={ this.props.onClick }>
//           <style jsx>{`
//             div {
//               background: rgba(0, 0, 0, 0);
//               height: 100%;
//               left: 0;
//               position: fixed;
//               top: 0;
//               width: 100%;
//               transistion
//             }
//             .show {
//               background: rgba(0, 0, 0, 0.3);
//             }
//           `}</style>
//         </div>
//       : null
//     )
//   }
// }

// export default BlankBackground
