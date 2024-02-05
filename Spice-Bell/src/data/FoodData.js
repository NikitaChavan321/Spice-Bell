import cheeseburger from "../data/image/burger.jpg"
import spicyburger from "../data/image/spicy chicken burger.jpg"
import chickenburger from "../data/image/chicken maharaja burger.webp"          
import flurrydessert from "../data/image/black forest flurry.jpg"
import cake from "../data/image/chocolate cake.jpg"
import softserve from "../data/image/fudge.png"
import offerchicken from "../data/image/offer chicken maharaja.webp"     
import tikkiburger from "../data/image/veggie+aloo tikki burger.jpg"
import pizza from "../data/image/pizza1.avif"
import pasta from '../data/image/pasta.jpg'
import fries from "../data/image/fries.jpg"
import sandwich from "../data/image/sandwich.webp"

const FoodData = {
        productItems: [
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
            imageUrl: cake,
            
            
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
          {
            id: 9,
            name: 'Peppy Paneer Pizza',
            description: 'The peppy paneer pizza is made with fresh and soft paneer',
            price: 200,
            imageUrl:pizza ,
          },
          {
            id: 10,
            name: 'White sauce Pasta',
            description: 'Enjoy your classic white sauce pasta, enriched with a generous amount of melted cheese' ,
            price: 150,
            imageUrl:pasta ,
          },
          {
            id: 11,
            name: 'Fries',
            description: 'Enjoy your crunchy fries that are salted to perfection',
            price: 100,
            imageUrl:fries ,
          },
          {
            id: 12,
            name: 'Paneer Tikka Sandwich',
            description: 'Enjoy your paneer tikka sandwich with soft and fresh paneer ',
            price: 120,
            imageUrl:sandwich ,
          },
        ]
    }
    export default FoodData;