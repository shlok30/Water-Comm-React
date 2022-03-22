import React from 'react'
import { useUser } from '../context/user-context'

const Nav = () => {
    const {state} = useUser()
    //console.log("Nav state",state)
    const numberOfCartItems = state.cart.length
    return(
        <nav className = "navigation flex gap-xl align-center full-width">
            <div className="nav-brand">Water-Commerce</div>
            <div className = "input-wrapper flex grow-1 flex-center" >
                <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
                <a href = "login.html"><button className="btn btn-secondary">Login</button></a>
                <i className="material-icons cursor-pointer" >favorite_border</i>
                <div class = "icon badge">
	                <span class="material-icons md-40">shopping_cart</span>
	                <span class = "number top-right">{numberOfCartItems}</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav