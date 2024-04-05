import React from 'react'
const NavBar = () => {
  return (
    <div>
        <nav>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>Loot Cove</h3>
                <p id = "genre">Genre &darr;</p>
            </div>
            <div className="navBtns">
              <div>
                <img style={{ height: "55px"}} src="/home.svg" alt="home page icon" />
                <p>Home</p>
              </div>
              <div>
                <img style={{height: "55px" }} src="/cart.svg" alt="Shopping cart icon" />
                <p>Cart</p>
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
