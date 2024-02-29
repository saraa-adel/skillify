import React, { useEffect } from 'react'
import style from './Login.module.css'
import logo from '../../Assets/images/1x/Artboard 1 copy 2.png'
import { Link } from 'react-router-dom';

export default function Login() {
  useEffect(() => {
    document.title = "Log In"
},[]);

  return <>
   <div className={`${style.signup} h-130 d-flex align-items-center pt-4 pb-5`}>
    <div className='w-65 mx-auto bg-white pb-5 pt-4 rounded-5'>
      <div className='d-flex flex-column justify-content-center align-items-center border-bottom border-2 border-black pb-2'>
        <div className='w-25 mx-auto text-center'>
          <img className='w-25 mx-auto' src={logo} alt="logo" />
        </div>
        <h1 className='fs-5 fw-bolder'>Skillify</h1>
        <h4 className='fs-3 fw-bold text-main'>Log In</h4>
        <h4 className='fs-4 fw-medium'>Don’t have account? <Link className='text-black fw-bold' to={'/signup'}>Sign Up</Link></h4>

      </div>
      <div className="row p-5 pt-3">
        <div className="col-12">
        <div className='pb-4'>
      <label className='CGray ps-4 pb-1 fw-medium fs-5 ms-0' htmlFor="email">Your Email </label>
      <input type="email" id='email' name="email" className={`form-control ${style.bgInput} ps-3 ${style.paddingInput} ${style.roundedInput} border-0`} />
        </div>
        </div>
        <div className="col-12">
        <div className='pb-4'>
      <label className='CGray ps-4 pb-1 fw-medium fs-5 ms-0' htmlFor="password">Your Password </label>
      <input type="password" id='password' name="password" className={`form-control ${style.bgInput} ps-3 ${style.paddingInput} ${style.roundedInput} border-0`} />
        </div>
        </div>
        <button className={`btn btn-success border-0 btn1 text-white fw-bold fs-4 w-65 mx-auto py-3 rounded-4 mt-4 shadow`}>Log in</button>
      </div>
    </div>
  </div>
  </>
}
