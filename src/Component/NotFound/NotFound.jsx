import React from 'react'
import style from './NotFound.module.css'
import search from '../../Assets/images/Search.png'

export default function NotFound() {
  return <>
  <div className={`${style.height} d-flex flex-column justify-content-center align-items-center`}>
    <div className={`${style.border} d-flex justify-content-center align-items-center`} >
    <img src={search} alt="search" className='w-100 p-2'/>
    </div>
    <p className='fw-semibold fs-3 pt-5'>Unfortunately we couldn't find <br />what you are looking for..</p>
  </div>
  </>
}
