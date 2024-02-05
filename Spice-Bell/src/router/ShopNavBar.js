import { Link, Outlet} from 'react-router-dom'
 
 const ShopNavBar = () => {
   return (
    <div className='navbar-1'>
        <nav className='navbar navbar-expand-lg ' style={{backgroundColor:'black',color:'primary'}} data-bs-theme='dark' > 
            <h1 className="name " style={{color:'yellow' , fontFamily:'sans-serif'}}>Spice'Bell</h1> 
            <ul className='navbar nav flex-grow-1 justify-content-center'>
                <li className='nav-item'>
                    <Link className='nav-link' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='/'>Home</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='AboutUs'>AboutUs</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large', transition: '0.3s ease-in-out'}} to='ContactUs'>ContactUs</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link nav_hover' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large' }} to='SignUp'>SignUp</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link'style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='Login'>Login</Link>
                </li>
                <li className='nav-item'>
                    <Link className='nav-link'style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='menu'>Menu</Link>
                </li>
                
                <li className='nav-item'>
                    <Link className='nav-link' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='myorder'>MyOrder</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='feedback'>Feedback</Link>
                </li>

                <li className='nav-item'>
                    <Link className='nav-link' style={{color:'white', fontFamily:'Cambria, Cochin, Georgia, Times, sans-serif' , fontWeight:'bold', fontSize:'x-large'}} to='cart'>

                    <i class="fa-solid fa-cart-shopping" style={{color:'#B197FC', margin:'15px'}}></i>
                    </Link>
                </li>
            </ul>
        </nav>
        <Outlet/>
    </div>
   )
 }
 
 export default ShopNavBar