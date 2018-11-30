import React from 'react'
import Layout from './Layout'
import Blogroll from './Blogroll'
import Drawer from './80sBaby/Drawer'
import ToggleDrawer from './ToggleDrawer'

const App = props =>
  <Layout>
    <Blogroll posts={ props.data } />
    <Drawer />
    <ToggleDrawer />
  </Layout>

export default App
