import React from 'react'
import Navbar from '../Navbar/Navbar.jsx'
import Footer from '../Footer/Footer.jsx'
import style from './Layout.module.css'
import { Outlet } from 'react-router-dom'

export default function Layout(){

  return <>
  <div className='p-0 m-0 lato'>
  <Navbar/>
  <Outlet></Outlet>
  <Footer/>
  </div>
  </>
}
