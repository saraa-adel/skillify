import React, { useState } from 'react'
import shout from '../../Assets/images/icons/PNG/A_shout.png'
import recording from '../../Assets/images/icons/PNG/icons8-audio-wave-unscreen.gif'
import edit from '../../Assets/images/icons/PNG/Menu.png'
import update from '../../Assets/images/icons/PNG/Update.png'
import like from '../../Assets/images/icons/PNG/Wlike.png'
import unLike from '../../Assets/images/icons/PNG/unLike.png'
// import style from './Quiz.module.css'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'


export default function Quiz() {


  useEffect(() => {
    document.title = "Quiz"
},[]);

  useEffect(() => {
    let answer = document.querySelector('.answering');
    let voice = document.querySelector('.recording');
    let theAnswer = document.querySelector('.theAnswer');
    let retry = document.getElementById('retry');
    let done = document.getElementById('done');
    const recordAnswer = document.getElementById('recordAnswer');
    const feedback = document.getElementById('feedback');
    const btns = document.querySelectorAll('.btn');

    // CONSOLE IF CHANGE THE TAB
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        console.log("User leave the page");
        // feedback.classList.add('d-none');
        // btns.forEach(btn => {
        //   btn.classList.remove('disabled');
        //   btn.disabled = false;
        // });
          } else {
        console.log("User returned to the page");
        feedback.classList.remove('d-none');
        btns.forEach(btn => {
          btn.classList.add('disabled');
          btn.disabled = true;
        });
          }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);




    // WARNING BEFORE CLOSING OR RELOD
    window.addEventListener('beforeunload', function (e) {
      sessionStorage.setItem('pageReloaded', 'true');
      
      const confirmationMessage = 'Are you sure you want to leave this page? Your progress may be lost.';
      e.preventDefault();
      e.returnValue = confirmationMessage;
    
      return confirmationMessage;
    });
    
    window.addEventListener('load', function () {
      const pageReloaded = sessionStorage.getItem('pageReloaded');
      if (pageReloaded) {
        console.log('Page is reloaded');
        feedback.classList.remove('d-none');
        btns.forEach(btn => {
          btn.classList.add('disabled');
          btn.disabled = true;
        });
        sessionStorage.removeItem('pageReloaded');
      }
    });

    // RECORDING ANSWER
    if (answer) {
      answer.addEventListener("click", () => {
          answer.classList.add('d-none')
          voice.classList.remove('d-none')
          theAnswer.classList.add('d-none')
      })
    }

    if (voice) {
      voice.addEventListener("click", () => {
        answer.classList.add('d-none')
        voice.classList.add('d-none')
        theAnswer.classList.remove('d-none')
      });
  }

    if (done) {
      done.addEventListener("click", () => {
        console.log(recordAnswer.value)
      })
    }
        
    if (retry) {
      retry.addEventListener("click", () => {
        answer.classList.remove('d-none')
        voice.classList.add('d-none')
        theAnswer.classList.add('d-none')
      })
  }
  return () => {
    document.removeEventListener("visibilitychange", handleVisibilityChange);
  };

}, [])

const handleCopy = (e) => {
  e.preventDefault();
};
const handlePaste = (e) => {
  e.preventDefault();
};
const { pathname } = useLocation();

useEffect(() => {
  window.scrollTo(0, 0);
}, [pathname]);

  return <>
      <div id="feedback" className={`feedback text-white py-2 successed d-none`}>
      <div className="w-75 mx-auto h-100 d-flex flex-wrap align-items-center">
               <div className="d-flex align-items-center w-100">
                    <img src={like} alt="like" />
                    <p className="fs-2 fw-bolder ps-2 mt-2">Congratulations! You Succeeded!</p>
               </div>
               <div className="degrees w-100 d-flex justify-content-between ps-5 pe-5 fs-4">
                    <div className="d-flex align-items-end">
                         <p className="fw-normal pe-2">Grade <br /> Recieved</p>
                         <span className="degree text-black fw-bold">80%</span>
                    </div>
                    <div className="d-flex align-items-end">
                         <p className="fw-normal pe-2">Latest <br /> Submission</p>
                         <span className="degree text-black fw-bold">80%</span>
                    </div>
                    <div className="d-flex flex-column">
                         <p className="fw-normal pe-2">To Pass the Quiz</p>
                         <span className="degree text-black fw-bold">50%</span>
                    </div>
               </div>
          </div>
          <div className="w-75 mx-auto h-100 d-flex flex-wrap align-items-center d-none">
               <div className="d-flex align-items-center w-100">
                    <img className='mt-2' src={unLike} alt="unLike" />
                    <p className="fs-2 fw-bold ps-2 text-black">Unfortunately you didn't pass...</p>
               </div>
               <div className="degrees w-100 d-flex justify-content-between ps-5 pe-5 fs-4">
                    <div className="d-flex align-items-end">
                         <p className="fw-normal pe-2">Grade <br /> Recieved</p>
                         <span className="degree text-black fw-bold">30%</span>
                    </div>
                    <div className="d-flex align-items-end">
                         <p className="fw-normal pe-2">Latest <br /> Submission</p>
                         <span className="degree text-black fw-bold">40%</span>
                    </div>
                    <div className="d-flex flex-column">
                         <p className="fw-normal pe-2">To Pass the Quiz</p>
                         <span className="degree text-black fw-bold">50%</span>
                    </div>
               </div>
          </div>
     </div>
     <div onCopy={handleCopy} onPaste={handlePaste} onCut={handleCopy} className='container unselectable pt-4 px-5'>
        <div className="row fs-6">
          <div className="mcq col-12">
            <div>
            <div className='d-flex align-items-center justify-content-between py-4'>
            <p><span className='fw-bolder pe-3'>1.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae?</p>
            <span className='text-black px-3 body fw-bold rounded-4 fs-6'>• /1</span>
            </div>
                  <div className="row ps-4">
                    <div className="col-12">
                      <div className='pb-3 d-flex align-items-center'>
                      <input id='one' type="radio" name='choice' value='Choice1'/>
                      <label className='ps-2' htmlFor="one">Choice1</label>
                      </div>
                    </div> 
                    <div className="col-12">
                      <div className='pb-3 d-flex align-items-center'>
                      <input id='two' type="radio" name='choice' value='Choice2'/>
                      <label className='ps-2' htmlFor="two">Choice2</label>
                      </div>
                    </div> 
                    <div className="col-12">
                      <div className='pb-3 d-flex align-items-center'>
                      <input id='three' type="radio" name='choice' value='Choice3'/>
                      <label className='ps-2' htmlFor="three">Choice3</label>
                      </div>
                    </div> 
                    <div className="col-12">
                      <div className='pb-2 d-flex align-items-center'>
                      <input id='four' type="radio" name='choice' value='Choice4'/>
                      <label className='ps-2' htmlFor="four">Choice4</label>
                      </div>
                    </div> 
                </div>
            </div>
          </div>
          <div className="t/f col-12">
            <div>
            <div className='d-flex align-items-center justify-content-between py-4'>
            <p><span className='fw-bolder pe-3'>2.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae.</p>
            <span className='text-black px-3 body fw-bold rounded-4 fs-6'>• /1</span>
            </div>
                  <div className="row ps-4">
                    <div className="col-12">
                      <div className='pb-3 d-flex align-items-center'>
                      <input id='true' type="radio" name='t/f' value='True'/>
                      <label className='ps-2' htmlFor="true">True</label>
                      </div>
                    </div> 
                    <div className="col-12">
                      <div className='pb-3 d-flex align-items-center'>
                      <input id='false' type="radio" name='t/f' value='False'/>
                      <label className='ps-2' htmlFor="false">False</label>
                      </div>
                    </div> 
                </div>
            </div>
          </div>
          <div className="record col-12">
              <div>
            <div className='d-flex align-items-center justify-content-between py-4'>
            <p><span className='fw-bolder pe-3'>3.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae?</p>
            <span className='text-black px-3 body fw-bold rounded-4 fs-6'>• /1</span>
            </div>              
                <div className='answering d-flex justify-content-center py-4'> 
                <button className='btn btn1 btn-answer text-white fs-3 my-3 px-4 py-2 rounded-5 d-flex align-items-center justify-content-evenly'>
                  <span className='fw-bold'>Answer</span>
                  <img src={shout} className='ps-3' alt="shout"/>
                </button>
              </div>
              <div className='recording d-none d-flex justify-content-center py-4'>
                <button className='btn btn4 btn-answer text-white fs-3 my-3 px-4 py-2 rounded-5 d-flex align-items-center justify-content-between'>
                  <i className="fa-solid fa-circle dot text-danger pe-2"></i>
                  <span className='text-black fw-bold'>Rec.</span>
                  <img src={recording} className='voice ms-auto' alt="recording" />
                </button>
              </div>
              <div className="theAnswer d-none d-flex justify-content-center">
              <textarea className='mt-2 mb-4 ps-4 pt-3 rounded-4 w-50 unselectable' name="answer" id="recordAnswer" rows="8" readOnly={true} value="The Anwser"></textarea>
                <div className='d-flex flex-column justify-content-end mb-4 ps-3'>
                <button id='done' className='btn btn1 w-130 fw-bold text-white py-2 mb-3 rounded-5 '>
                <span>Done</span>
                <i className="fa-solid fa-check ps-3"></i>
                </button>
                <button id='retry' className='btn btn-dark w-130 fw-bold text-white py-2 rounded-5 '>
                <span>Retry</span>
                <img src={update} className='w-25 ps-3' alt="updating" />
                </button>
                </div>
              </div>
              </div>
          </div>
          <div className="essay col-12">
            <div>
            <div className='d-flex align-items-center justify-content-between py-4'>
            <p><span className='fw-bolder pe-3'>4.</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, molestiae?</p>
            <span className='text-black px-3 body fw-bold rounded-4 fs-6'>• /1</span>
            </div>
            <div className='px-4'>
            <textarea className='mt-2 ps-4 pt-3 rounded-4 w-50 unselectable' name="answer" id="essayAnswer" rows="8" placeholder='Answer..'></textarea>
            </div>
            </div>
          </div>
          <div className="row py-4">
            <div className="offset-3 col-9 d-flex">
              <button className='btn btn1 w-130 fw-bold text-white py-1 rounded-5 '>
                <span>Submit</span>
                <i className="fa-solid fa-check ps-3"></i>
                </button>
              
              <button className='btn border border-black bg-transparent w-130 fw-bold ms-2 py-1 rounded-5'>
                <span>Edit</span>
                <img src={edit} className='w-25 ps-3' alt="editing" />
                </button>
            </div>
          </div> 
        </div>
      </div>
  </>
}
