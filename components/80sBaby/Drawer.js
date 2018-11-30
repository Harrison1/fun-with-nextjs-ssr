import React, { Component } from 'react'
import Portal from './Portal'

class Drawer extends Component {
  render() {
    return (
      this.props.open
      ? <Portal>
          <div className={this.props.slide ? 'drawer-open' : null}>
            <h3>Hello Galaxy</h3>
            <ul>
              <li>Home</li>
              <li>Posts</li>
              <li>Category</li>
            </ul>
            <style jsx>{`
              div {
                background: #ffffff;
                box-shadow: -2px 0px 5px 0px rgba(0, 0, 0, 0.5);
                height: 100%;
                position: fixed;
                right: 0;
                top: 0;
                width: 250px;
                z-index: 100;
                -webkit-transform: translateX(105%);
                transform: translateX(105%);
                will-change: transform;
                transition: transform 300ms ease-in-out;
                animation-name: slide-in;
                animation-duration: 300ms;
              }
              div.drawer-open {
                -webkit-transform: none;
                transform: none
              }
              h3 {
                font-size: 52px;
              }
              @-webkit-keyframes slide-in {
                  from {-webkit-transform: translateX(105%);}
                  to {-webkit-transform: translateX(0%);}
              }
              @keyframes slide-in {
                  from {transform: translateX(105%);}
                  to {transform: translateX(0%);}
              }
            `}</style>
          </div>
        </Portal>
      : null
    )
  }
}

export default Drawer
