import React, { Component } from 'react'
import Button from './80sBaby/Button'
import Drawer from './80sBaby/Drawer'

class ToggleDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      slide: false
    }

    this.toggleDrawer = this.toggleDrawer.bind(this)
  }

  toggleDrawer() {
    this.setState(state => ({
      open: true,
      slide: !state.slide
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
        <Drawer onClick={this.toggleDrawer} open={ this.state.open } slide={ this.state.slide } />
      </>
    )
  }
}

export default ToggleDrawer
