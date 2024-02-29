import React from 'react'
import Layout from './Component/Layout/Layout.jsx';
import Quiz from './Component/Quiz/Quiz.jsx'
import NotFound from './Component/NotFound/NotFound.jsx'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import Home from './Component/Home/Home.jsx';
import Courses from './Component/Courses/Courses.jsx';
import Contact from './Component/Contact/Contact.jsx';
import Login from './Component/Login/Login.jsx';
import Signup from './Component/Signup/Signup.jsx';
import About from './Component/About/About.jsx';



export default function App() {

  let routers = createBrowserRouter([
    {path : '', element : <Layout/>, children: [
      {index: true , element: <Home/>},
      {path: 'quiz' , element: <Quiz/>},
      {path: 'courses' , element: <Courses/>},
      {path: 'about' , element: <About/>},
      {path: 'contact' , element: <Contact/>},
      {path: 'login' , element: <Login/>},
      {path: 'signup' , element: <Signup/>},
      {path: '*', element: <NotFound/>}
    ]}
  ])

  return <>
  <RouterProvider router={routers}></RouterProvider>
  </>
}
