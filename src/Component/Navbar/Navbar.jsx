import React, { useEffect, useState } from 'react'
import logo from '../../Assets/images/1x/Artboard 1 copy 2.png'
import back from '../../Assets/images/icons/PNG/Back_2.png'
import clock from '../../Assets/images/icons/PNG/Clock.png'
import search from '../../Assets/images/Search.png'
import style from './Navbar.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
     const location = useLocation();
     const [activeLink, setActiveLink] = useState('');

     useEffect(() => {
          const currentPath = location.pathname;
          // console.log(currentPath);
          setActiveLink(currentPath);
        }, [location]);
     
  return <>
     {/* <div className='behindtop'></div> */}
    {/* <nav className="top fixed-top bg-white border border-bottom border-1 border-light-subtle d-none">
          <div className="container-fluid d-flex justify-content-between px-5 align-items-center fs-5">
               <div className="top-left d-flex ps-md-3 align-items-center">
               <div className="cursor-pointer d-flex align-items-center pt-2 pb-2">
                    <img src={back} alt="back" />          
                    <span className="ps-3 pe-3 color-green fs-4">Back</span>
               </div>
               <div className="d-flex flex-column pt-2 pb-2">
                    <h3 className="m-0">Introduction to Genetic Algorithm</h3>
                    <p className="fs-6 text-secondary">Quiz • 15 min</p>
               </div>
               </div>
               <div className="top-right d-flex ps-md-3 align-items-center pt-2 pb-2 time">
                    <img src={clock} alt="clock"/>            
                    <p className="ps-2">
                         Due Dec 10, 11:59<br/>
                         PM PST 
                    </p>
               </div>
          </div>
     </nav> */}

     <nav className="navbar navbar-expand-lg h-auto fixed-top bg-white border border-bottom border-1 border-light-subtle drop-shadow top">
  <div className="container d-flex justify-content-evenly align-items-center h-100">
  <Link className='d-flex align-items-center text-black text-decoration-none' to={'/'}>
                    <img src={logo} className={`${style.wLogo}`} alt="" />
                    <h1 className='fs-4 fw-bolder m-0 ps-1'>Skillify</h1>
               </Link>
               <div className='w-35 position-relative d-flex align-items-center'>
                    <input type="search" placeholder="What you're looking for ?" className={`form-control bgGray ps-3 rounded-5 w-100 ${style.fontSm}`} />
                    <img src={search} alt="search" className={`${style.wSearch} position-absolute cursor-pointer`} />
               </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 fw-bold fs-6 text-center">
        <li className="nav-item">
          <Link className={`nav-link ${activeLink === '/' ? 'active' : ''}`} aria-current="page" to={'/'}>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink === '/quiz' ? 'active' : ''}`} to={'/courses'}>Courses</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink === '/about' ? 'active' : ''}`} to={'/about'}>About</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink === '/contact' ? 'active' : ''}`} to={'/contact'}>Contact</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${activeLink === '/login' ? 'active' : ''}`} to={'/login'}>Log in</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link main-bgColor rounded-3 px-3 ms-2 text-black text-center`} to={'/signup'}>Sign Up</Link>
        </li>
        </ul>
    </div>
  </div>
</nav>
  </>
}
