import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class Portal extends React.Component {
  constructor(props) {
    super(props);
    this.el = document.createElement('div');
  }

  componentDidMount() {
    const body = document.body
    body.appendChild(this.el);
  }

  componentWillUnmount() {
    const body = document.body
    body.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      this.props.children,
      this.el,
    );
  }
}

export default Portal
