import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
  const navigate = useNavigate();

  const handleScroll = () => {
    navigate("/"); // Navigate to the home page
    setTimeout(() => {
      window.scrollBy(0, 2000); // Scroll down by 2000px
    }, 100); // Delay the scrolling by 100ms to give the page time to load
  };
  return (
    <div>
        <nav>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Loot Cove</h3>
                <Link to="/" className ="genre" onClick={handleScroll}>Sort By Genre</Link>
            </div>
            <div className="navBtns">
              <div>
                <img style={{ height: "55px"}} src="/home.svg" alt="home page icon" />
                <Link to = "/">Home</Link>
              </div>
              <div>
                <img style={{height: "55px" }} src="/cart.svg" alt="Shopping cart icon" />
                <Link to = "/2">Cart</Link>
              </div>
              <div>
                <img style = {{height: "55px"}}src="/checkout.svg" alt="checkout icon" />
                <p>Checkout</p>
              </div>
            </div>
        </nav>
      
    </div>
  )
}

export default NavBar
