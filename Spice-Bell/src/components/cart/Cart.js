
import './Cart.css'
import { useState } from 'react';

const Cart = ({ cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    const totalPrice = cartItems.reduce((price, item) => price + item.quantity * item.price, 0);
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Order Placed Successfully")
        setIsSubmitted(true)
    }
    
        return(
        
        <div className='cart-items'>
            <div className='cart-items-header'>Cart Item</div>
            <div>

                {cartItems.map((item) => (
                    <div key={item.id} className='cart-items-list'>
                        <img className='cart-items-image'
                            src={item.imageUrl} alt={item.name}
                        />

                        <div className='cart-items-name'>{item.name}</div>
                        <div className='cart-items-function'>
                            <button className='cart-items-add' onClick={() => handleAddProduct(item)}>+</button>
                            <button className='cart-items-remove' onClick={() => handleRemoveProduct(item)}>-</button>

                        </div>
                        <div className='cart-items-price'>
                            {item.quantity} * Rs.{item.price}

                        </div>

                    </div>
                ))}
            </div>
            <div className='cart-items-total-price-name'>
                Total Price
                <div className='cart-items-total-price'> Rs.{totalPrice}</div>

            </div>

             <div className='clear-cart m-3' style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center' }}>
                {cartItems.length >= 1 && (
                    <button className='clear-cart-button' onClick={handleCartClearance}> Clear Cart</button>
                )} 
             </div> 
            
        </div>



    )
}

export default Cart
