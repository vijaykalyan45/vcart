import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Skeleton from 'react-loading-skeleton'
import { useDispatch } from 'react-redux'
import { addCart } from '../redux/action'

const Product1 = () => {

const {id}=useParams()
const [product,setProduct]=useState([])
const [isloading,setLoading]=useState(false)
const dispacth=useDispatch();
const addProduct=(product)=>{
    dispacth(addCart(product))
}

const fetchuser=async (url)=>{
    try {
        setLoading(true)

const responce=await fetch(url)
const data=await responce.json()
setProduct(data)
setLoading(false)

    } catch (error) {
        setLoading(false)
    }
}

useEffect(()=>{
fetchuser(`https://fakestoreapi.com/products/${id}`)
console.log("this is vijay");
},[id])
const Vijay=()=>{
    return <>

    <div className="col-md-6"><Skeleton  height={400}/></div>
    <div className="col-md-6" style={{lineHeight:2}}>

<Skeleton  height={50} width={300}/>
<Skeleton  height={75} />
<Skeleton  height={25} width={150}/>
<Skeleton  height={50}/>
<Skeleton  height={150}/>
<Skeleton  height={50} width={100}/>
<Skeleton  height={50} width={100} style={{marginLeft:6}}/>
    </div>
    
    </>
}
const Showdata=()=>{
    return <>
    
    <div className="col-md-6">
        <img src={product.image} alt={product.title} height={400} width={400}/>
    </div>
    <div className="col-md-6">
        <h4 className='text-uppercase text-black-50'>
{product.category}
        </h4>
        <h1 className='display-5'>{product.title}</h1>
        <p className='lead fw-bolder'>Rating {product.rating &&product.rating.rate}
        <i className='fa fa-star'/></p>
        <h3 className='display-6 fw-bold my-4'>${product.price}</h3>
        <p className='lead'>{product.description}</p>
        <button className="btn btn-outline-dark px-4 py-2" onClick={()=>addProduct(product)}>Add to cart</button>
        <Link className="btn btn-dark ms-2 px-3 py-2" to="/cart">Go to cart</Link>
    </div>
    </>
}


  return (
    <>
    <div className="container py-5">
<div className="row py-4">

{
isloading ?<Vijay/> :<Showdata/>
}
</div>



    </div>
    
    
    </>
  )
}

export default Product1