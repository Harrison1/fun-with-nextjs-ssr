import React from 'react'
import Layout from './Layout'
import Blogroll from './Blogroll'
import Drawer from './80sBaby/Drawer'
import FeaturedImage from './80sBaby/FeatureImage'
import ToggleDrawer from './ToggleDrawer'

const App = props =>
  <Layout>
    <FeaturedImage />
    <Blogroll posts={ props.data } />
    <Drawer />
    <ToggleDrawer />
  </Layout>

export default App
