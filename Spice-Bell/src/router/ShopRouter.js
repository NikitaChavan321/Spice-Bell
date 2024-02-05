import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ShopNavBar from './ShopNavBar'
import Home from '../components/Home'
import AboutUs from '../components/aboutus/AboutUs'
import ContactUs from '../components/contactus/ContactUs'
import Signup from '../components/signup/Signup'
import Login from '../components/login/Login'
import Footer from '../components/footer/Footer'
import Feedback from '../components/feedbackform/Feedback (1)'
import MyOrder from '../components/myorder/MyOrder'
import Menu from '../components/menu/Menu'
import Cart from '../components/cart/Cart'



const ShopRouter = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<ShopNavBar />}>
                <Route path='/' element={<Home/>}/>
                <Route path='/aboutus' element={<AboutUs/>}/>
                <Route path='/contactus' element={<ContactUs/>}/>
                <Route path='/feedback'element={<Feedback/>}/>
                <Route path='/myorder' element={<MyOrder/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/menu' element={<Menu productItems={productItems}  handleAddProduct={handleAddProduct}  />}/>
                <Route path='/cart' element={<Cart cartItems={cartItems} 
                handleAddProduct={handleAddProduct} 
                handleRemoveProduct={handleRemoveProduct}
                handleCartClearance={handleCartClearance}
                />}/>
                <Route path='/footer' element={<Footer/>}/>
                </Route>
            </Routes>
        </BrowserRouter >
    )
}

export default ShopRouter