import React from 'react'
import GlobalContainer from './GlobalContainer'
import BlurryDiv from './80sBaby/BlurryDiv'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children }) => 
  <GlobalContainer>
    <BlurryDiv>
      <Header />
      { children }
      <Footer />
    </BlurryDiv>
  </GlobalContainer>

export default Layout
