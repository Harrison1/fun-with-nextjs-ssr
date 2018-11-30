import React, { Component } from 'react'
import Button from './80sBaby/Button'
import Drawer from './80sBaby/Drawer'
import Portal from './80sBaby/Portal'

class ToggleDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    this.setState(state => ({
      open: !state.open
    }));
  }

  render() {
    return (
      <>
        <Button
          ariaLabel='Toggle Drawer'
          onClick={this.toggleDrawer}
          name='Toggle Drawer'
          text='Menu'
          type='button'
        />
        <Drawer open={ this.state.open } />
      </>
    )
  }
}

export default ToggleDrawer
