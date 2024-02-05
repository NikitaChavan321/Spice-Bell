
import cheeseburger from "../data/image/burger.jpg"
import spicyburger from "../data/image/spicy chicken burger.jpg"
import chickenburger from "../data/image/chicken maharaja burger.jpg"
import flurrydessert from "../data/image/black forest flurry.jpg"
import chocolatecake from "../data/image/chocolate cake.jpg"
import softserve from "../data/image/soft serve hot fudge.jpg"
import offerchicken from "../data/image/offer chicken maharaja.jpg"
import tikkiburger from "../data/image/veggie+aloo tikki burger.jpg"
import React, { Component } from 'react'
export const DataContext = React.createContext();
export class DataProvider extends Component {

    state = {
        products: [
          {
            id: 1, 
            name: 'Cheese Burger chicken',
            description:'The Delicious McCheese Burger Chicken is a burger with sinfully oozing cheesy veg patty ',
            price: 281,
            imageUrl: cheeseburger ,
            
          },
          {
            id: 2,
            name: 'spicy chicken burger',
            description: 'Delicious beef patty with fresh veggies and special sauce.',
            price: 200,
            imageUrl: spicyburger,
            
          },
          {
            id: 3,
            name: 'chicken maharaja burger',
            description: 'Enjoy the tallest burgers innovated by us. Created with chunky juicy grilled chicken patty paired.',
            price: 258,
            imageUrl: chickenburger,
           
          },
          {
            id: 4,
            name: 'Blank forest Flurry',
            description: 'A sweet treat to suit your every mood',
            price: 115,
            imageUrl: flurrydessert,
           
          },
          {
            id: 5,
            name: 'Chocolate Express Cake',
            description: 'This chocolate cake is topped with chocolate shavings and is perfect for all chocolate lovers',
            price: 200,
            imageUrl: chocolatecake,
            
          },
          {
            id: 6,
            name: 'Soft Serve Hot Fudge ',
            description: 'A sinful delight, soft serve topped with delicious, gooey hot chocolate fudge. ',
            price: 65,
            imageUrl: softserve,
          
          },
          {
            id: 7,
            name: ' offer chicken maharaja',
            description: 'Enjoy a double decker Chicken Maharaja Mac + Fries (M) + Drink of your Choice ',
            price: 385,
            imageUrl: offerchicken,
          
          },
          {
            id: 8,
            name: ' veggie+aloo tikki burger',
            description: 'Enjoy a double decker Chicken Maharaja Mac + Drink of your Choice ',
            price: 230,
            imageUrl:tikkiburger ,
         
          },
        ],
         
        cart: [],
        total: 0
        
    };

    addCart = (id) =>{
        const {products, cart} = this.state;
        const check = cart.every(item =>{
            return item._id !== id
        })
        if(check){
            const data = products.filter(product =>{
                return product._id === id
            })
            this.setState({cart: [...cart,...data]})
        }else{
            alert("The product has been added to cart.")
        }
    };

    reduction = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count === 1 ? item.count = 1 : item.count -=1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    increase = id =>{
        const { cart } = this.state;
        cart.forEach(item =>{
            if(item._id === id){
                item.count += 1;
            }
        })
        this.setState({cart: cart});
        this.getTotal();
    };

    removeProduct = id =>{
        if(window.confirm("Do you want to delete this product?")){
            const {cart} = this.state;
            cart.forEach((item, index) =>{
                if(item._id === id){
                    cart.splice(index, 1)
                }
            })
            this.setState({cart: cart});
            this.getTotal();
        }
       
    };

    getTotal = ()=>{
        const{cart} = this.state;
        const res = cart.reduce((prev, item) => {
            return prev + (item.price * item.count);
        },0)
        this.setState({total: res})
    };
    
    componentDidUpdate(){
        localStorage.setItem('dataCart', JSON.stringify(this.state.cart))
        localStorage.setItem('dataTotal', JSON.stringify(this.state.total))
    };

    componentDidMount(){
        const dataCart = JSON.parse(localStorage.getItem('dataCart'));
        if(dataCart !== null){
            this.setState({cart: dataCart});
        }
        const dataTotal = JSON.parse(localStorage.getItem('dataTotal'));
        if(dataTotal !== null){
            this.setState({total: dataTotal});
        }
    }
   

    render() {
        const {products, cart,total} = this.state;
        const {addCart,reduction,increase,removeProduct,getTotal} = this;
        return (
            <DataContext.Provider >
            value={{products, addCart, cart, reduction,increase,removeProduct,total,getTotal}}
                {this.props.children}
            </DataContext.Provider>
        )
    }
}