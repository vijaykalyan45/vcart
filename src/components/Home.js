import React from 'react'
import Product from './Product';
import Login from './Login';
import { useAuth } from './Auth';
import { useNavigate } from 'react-router';
 const Home = () => {
const navigate=useNavigate();
const navigateTosuccessPage=()=>{
  navigate("/home")
}


  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0 ">
  <img src='./assets/a.avif' className="card-img" height={550} alt=""/>
  <div className="card-img-overlay">

    {/* <div className='container'>
<h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVAL</h5>
    <p className="card-text lead fs-2">CHECK OUT THE ALL THE TRENDS</p>
    <p className="card-text"><small>Last updated 3 mins ago</small></p>

    </div> */}
    
  </div>
</div>
<Product />

    </div>
  )
}
export default Home;