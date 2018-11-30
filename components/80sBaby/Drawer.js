import React, { Component } from 'react'
import Portal from './Portal'

class Drawer extends Component {
  render() {
    return (
      this.props.open
      ? <Portal>
          <div>
            <h3>Hello Galaxy</h3>
            <style jsx>{`
              h3 {
                font-size: 52px;
              }
            `}</style>
          </div>
        </Portal>
      : null
    )
  }
}

export default Drawer