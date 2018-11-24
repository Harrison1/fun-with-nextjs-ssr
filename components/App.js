import React from 'react'
import Layout from './Layout'
import Blogroll from './Blogroll'

const App = props =>
  <Layout>
    <Blogroll posts={ props.data } />
  </Layout>

export default App
