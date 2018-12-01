import React from 'react'
import Portal from './Portal'

const Modal = ({ open }) =>
  open
  ? <Portal>
      <div>
        <h2>Galax</h2>
      </div>
    </Portal>
  : null

export default Modal
