import React,{useState,useEffect} from 'react'
import Skeleton from 'react-loading-skeleton'
import { useAuth } from './Auth'
import { Link, NavLink} from 'react-router-dom'


const Url="https://fakestoreapi.com/products"

 const Product = () => {
    const [data,setData]=useState([])
    const [filterr,setFilter]=useState(data)
    const [laoding,setLoading]=useState(false)
    var compountMounted=true;
const {user}=useAuth()

    const fetchuser=async (url)=>{

      try {
        setLoading(true);
        const responce=await fetch(url);
        const v=await responce.json();      
        if(compountMounted){
          setData(v)
          setLoading(false)
      setFilter(v)
        
        }

      } catch (error) {
        setLoading(false)
      }


    }
    useEffect(()=>{

fetchuser(Url)


    },[])
const Isloding=()=>{
  return <>
  <div className="col-md-3">
<Skeleton height={350}/>
  </div>
  <div className="col-md-3">
<Skeleton height={350}/>
  </div>
  <div className="col-md-3">
<Skeleton height={350}/>
  </div>
  <div className="col-md-3">
<Skeleton height={350}/>
  </div>
  
  </>
}
const filterProduct=(cat)=>{
  let updatedList=data.filter((each)=>each.category ===cat)
setFilter(updatedList)

}




const Showdata=()=>{
  return <>
  <div className='buttons d-flex justify-content-center mb-5 pb-5'> 
    <div className="btn btn-outline-dark me-2" onClick={()=>setFilter(data)}>All</div>
     <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("men's clothing")}>Mens Clothing</div>
     <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("women's clothing")}>Womens Clothing</div>
     <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("jewelery")}>Jewelery</div>
     <div className="btn btn-outline-dark me-2" onClick={()=>filterProduct("electronics")}>Electronics</div>
     </div>
     {
      filterr.map((product)=>{
        const {title,image,id,price}=product
        return <>
        
        <div className="col-md-3  mb-4" key={id}>

        <div className="card h-100 text-center p-4 " key={id}>
  <img src={image} className="card-img-top" alt={title} height={250}/>
  <div className="card-body">
    <h5 className="card-title mb-0">{title.substring(0,12)}</h5>
    <p className="card-text lead fw-bold">${price}</p>
   
  {user ?(  <Link to={`/product1/${id}`} className="btn btn-outline-dark">Buy Now </Link>):(  <Link to='/login' className="btn btn-outline-dark">Buy Now </Link>)}
  </div>
</div>



        </div>
        
        
        </>
      })
     }
  </>
}


  return (
    <div>

<div className="container my-5 py-5">

  <div className="row">

    <div className="col-12 mb-5">


      <h1 className='display-6 fw-folder text-center'>Latest Products</h1>
      <hr />
    </div>
  </div>

  <div className="row justify-content-center">
  {
    laoding ?<Isloding/>:<Showdata/> 
   }
  </div>
</div>
  
    </div>
  )
}
export default Product;