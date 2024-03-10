import React from 'react'

export default function Contact() {
  return (
    <>

<section className='p-5'>




<h2 className="title text-center fs-1">CONATCT SECTION</h2>

<div className="container py-4">
<div className="contact d-flex flex-column align-items-center justify-content-center py-5">
<div className="input-group flex-nowrap w-50 mb-3">

<input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap w-50 mb-3">

<input type="text" className="form-control" placeholder="UserAge" aria-label="UserAge" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap w-50 mb-3">

<input type="email" className="form-control" placeholder="Email" aria-label="Useremail" aria-describedby="addon-wrapping" />
</div>
<div className="input-group flex-nowrap w-50 mb-3">

<input type="password" className="form-control" placeholder="password" aria-label="Userpassword" aria-describedby="addon-wrapping" />
</div>
<button className='btn'> send Massge</button>
</div>

</div>
</section>
    
    
    
    
    
    </>
  )
}
