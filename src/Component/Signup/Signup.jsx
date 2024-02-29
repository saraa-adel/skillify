import React, { useEffect } from 'react'
import style from './Signup.module.css'
import logo from '../../Assets/images/1x/Artboard 1 copy 2.png'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'


export default function Signup() {
  
  useEffect(() => {
    document.title = "Sign Up"
},[]);

let validationSchema = yup.object({
  name: yup.string().required('Name is required').min(3,'Name must at least 3 letters'),
  email: yup.string().required('Email is required').email('invalid email'),
  password: yup.string().required('Password is required').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*?])[(A-Za-z)\d!@#$%^&*?]{8,}$/, 'Password must at least 8 characters, combination of letters, numbers and symbols'),
  rePassword: yup.string().required('RePassword is required').oneOf([yup.ref('password')],'password and repassword do not match'),
})
let formik = useFormik({
  initialValues:{
    name:'',
    email:'',
    password:'',
    rePassword:'',
  },validationSchema
})

  return <>
  <div className={`${style.signup} h-130 d-flex align-items-center pt-4 pb-5`}>
    <div className='w-65 mx-auto bg-white pb-5 pt-4 rounded-5'>
      <div className='d-flex flex-column justify-content-center align-items-center border-bottom border-2 border-black pb-2'>
        <div className='w-25 mx-auto text-center'>
          <img className='w-25 mx-auto' src={logo} alt="logo" />
        </div>
        <h1 className='fs-5 fw-bolder'>Skillify</h1>
        <h4 className='fs-3 fw-bold text-main'>Sign Up</h4>
        <h4 className='fs-4 fw-medium'>Already have an account <Link className='text-black fw-bold' to={'/login'}>Log in</Link></h4>

      </div>
      <form onSubmit={formik.handleSubmit}>
      <div className="row p-5 pt-3">
        <div className="col-12">
        <div className='pb-4'>
      <label className='CGray ps-4 pb-1 fw-medium fs-5 ms-0' htmlFor="name">Username </label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="text" id='name' name="name" className={`form-control ${style.bgInput} ps-3 ${style.paddingInput} ${style.roundedInput} border-0`} />
      {formik.errors.name && formik.touched.name?<div className="alert alert-danger py-2 rounded-4 mt-2 mb-0">{formik.errors.name}</div>: ''}

        </div>
        </div>
        <div className="col-12">
        <div className='pb-4'>
      <label className='CGray ps-4 pb-1 fw-medium fs-5 ms-0' htmlFor="email">Your Email </label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="email" id='email' name="email" className={`form-control ${style.bgInput} ps-3 ${style.paddingInput} ${style.roundedInput} border-0`} />
      {formik.errors.email && formik.touched.email?<div className="alert alert-danger py-2 rounded-4 mt-2 mb-0">{formik.errors.email}</div>: ''}
        </div>
        </div>
        <div className="col-12">
        <div className='pb-4'>
      <label className='CGray ps-4 pb-1 fw-medium fs-5 ms-0' htmlFor="password">Your Password </label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='password' name="password" className={`form-control ${style.bgInput} ps-3 ${style.paddingInput} ${style.roundedInput} border-0`} />
      {formik.errors.password && formik.touched.password?<div className="alert alert-danger py-2 rounded-4 mt-2 mb-0">{formik.errors.password}</div>: ''}        </div>
        </div>
        <div className="col-12">
        <div className='pb-4'>
      <label className='CGray ps-4 pb-1 fw-medium fs-5 ms-0' htmlFor="rePassword">Confirm Password </label>
      <input onBlur={formik.handleBlur} onChange={formik.handleChange} type="password" id='rePassword' name="rePassword" className={`form-control ${style.bgInput} ps-3 ${style.paddingInput} ${style.roundedInput} border-0`} />
      {formik.errors.rePassword && formik.touched.rePassword?<div className="alert alert-danger py-2 rounded-4 mt-2 mb-0">{formik.errors.rePassword}</div>: ''}
       </div>
        </div>
        <button className={`btn btn-success border-0 btn1 text-white fw-bold fs-4 w-65 mx-auto py-3 rounded-4 mt-4 shadow`}>Sign Up</button>
      </div>
      </form>
    </div>
  </div>
  </>
}
