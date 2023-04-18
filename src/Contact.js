import React from 'react'

const Contact = () => {
  return (
    <div>
<br />
<label htmlFor=""><p style={{fontWeight:400}}> Requester (In case of existing partners, please enter your registered e-mail address associated with your affiliate account)</p>
</label>
<input  placeholder="Email"  style={{width:600}} required /> <br /> <br /> 
<label htmlFor=""><p>Name</p></label>  <br />
<input  placeholder="Name"  style={{width:600}}  required/> <br /> <br />
<label htmlFor=""><p>
Affiliate Tracking ID</p></label> <br />
<input    style={{width:600}} />




    </div>
  )
}

export default Contact