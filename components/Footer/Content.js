import React from 'react'
import List from './List'
import LogoWhite from '../assets/LogoWhite'

const Content = ({ children }) =>
  <div>
    <LogoWhite />
    <List />
    <style jsx>{`
      div {
        align-items: center;
        display: flex;
        justify-content: space-between;
        margin: auto;
        max-width: 1200px;
        padding: 0 20px;
        width: 100%;
      }
      @media (min-width: 1200px) {
        div {
          padding: 0;
        }
      }
    `}</style>
  </div>

export default Content
