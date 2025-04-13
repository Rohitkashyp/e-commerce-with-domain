import React from 'react'
import { Outlet } from 'react-router-dom'
import Login_Signup_Footer from './components/Login_Signup_Footer' 

function MinFooterLayout() {
  return (
  <>
    <Outlet/>
    <Login_Signup_Footer/>
  </>
  )
}

export default MinFooterLayout
