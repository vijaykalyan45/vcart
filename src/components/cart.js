import React, { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import handlecart from '../redux/reducer/handlecart';
import { addcart1 } from '../redux/action';
import { delCart } from '../redux/action';
import { useAuth } from './Auth';

const Cart = () => {

  const product=useSelector((state)=>state.handlecart)
 
  const dispatch=useDispatch();
const {user}=useAuth()

  const addProduct=(product)=>{
dispatch(addcart1(product))

  }
  console.log(product.length);
  if(product.length==0){
    return <h4 style={{marginLeft:500,marginTop:200}}>There are  No Items</h4>
  }
  
  const handleButtond = (product) => {
dispatch(delCart(product))
 };
      
  
  return (
    <div>

       <ul>
{
  product.map((product)=>{
    return <li>
       <div className="row">

<div className="col-md-4">

    <img src={product.image} alt={product.title} height={200} width={180} />
</div>
<div className="col-md-4">
<h3>{product.title}</h3>
    <p className="lead fw-bold">
          {product.qty} X ${product.price}= $ {product.qty *product.price }
    </p>

    <button className='btn btn-outline-dark me-4' onClick={() => handleButtond(product)}>
  <i className='fa fa-minus'></i>
</button>
<button className='btn btn-outline-dark me-4'  onClick={()=>addProduct(product)}>
  <i className='fa fa-plus'></i>
</button>
<button className='btn btn-outline-dark me-4'><h6>Buy Now</h6></button>
</div>

      </div>
    </li>
  })

     

}
</ul>
    

    </div>
  )
}

export default Cart