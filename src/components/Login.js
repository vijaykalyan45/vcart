import React ,{useState}from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './Auth';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';

function Login() {
const {login}=useAuth()

const [count,setCount]=useState("")

const [pass,setpass]=useState("")


const vijay=()=>{

   


    login(count)
    
   
    setCount("")
    setpass("")
    
}

  return (
    <><MDBContainer className="p-3 my-5 d-flex flex-column w-50">

    <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={count} onChange={(e)=>setCount(e.target.value)}/>
    <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password ' value={pass} onChange={(e)=>setpass(e.target.value)}/>

    <div className="d-flex justify-content-between mx-3 mb-4">
      <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
      <a href="!#">Forgot password?</a>
    </div>

  
    <Link className="nav-link active" aria-current="page" href="#" to="/" >
    <MDBBtn className="mb-4" onClick={vijay}>Sign in</MDBBtn>
              </Link>

    <div className="text-center">
      <p>Not a member? <a href="#!">Register</a></p>
      <p>or sign up with:</p>

      <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <i class="fa fa-facebook" aria-hidden="true"></i>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <i class="fa fa-twitter" aria-hidden="true"></i>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <i class="fa fa-google" aria-hidden="true"></i>
        </MDBBtn>

        <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
        <i class="fa fa-github" aria-hidden="true"></i>
        </MDBBtn>

      </div>
    </div>

  </MDBContainer>
    
     

       
       


    </>
  );
}

export default Login;