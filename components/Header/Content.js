import React from 'react'
import Link from 'next/link'
import List from './List'
import Logo from '../assets/Logo'
import NotchLogo from '../80sBaby/NotchLogo'
import NotchList from '../80sBaby/NotchList'

const Content = ({ children }) =>
  <div>
    <Link href={`/`}>
      <a>
        <NotchLogo />
      </a>
    </Link>
    <NotchList />
    <style jsx>{`
      div {
        // align-items: center;
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
