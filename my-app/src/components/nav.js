import React from 'react'
import { useUser } from '../context/user-context'
import { Link } from "react-router-dom";

const Nav = () => {
    const {state} = useUser()
    //console.log("Nav state",state)
    const sumOfItems = (sum,curr) => sum + curr.qty
    const numberOfCartItems = state.cart.reduce(sumOfItems,0)
    const numberOfWishlistItems = state.wishlist.length
    return(
        <nav className = "navigation flex gap-xl align-center full-width">
            <div className="nav-brand">Water-Commerce</div>
            <div className = "input-wrapper flex grow-1 flex-center" >
                <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
                <a href = "login.html"><button className="btn btn-secondary">Login</button></a>
                <div class = "icon badge">
                    <Link to = "/wishlist">
	                    <span class="material-icons md-40">favorite_border</span>
	                    <span class = "number top-right">{numberOfWishlistItems}</span>
                    </Link>
                </div>
                <div class = "icon badge">
                    <Link to = "/cart">
	                    <span class="material-icons md-40">shopping_cart</span>
	                    <span class = "number top-right">{numberOfCartItems}</span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav