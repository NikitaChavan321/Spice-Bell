import React, { useState } from 'react'
import './MyOrder.css'




const MyOrder = () => {
  const [product, setProduct] = useState({})

  const [isSubmitted,setIsSubmitted] = useState(false)

  const handleProductnameChange = (e) => {
    setProduct({...product,productname:e.target.value})

  }

  const handleQuantityChange = (e) => {
    setProduct({...product,quntity:e.target.value})

  }

  
  const handlepriceChange = (e) => {
    setProduct({...product,price:e.target.value})

  }

  
  const handleSubmit = (e)=>{ 
    e.preventDefault();
    alert("Order successful")
    setIsSubmitted(true)
}

  return (
    <div className='container-m'>
      <h2 style={{color:'white' , margin:'5px', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , color:'black'}}> My Order</h2>
      { !isSubmitted && <div class="layout">
        <div className="Pay-box text p-3 rounded">
        <form action="#" onSubmit={handleSubmit}>
          <div className='mb-3 '>
          
            <label className='form-label'>Product Name:- </label>
            <input className='btn-a' type="text" name="product name" id="" onChange={handleProductnameChange} value={product.productname} placeholder="Enter a name" required />
           
          </div>

          <div className='mb-3'>
            
            <label className='form-label'>Quantity:-</label>
            <input className='btn-b' type="number" name="Quantity" id="" onChange={handleQuantityChange} value={product.Quantity} placeholder="0" min={0}  required/>
            
          </div>

          <div className='mb-3'>
         
            <label className='form-label'>Price:-</label>
            <input className='btn-c' type="number" name="price" id="" onChange={handlepriceChange} value={product.Price}  placeholder="Rs" min={0}required/>
         
          </div>
          </form>

          <div>
            
                <label  style= {{margin:'8px', marginLeft:'75%', fontWeight:'bold'}} for="">Mode:- </label>
           
              
              
                <label style={{color:'black', fontWeight:'bold',}} for="">Cash On Delivery</label>
                <input type="radio" name="a"></input>
                <br></br>
              
                <label  style={{color:'black', fontWeight:'bold', marginLeft:'80%'}} for="">Pay Online</label>
                <input type="radio" name="a"></input>
              
          
          </div>
          </div>
       
        
        <button className='Pbtn' type='Submit' onClick={handleSubmit}>Confirm</button>
      </div>}
      {isSubmitted && <div className="border border-2 border-success rounded-3 p-3">
           
            <button className="btn btn-success" onClick={()=>{
            setIsSubmitted(false);
            setProduct({productname:"",Quantity:0,price:0,mode:""})}}></button>
        </div>}
        </div>
  )
            }
            



export default MyOrder