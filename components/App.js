import React from 'react'
import Layout from './Layout'
import Blogroll from './Blogroll'
import Drawer from './80sBaby/Drawer'
import FeaturedImage from './80sBaby/FeatureImage'
import FeatureRow from './80sBaby/FeatureRow'
import ToggleDrawer from './ToggleDrawer'
import Person from './assets/Person'
import DarthVader from './assets/DarthVader'
import Book from './assets/Book'
import BobaFett from './assets/BobaFett'
import DeathStar from './assets/DeathStar'

const App = props =>
  <Layout>
    <FeatureRow features={ props.features }/>
    <Blogroll posts={ props.posts } />
    <Drawer />
    <ToggleDrawer />
    <Person />
    <DarthVader />
    <Book />
    <BobaFett />
    <DeathStar />
  </Layout>

export default App
