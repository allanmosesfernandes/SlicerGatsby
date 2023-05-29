import React from 'react'
import GlobalStyles from '../styles/GlobalStyles'
import Typography from '../styles/Typography'
import Footer from './Footer'
import Navbar from "./Navbar"
import { NavbarStyled } from './NavbarStyles'
const Layout = ({ children }) => {
  return (
    <>  
        <GlobalStyles />
        <Typography />
        <Navbar />
         { children }
        <Footer />
    </>
   
  )
}

export default Layout