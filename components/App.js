import React from 'react'
import Layout from './Layout'
import Blogroll from './Blogroll'
import Drawer from './80sBaby/Drawer'
import FeaturedImage from './80sBaby/FeatureImage'
import FeatureRow from './80sBaby/FeatureRow'
import ToggleDrawer from './ToggleDrawer'

const App = props =>
  <Layout>
    <FeatureRow features={ props.features }/>
    <Blogroll posts={ props.posts } />
    <Drawer />
    <ToggleDrawer />
  </Layout>

export default App
