import React, { Component } from 'react'
import MenuButton from './MenuButton'
import Drawer from './Drawer'

class ToggleDrawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false,
      slide: false
    }

    this.toggleMenu = this.toggleMenu.bind(this)
  }

  toggleMenu() {
    this.setState(state => ({
      open: true,
      slide: !state.slide
    }));
  }

  render() {
    return (
      <>
        <MenuButton onClick={this.toggleMenu} />
        <Drawer onClick={ this.toggleMenu } open={ this.state.open } slide={ this.state.slide } />
      </>
    )
  }
}

export default ToggleDrawer
