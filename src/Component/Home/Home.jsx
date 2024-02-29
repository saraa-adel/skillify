import React, { useEffect, useRef, useState } from 'react';
import logo from '../../Assets/images/1x/Artboard 1 copy 2.png'
import user from '../../Assets/images/icons/Layer 2 (1).png'
import ai from '../../Assets/images/icons/icon (2).png'
import group from '../../Assets/images/icons/Group.png'
import image1 from '../../Assets/images/pexels-george-milton-6953871.png'
import image2 from '../../Assets/images/pexels-ali-arapoğlu-4432037.png'
import image3 from '../../Assets/images/pexels-google-deepmind-18069696.png'
import nw from '../../Assets/images/Mask group.png'
import ga from '../../Assets/images/pexels-google-deepmind-18069827 1.png'
import db from '../../Assets/images/pexels-kevin-ku-577585 1.png'
import style from './Home.module.css'
import { Link } from 'react-router-dom';

export default function Home({src}) {

  useEffect(() => {
    document.title = "Skillify"
},[]);

  const videoRefs = [useRef(null), useRef(null), useRef(null)];
  const layerRefs = [useRef(null), useRef(null), useRef(null)];
  const [isPlaying, setIsPlaying] = useState([false, false, false]);

  useEffect(() => {
    const playVideoOnClick = (index) => {
      setIsPlaying((prevIsPlaying) => {
        const updatedIsPlaying = [...prevIsPlaying];
        updatedIsPlaying[index] = !updatedIsPlaying[index];
        return updatedIsPlaying;
      });
    };

    layerRefs.forEach((layerRef, index) => {
      const layer = layerRef.current;

      if (!layer) return;

      const playOnClick = () => playVideoOnClick(index);
      layer.addEventListener('click', playOnClick);

      return () => {
        layer.removeEventListener('click', playOnClick);
      };
    });
  }, []);

  return <>
  <section>
  <div className={`${style.home} vh-88 d-flex align-items-center`}>
    <div className='container h-100 d-flex flex-column justify-content-center align-items-center text-center'>
    <h3 className={`${style.head} fw-bolder pb-4`}>
          A Leap Beyond<br/> 
      todays standard<br/>
      <span className={`${style.gradient}`}>Educational</span> Forms
    </h3>
    <p className='w-50 fs-5'>An educational site that Can Bridge The Gap Between the Student and the Teacher with a Professional and Evolved Way.</p>
    <div className="btns pt-5 w-50 d-flex justify-content-between">
      <Link className='btn btn-success border-0 main-bgColor text-white fw-bold fs-3 w-100 me-2 py-2 rounded-3 shadow' to={'/signup'}>Sign Up</Link>
      <Link className='btn btn-outline-success border-2 border-green text-main fw-bold fs-3 w-100 ms-2 py-2 rounded-3 shadow'  to={'/courses'}>Explore courses</Link>
    </div>
    </div>
  </div>
  <div className='d-flex justify-content-center align-items-center py-5'>
    <div className="row gy-3 container justify-content-center align-items-center w-80 mx-auto my-2">
      <div className="col-12">
        <div className='border border-1 rounded-4 py-4 px-4 bgLight text-center border-secondary'>
          <p className={`${style.pFont} fw-bolder pb-4`}>" Our mission is to make quality education accessible to everyone, regardless of location or background. We believe in the power of knowledge and the importance of lifelong learning "</p>
          <button className='btn btn-success border-0 main-bgColor fs-6 px-4 ms-2 py-1 rounded-3 shadow'>Learn more</button>
        </div>
      </div>
      <div className="col-md-4">
        <div className={`${style.height} overflow-hidden border border-3 border-green rounded-3 mx-auto px-4 py-3 main-bgColor text-white`}>
         <div className="container">
          <div>
        <img src={user} alt="" />
          </div>
         <h4 className='fw-bold py-2'>User Friendly</h4>
          <p className='pb-5'>Our platform is designed with a focus on user experience and advanced technology integration, making learning more engaging, efficient, and enjoyable.</p>
         </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className={`${style.height} overflow-hidden border border-3 border-green rounded-3 mx-auto px-4 py-3 main-bgColor text-white`}>
         <div className="container">
          <div>
        <img src={ai} alt="" />
          </div>
         <h4 className='fw-bold py-2'>User Friendly</h4>
          <p className='pb-5'>Our platform incorporates state-of-the-art voice recognition technology & we understand that everyone make mistakes , Especially when learning something new that's why our platform provides advanced auto-correct model</p>
         </div>
        </div>
      </div>
      <div className="col-md-4">
      <div className={`${style.height} overflow-hidden border border-3 border-green rounded-3 mx-auto px-4 py-3 main-bgColor text-white`}>
         <div className="container">
          <div>
        <img src={group} alt="" />
          </div>
         <h4 className='fw-bold py-2'>User Friendly</h4>
          <p className='pb-5'>This design ensures high availability, scalability, and efficient data management , Microservices architectures make applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.</p>
         </div>
        </div>
      </div>
    </div>
  </div>
  {/* <div className='bgLight p-5'>
    <div className="container">
    <h5 className='text-center fs-1 fw-bolder'>A <span className='text-main'>word</span> from our <span className='text-main'>users</span></h5>
  <div id="carouselExampleCaptions" className="carousel slide text-center pt-5">
  <div className="carousel-inner">
  <div className="carousel-item active">
  <div className='position-relative border border-3 border-green rounded-4 w-65 mx-auto p-0 m-0 overflow-hidden'>
    <div ref={layerRefs[0]} className={`layer position-absolute bottom-0 top-0 start-0 end-0 ${style.Vgradient} z-1 d-flex justify-content-center align-items-center ${isPlaying[0] ? 'd-none' : ''}`}>
      <i className='fa-solid fa-play shhh p-4 fs-1 text-white'></i>
    </div>

    <video ref={videoRefs[0]} className='w-100 h-100' onClick={() => setIsPlaying((prevIsPlaying) => [!prevIsPlaying[0], prevIsPlaying[1], prevIsPlaying[2]])}>
      <source src={feedback1} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div className="carousel-item">
  <div className='position-relative border border-3 border-green rounded-4 w-65 mx-auto p-0 m-0 overflow-hidden'>
    <div ref={layerRefs[1]} className={`layer position-absolute bottom-0 top-0 start-0 end-0 ${style.Vgradient} z-1 d-flex justify-content-center align-items-center ${isPlaying[1] ? 'd-none' : ''}`}>
      <i className='fa-solid fa-play shhh p-4 fs-1 text-white'></i>
    </div>

    <video ref={videoRefs[1]} className='w-100 h-100' onClick={() => setIsPlaying((prevIsPlaying) => [prevIsPlaying[0], !prevIsPlaying[1], prevIsPlaying[2]])}>
      <source src={feedback2} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

<div className="carousel-item">
  <div className='position-relative border border-3 border-green rounded-4 w-65 mx-auto p-0 m-0 overflow-hidden'>
    <div ref={layerRefs[2]} className={`layer position-absolute bottom-0 top-0 start-0 end-0 ${style.Vgradient} z-1 d-flex justify-content-center align-items-center ${isPlaying[2] ? 'd-none' : ''}`}>
      <i className='fa-solid fa-play shhh p-4 fs-1 text-white'></i>
    </div>

    <video ref={videoRefs[2]} className='w-100 h-100' onClick={() => setIsPlaying((prevIsPlaying) => [prevIsPlaying[0], prevIsPlaying[1], !prevIsPlaying[2]])}>
      <source src={feedback3} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
</div>

  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
         </div>
    </div> */}
  <div className='container p-5'>
         <h5 className='text-center fs-1 fw-bolder'>How <span className='text-main'>IT</span> Works</h5>
         <div className="py-5 row g-5">
          <div className="col-md-5">
            <div>
              <img src={image2} className='w-100' alt="image" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
            <p className='fs-5 fw-bold'>Also know as Automatic Speech
recognition (ASR) , Computer Speech recognition , or speech to text (STT) ,
is an Interdisciplinary subfield of computer science and computational linguistics ,
<br />it develops methodologies & technologies that enable the recognition and translation 
of spoken language into text by computers , in other words it accurately converts voice to text by applying powerful machine learning models.</p>
            </div>
          </div>
          <div className="col-md-6">
            <div>
            <p className='fs-5 fw-bold'>Autoanswer Model, Also known as automatic question answering systems , are AI-Powered Tools Designed to provide accurate answers to user unique queries, these model can significantly reduce response times by automatically providing answers to frequently asked questions, 
<br />They use advanced NLP (Natural Language Processing) Techniques to understand the context of the question & Generate Appropriate Responses.</p>
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <img src={image1} className='w-100' alt="image" />
            </div>
          </div>
          <div className="col-md-5">
            <div>
              <img src={image3} className='w-100' alt="image" />
            </div>
          </div>
          <div className="col-md-6">
            <div>
            <p className='fs-5 fw-bold'>Microservices architectures make applications easier to scale and faster to develop, <br />enabling innovation and accelerating time-to-market for new features. With a microservices architecture, an application is built as independent components that run each application process as a service. <br />These services communicate via a well-defined interface using lightweight APIs</p>
            </div>
          </div>
         </div>
  </div>
  <div className='bgLight'>
  <div className="container p-5">
  <h5 className='text-center fs-1 fw-bolder'>Our <span className='text-main'>Courses</span></h5>
  <div className="row p-5 g-4">
    <div className="col-md-4">
      <div className='main-borderC bg-white px-2 rounded-4 pb-2 pt-3'>
        <div className='pt-4 pb-2'>
          <img src={nw} className='w-100' alt="network" />
        </div>
        <input className={`${style.biggerCheck} form-control formCheck rounded-3 cursor-pointer`} type="radio" name="subject" id="network" value='network' />
        <div className='w-100 d-flex justify-content-center'>
        <Link to={'/quiz'} htmlFor='network' className='text-decoration-none text-black fs-4 fw-bold cursor-pointer'>Network 1</Link>
        </div>
        </div>
    </div>
    <div className="col-md-4">
      <div className='main-borderC bg-white p-2 rounded-4'>
        <div className='pt-4 pb-2'>
          <img src={db} className='w-100' alt="database" />
        </div>
        <input className={`${style.biggerCheck} form-control formCheck rounded-3 cursor-pointer`} type="radio" name="subject" id="database" value='database' />
        <div className='w-100 d-flex justify-content-center'>
        <Link to={'/quiz'} htmlFor='database' className='text-decoration-none text-black fs-4 fw-bold cursor-pointer'>Database</Link>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className='main-borderC bg-white p-2 pt-1 rounded-4'>
        <div className='pt-4 pb-2'>
          <img src={ga} className='w-100' alt="genatic" />
        </div>
        <input className={`${style.biggerCheck} form-control formCheck rounded-3 cursor-pointer`} type="radio" name="subject" id="genatic" value='genatic' />
        <div className='w-100 d-flex justify-content-center'>
                <Link to={'/quiz'} htmlFor='genatic' className='text-decoration-none text-black fs-4 fw-bold cursor-pointer'>Genatic Algorithms</Link>
        </div>
        </div>
    </div>
  </div>
</div>
  </div>
  <div className={`${style.join} vh-88 d-flex align-items-center`}>
    <div className='container h-100 d-flex justify-content-center align-items-center text-center'>
      <div className="row align-items-center justify-content-center g-2">
        <div className="col-md-5">
        <div>
      <h4 className={`${style.tail} text-black fw-bolder py-4`}>Join Us Today</h4>
      <Link className='btn btn-success border-0 main-bgColor text-white fw-bold fs-2 w-75 me-2 py-3 rounded-4 shadow' to={'/signup'}>Sign Up</Link>
      </div>
        </div>
        <div className="col-md-5">
        <div>
        <img src={logo} className='w-65' alt="logo" />
      </div>
        </div>
      </div>
    </div>
  </div>
  </section>
  </>
}
