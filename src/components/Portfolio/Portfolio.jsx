import { logRoles } from '@testing-library/react'
import React, { useState } from 'react'
import img from "../../assests/imgs/port.png"
import img2 from "../../assests/imgs/port2.png"
import img3 from "../../assests/imgs/port3.png"

export default function Portfolio() {

 const  [data,setData]=useState([
// {img:"../../assests/imgs/port.png" , id:"img1"},
// {img:"../../assests/imgs/port2.png" , id:"img2"},
// {img:"../../assests/imgs/port3.png" , id:"img3"},
// {img:"../../assests/imgs/avataaars.svg" , id:"img4"},
// {img:"../../assests/imgs/avataaars.svg" , id:"img5"},
// {img:"../../assests/imgs/avataaars.svg" , id:"img6"},
])



  return (
    <>
<section className='portfolio'>
  <h2 className='title text-center py-5'>PORTFOLIO COMPONENT</h2>
  <div className="container">
    <div className="row gy-3 mb-3">


<div className="col-md-4">
       <div className="img">
       <img src={img}  className='w-100 rounded-3' alt="" />
        <div className="layer d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-plus fs-1 text-white"></i>
       
        </div>



        
     

       </div>
          </div> 
          <div className="col-md-4">
       <div className="img">
       <img src={img2}  className='w-100 rounded-3' alt="" />
        <div className="layer d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-plus fs-1 text-white"></i>
       
        </div>



        
     

       </div>
          </div> 
          <div className="col-md-4">
       <div className="img">
       <img src={img3}  className='w-100 rounded-3' alt="" />
        <div className="layer d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-plus fs-1 text-white"></i>
       
        </div>



        
     

       </div>
          </div> 
          <div className="col-md-4">
       <div className="img">
       <img src={img}  className='w-100 rounded-3' alt="" />
        <div className="layer d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-plus fs-1 text-white"></i>
       
        </div>



        
     

       </div>
          </div> 
          <div className="col-md-4">
       <div className="img">
       <img src={img2}  className='w-100 rounded-3' alt="" />
        <div className="layer d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-plus fs-1 text-white"></i>
       
        </div>



        
     

       </div>
          </div> 
          <div className="col-md-4">
       <div className="img">
       <img src={img3}  className='w-100 rounded-3' alt="" />
        <div className="layer d-flex justify-content-center align-items-center">
        <i className="fa-solid fa-plus fs-1 text-white"></i>
       
        </div>



        
     

       </div>
          </div> 






















      
       
     
        
      
          
   
 


    </div>
  </div>
</section>





    </>
  )
}
