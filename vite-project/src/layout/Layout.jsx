import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../component/NavBar'
import Footer from '../component/Footer'
import ScrollToTop from '../component/ScrollToTop'


export default function Layout() {

  return (
    <>
         <ScrollToTop/>
          <NavBar />
          <Outlet />
          <Footer/>
    </>
  )
}
