import React from 'react'
import Link from 'next/link'

const items = [
  {
    id: '1',
    name: 'Pages',
    path: '/pages'
  },
  {
    id: '2',
    name: 'Posts',
    path: '/posts'
  },
  {
    id: '3',
    name: 'About',
    path: '/about'
  },
  {
    id: '4',
    name: 'Contact',
    path: '/contact'
  }
]

const NotchList = () =>
  <ul>
    {items.map(i => <li key={i.id}><Link href={ i.path }><a>{ i.name }</a></Link></li>)}
    <style jsx>{`
      a {
        color: #03a9f4;
        font-weight: 500;
      }
      a:hover {
        color: #2196f3;
      }
      ul {
        align-items: center;
        background: #fff;
        border-radius: 0 0 10px 10px;
        box-shadow: 0 2px 2px 2px rgba(0, 0, 0, 0.3);
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 5px 10px;
      }
      li {
        margin-right: 15px;
      }
      li:last-child {
        margin-right: 0px;
      }
    `}</style>
  </ul>

export default NotchList
    