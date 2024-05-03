import { Link } from "wouter";



function NavegationBar() {
    return(
        <>
        <nav className="navegation-menu">
            
          

           

            <ul className="navegation-items-list">
                <li>  <img src="https://50rebels.com/cdn/shop/files/50rebels-r-series-naked-mattblack2_1800x1800.jpg?v=1711980030" alt="logo" className="logo"></img></li>

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

  
                <Link href="/">
                    
                    <li className="nav-item">
                    <div><i class="fa-solid fa-cart-shopping"></i></div> 
                    Shoppping Cart
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