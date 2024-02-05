import React from 'react'
import "./Menu.css"

const Menu = ({productItems , handleAddProduct}) => {
  return (
  
    <div className='product'>
        { productItems.map((productItems)=>(
           
              <div className="cards">
                <div className="image_box">
                  <img src={productItems.imageUrl} alt="Image" />
                 </div>
                <div className="pro-details">
                  <p>{productItems.name}</p>
                </div>
                <div className='pro-desc'>
                  <p>{productItems.description}</p>
                </div>
                <div className='pro-price'>
                  <p>Rs.{productItems.price}</p>
                </div>

                <div>
                  <button className='pro-btn' onClick={() => handleAddProduct(productItems)}>Add to cart</button>
                </div>
              </div>
             
            ))
        }
    </div>
    
  )
}

export default Menu
