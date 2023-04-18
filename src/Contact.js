import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div> <div className="dl">
<br />
<h1>Contact Us</h1>
<h6>help and support</h6>
<hr />
<label htmlFor=""><p style={{fontWeight:400}}> Requester (In case of existing partners, please enter your registered e-mail address associated with your affiliate account)</p>
</label>
<input  placeholder="Email"  style={{width:600}} required /> <br /> <br /> 
<label htmlFor=""><p>Name</p></label>  <br />
<input  placeholder="Name"  style={{width:600}}  required/> <br /> <br />
<label htmlFor=""><p>
Affiliate Tracking ID</p></label> <br />
<input    style={{width:600}} />

<br /> <br />
<label htmlFor="qual">Subject</label> <br /> <br />
<select name="q" id="q" required>
                <option value=""></option>
                <option value="">Quiery Related to Mobile App Tracking </option>
                <option value="">Payment Related Query</option>
                <option value="">Facing a Technical Error</option>
                <option value="">Quiery Reagarding API Feeds</option>
                <option value="">Reports Releted  Query</option>
                <option value="">Documents For Eloctronic Funds Transfer (EFT) Payments</option>
            </select>
            <br /> <br />  

            <label htmlFor="">Description</label> <br />
  <textarea name="" id="" cols="60" rows="10"></textarea> <br />

  
<button className='btn btn-outline-dark me-4'><h6>Send Feedback</h6></button>
  </div>
<div className="side">
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >
                  Home
                </Link></li> <br />
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >
                  Commission
                </Link></li> <br />
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >
                  Affiliate Tools
                </Link></li> <br />
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >
                  FAQ's
                </Link></li><br />
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >
                  API
                </Link></li> <br />
<li><Link className="nav-link active" aria-current="page" href="#" to="/" >
                  UPDATES
                </Link></li>




</div>

    </div>
  )
}

export default Contact