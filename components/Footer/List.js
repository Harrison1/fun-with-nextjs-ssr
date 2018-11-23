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

const List = () =>
  <ul>
    {items.map(i => <li key={i.id}><Link href={ i.path }><a>{ i.name }</a></Link></li>)}
    <style jsx>{`
      a {
        color: #fff;
        font-weight: 500;
      }
      a:hover {
        color: #f5f5f5;
      }
      ul {
        display: flex;
        list-style-type: none;
        margin: 0;
        padding: 0;
      }
      li {
        margin-right: 15px;
      }
      li:last-child {
        margin-right: 0px;
      }
    `}</style>
  </ul>

export default List
