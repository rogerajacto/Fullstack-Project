import { Link } from "wouter";



function NavegationBar() {
    return(
        <>
        <nav className="navegation-menu">
            
          

           

            <ul className="navegation-items-list">
            <Link href="/"><li>  <img src="https://50rebels.com/cdn/shop/products/frontfender.jpg?v=1672758133&width=1080" alt="logo" className="logo"></img></li></Link>

                <li id ="name">25 Good Guys</li>

                <Link href="/">
                <li className="nav-item"> 
                    
                     <div> <i className="fa-solid fa-house"></i></div>
                     Homepage
                </li> 
                </Link>
                
                <Link href="/customize">
                <li className="nav-item">
                    <div><i class="fa-solid fa-screwdriver-wrench"></i></div>
                     Customize Bike
                </li>
                </Link>

  
                <Link href="/cart">
                    
                    <li className="nav-item">
                    <div><i class="fa-solid fa-cart-shopping"></i></div> 
                    Shoppping Cart
                </li>
                </Link>
  
                <Link href="/login">
                    
                    <li className="nav-item">
                    <div><i class="fa-regular fa-user"></i></div> 
                    User
                </li>
                </Link>
            </ul>


            <ul className="navegation-items-responsive">
                
                <li>  <img src="https://logomaker.designfreelogoonline.com/media/productdesigner/logo/resized/000816__travel_agency_logo_design_templates_free_travel_logo_maker-01.png" alt="logo" className="logo"></img></li>

                <Link href="/">
                <li className="nav-item"> 
                    
                     <div> <i className="fa-solid fa-house"></i></div>
                </li> 
                </Link>
                
                <Link href="/add-location">
                <li className="nav-item">
                    <div><i className="fa-solid fa-map-pin"></i></div>
                </li>
                </Link>

  
                <Link href="/about-me">
                    <li className="nav-item">
                    <div><i className="fa-solid fa-user"></i></div> 
                </li>
                </Link>
            </ul>
        </nav>

        </>
    )
    
}

export default NavegationBar;