import React from 'react'
import Navber from './layouts/Navber'
import Footer from './layouts/Footer'
import { Outlet } from 'react-router-dom'
import Connect from './layouts/Connect'
import ConnectFooter from './layouts/ConnectFooter'

const RootLayOut = () => {
  return (
    <>
        <Connect/>
        <Navber/>
        <Outlet/>
        <ConnectFooter/>
        <Footer/>
    </>
  )
}

export default RootLayOut