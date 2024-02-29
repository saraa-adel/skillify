import React, { useEffect } from 'react'
import style from './Contact.module.css'
import write from '../../Assets/images/icons/PNG/Write.png'
import forward from '../../Assets/images/icons/PNG/Forward_2.png'
import map from '../../Assets/images/800px-Cairo_map 1.png'
import { useFormik } from 'formik'
import * as yup from 'yup'

export default function Contact() {
  
  useEffect(() => {
    document.title = "Contact"
},[]);
  
  return <>
  <div className='container p-5'>
    <div className='d-flex align-items-center fw-bold border-bottom border-secondary border-1 pb-5'>
    <h4 className={`${style.fontLarge} fw-bold`}>LETS <span className='text-main'>STAY</span> IN TOUCH</h4>
    <div className='w-50 ms-auto text-center'>
      <img className='w-45' src={write} alt="pen" />
    </div>
    </div>
    <div className='py-5 d-flex justify-content-between align-items-start border-bottom border-secondary border-1'>
      <div className='d-flex flex-column justify-content-between align-items-start'>
      <div className='pb-3'>
        <span className={`${style.informColor} fs-5`}>Call Us</span>
        <p className='fw-bold fs-5'>01067855467</p>
        <p className='fw-bold fs-5'>01067855467</p>
      </div>
      <div className='pb-3'>
        <span className={`${style.informColor} fs-5`}>Address</span>
        <p className='fw-bold fs-5'>Modern Academy, Sakr Koreish <br />Maadi, Cairo, Egypt</p>
      </div>
      <div className='pb-3'>
        <span className={`${style.informColor} fs-5`}>Email Address</span>
        <p className='fw-bold fs-5'>official2024@skillify.com</p>
      </div>
      <div className='pb-3'>
        <span className={`${style.informColor} fs-5`}>Website</span>
        <p className='fw-bold fs-5'>www.skillify.com</p>
      </div>
      </div>
      <div className='d-flex align-items-start'>
      {/* <iframe   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55294.19652788958!2d31.354693878320294!3d29.98266920000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458388b7564400d%3A0xab2578ea95e6631f!2z2KfZhNij2YPYp9iv2YrZhdmK2Kkg2KfZhNit2K_Zitir2KkgKNmC2LPZhSDYudmE2YjZhSDYp9mE2K3Yp9iz2Kgp!5e0!3m2!1sar!2seg!4v1709146246207!5m2!1sar!2seg&hl=en"  width="600" height="250"></iframe>  */}
      <div>
        <img src={map} alt="" />
      </div>
      </div>
  </div>
  <div>
  <div className="row p-5 ps-0 pt-5 border-bottom border-secondary border-1 mb-4">
        <div className="col-4">
        <div className='pb-4'>
        <label className='CGray pb-1 fs-6 ms-0' htmlFor="name">What's your name</label>
      <input type="text" id='name' name="name" className={`form-control ${style.noshadow} border-0 border-bottom border-black w-75 rounded-0 ps-1`} />
        </div>
        </div>
        <div className="col-4">
        <div className='pb-4'>
        <label className='CGray pb-1 fs-6 ms-0' htmlFor="email">What's email address</label>
      <input type="email" id='email' name="email" className={`form-control ${style.noshadow} border-0 border-bottom border-black w-75 rounded-0 ps-1`} />
        </div>
        </div>
        <div className="col-4 text-center">
        <button className={`btn btn border border-black bg-transparent fw-medium fs-4 w-50 py-3 rounded-4 border-2`}>
          <div className=' d-flex justify-content-evenly fw-medium'>
          <img src={forward} className={`w-30p ${style.rotate}`} alt="editing" />
                <span>Send Now</span>
          </div>
        </button>
        </div>
      </div>
  </div>
  </div>
  </>
}
