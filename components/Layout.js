import React from 'react'
import GlobalContainer from './GlobalContainer'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => 
  <GlobalContainer>
    <Header />
      { children }
    <Footer />
  </GlobalContainer>

export default Layout
