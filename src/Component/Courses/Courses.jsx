import React, { useEffect } from 'react'
import style from './Courses.module.css'

export default function Courses() {
  useEffect(() => {
    document.title = "Courses"
},[]);
  return <>
  <h3>hello Courses</h3>
  </>
}
