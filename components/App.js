import React from 'react'
import Header from './Header'
import Blogroll from './Blogroll'
import Footer from './Footer'

const App = props =>
  <>
    <Header />
    <Blogroll posts={ props.data } />
    <Footer />
  </>

export default App
