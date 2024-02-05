
import React, { useState } from 'react'
import ShopRouter from './router/ShopRouter';
import data from "./data/FoodData";
import Footer from './components/footer/Footer';


const App = () => {
   const {productItems} = data;
   const [cartItems,setCartItems]=useState([]);

   const handleAddProduct = (product) =>{
      const ProductExit = cartItems.find((item) => item.id === product.id);
  if(ProductExit){
   setCartItems(cartItems.map((item) => item.id === product.id ?
   {...ProductExit,quantity:ProductExit.quantity + 1}: item
   ));
  }  else{
      setCartItems([...cartItems, {...product,quantity: 1}]);
   }
  };
   
   const handleRemoveProduct = (product)=>{
      const ProductExit = cartItems.find((item)=> item.id === product.id);
      if(ProductExit.quantity === 1){
         setCartItems(cartItems.filter((item) => item.id !== product.id));
      } else{
         setCartItems(
            cartItems.map((item) => item.id === product.id ?{...ProductExit,quantity:ProductExit.quantity -1}
            : item
            ) 
         );
      }
   };

   const handleCartClearance = () =>{
      setCartItems([]);
   }

    return (
      
      <div>
          <ShopRouter productItems={productItems} cartItems={cartItems}
           handleAddProduct={handleAddProduct} 
           handleRemoveProduct={handleRemoveProduct} 
           handleCartClearance={handleCartClearance}
           />
          <Footer/>
      </div>
   );
}


export default App









































// import './App.css';
// import Footer from './components/footer/Footer';
// import ShopRouter from './router/ShopRouter';

// const App = () => {

//   return (
//     <div className='App'>
//         <ShopRouter />
//         <Footer />

//     </div>
   

//   );
// }

// export default App;
