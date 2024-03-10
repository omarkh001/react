import React from 'react'
import img from "../../assests/imgs/avataaars.svg"
import style from "./Home.module.css"
export default function Home() {
  return (<>

  {/* <h1>helllo</h1> */}

    <div className={`${style.test}   `}>
<div className="container ">
<div className="content  d-flex  justify-content-center align-items-center flex-column py-5 ">
<img src={img} className='w-25 mx-auto ' alt="" />
<h2 className='text-white mt-2'>START FRAMEWORK</h2>

<div className="icon-home">
<i  className="fa-solid fa-star text-white"></i>
</div>
<p className='text-white py-2'>Graphic Artist - Web Designer - Illustrator</p>
</div>


</div>

  
</div>

    
  











</>
  )
}
