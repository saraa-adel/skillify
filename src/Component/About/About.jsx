import React, { useEffect } from 'react'
import style from './About.module.css'
import sharing from '../../Assets/images/icons/PNG/Sharing.png'
import aboutImg from '../../Assets/images/pexels-andrea-piacquadio-864994 1.png'


export default function About() {
  useEffect(() => {
    document.title = "About"
},[]);
  return <>
  <div className="container">
  <div className="container p-5 text-black">
    <div className="px-5">
    <div className='d-flex align-items-center justify-content-between fw-bold border-bottom border-secondary border-1 pb-5 mb-5'>
    <div>
    <h4 className={`${style.fontLarge} fw-bold`}>WHO <span className='text-main'>WE</span> ARE</h4>
    <p className='fw-bold w-75'>Welcome to <span className='text-main'>SKILLIFY </span>! <br /> 
We are a dedicated team of educators and technologists committed to transforming the way learning happens. Founded in 2024, we have been at the forefront of educational innovation, providing comprehensive, engaging, and accessible learning solutions.</p>
    </div>
    <div className='w-50 ms-auto text-center'>
      <img className='w-100' src={sharing} alt="pen" />
    </div>
    </div>
    <div>
      <div className='rounded-5e'>
        <img src={aboutImg} alt="image" />
      </div>
    </div>
    </div>
  </div>
  </div>
  </>
}
