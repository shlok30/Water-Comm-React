import React from 'react'
import { useUser } from '../context/user-context'
import { Link ,useNavigate } from 'react-router-dom'
import { useProductListFunction } from '../context/product-listing-context'

const Nav = () => {
    const {state,dispatch} = useUser()
    const productListingObj = useProductListFunction()
    const navigate = useNavigate()
    const sumOfItems = (sum,curr) => sum + curr.qty
    const numberOfCartItems = state.cart.reduce(sumOfItems,0)
    const numberOfWishlistItems = state.wishlist.length
    const handleClick = (e) => {
        if(!state.encodedToken){
            dispatch({type : "ALERT"})
            setTimeout(() => dispatch({type : "ALERT"}),1000)
        }
        else{
            if(e.target.innerText === "shopping_cart"){
                navigate('/cart')
            }
            else{
                navigate('/wishlist')
            }
        }

    }

    const handleUserStatus = (status) => {
        if(status === "Login"){
            navigate("/login")
        }
        else{
            dispatch({type:"LOGOUT"})
        }
    }
    return(
        <nav className = "navigation flex gap-xl align-center full-width">
            <div className="nav-brand"><Link to = "/">Water-Commerce</Link></div>
            <div className = "input-wrapper flex grow-1 flex-center" >
                <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
                <button className="btn btn-secondary" onClick = {(e) => handleUserStatus(e.target.innerText)}>{state.encodedToken ? "Logout" : "Login"}</button>
                <Link to = '/products' className='product-link' onClick = {() => productListingObj.dispatch({type : "RESET"})}>Product Listing</Link>
                <div class = "icon badge" onClick = {handleClick} style = {{cursor : "pointer"}}>
                    <span className="material-icons md-40" >favorite_border</span>
                    <span class = "number top-right">{numberOfWishlistItems}</span>
                </div>
                <div class = "icon badge" onClick = {handleClick} style = {{cursor : "pointer"}}>
	                <span class="material-icons md-40">shopping_cart</span>
	                <span class = "number top-right">{numberOfCartItems}</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav