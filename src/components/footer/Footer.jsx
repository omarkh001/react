import React from 'react'
import style from "./Footer.module.css"
export default function Footer() {
  return (
    <>
    
    <div className={`${style.test}  py-5  text-white text-center`}>
        <div className="container mb-5">
          <div className="row gy-5">
            <div className="col-md-4">
           <div className="content text-white">
           <h3 className='fw-bold'>LOCATION</h3>
              <p className=' fw-semibold'>2215 John Daniel Drive</p>
              <span className=' fw-semibold'>Clark, MO 65243</span>
           </div>
            </div>
            <div className="col-md-4">
            <h3 className='fw-bold '>AROUND THE WEB</h3>
            <div className="social d-flex justify-content-center">
              <span><i  className={`${style.icon}  fa-brands fa-facebook mx-1 icon d-flex justify-content-center align-items-center`}></i></span>
              <span><i  className={`${style.icon}  fa-brands fa-youtube mx-1 icon d-flex justify-content-center align-items-center`}></i></span>
              <span><i  className={`${style.icon}  fa-brands fa-twitter mx-1 icon d-flex justify-content-center align-items-center`}></i></span>
              <span><i  className={`${style.icon}  fa-brands fa-github mx-1 icon d-flex justify-content-center align-items-center`}></i></span>
            </div>
            </div>
            <div className="col-md-4">
              <h3>ABOUT FREELANCER</h3>
              <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
       
    </div>
    <div className="end text-center p-3 text-white">Copyright © Your Website 2021</div>

    
    </>
   )
}
