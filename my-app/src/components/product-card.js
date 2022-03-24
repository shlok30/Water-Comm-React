import React from 'react'
import { useUser } from '../context/user-context'
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

const ProductCard = ({title,author,price,id}) => {
    const {state,dispatch,addToCart,addToWishlist} = useUser()
    const encodedToken = state.encodedToken
    const navigate = useNavigate()
    const location = useLocation()
    //console.log("Locaton of Product Card",location.pathname)
    
    const handleClick = (dispatch) => {
        if(!encodedToken){
            navigate('/login')
        }
        if(prodExistsInCart.length > 0){
            navigate('/cart')
            return 
        }
        addToCart({id , title ,author, price},encodedToken,dispatch)
        //dispatch({type : "CART" , payload : {id , title ,author, price} })
    }

    const handleWishlistButton = () => {
        if(!encodedToken){
            navigate('/login')
            return
        }
        if(prodExistsInWishlist.length > 0){
            navigate('/wishlist')
            return
        }
        addToWishlist({id,title,author,price},encodedToken,dispatch)
    }

    //checking if product is already present in the cart
    const prodExistsInCart = state.cart.filter((prod) => prod['_id'] === id)
    //checking if product is already present in wishlist
    const prodExistsInWishlist = state.wishlist.filter((prod) => prod['id'] === id)

    return(
        <div className="card-container ">
            <div className="img-container badge">
                <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80" alt = "img"/>
                <span className="badge-icon">New</span>
            </div>
            <div className="card-header m3-top">
                <h4>{title}</h4>
                <p className="card-subtitle m1">By {author}</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext">Rs {price}</p>
            </div>
            <div className="card-footer flex space-between m3-top">
                <button className = {prodExistsInCart.length > 0 ? "btn btn-success full-width" : "btn btn-primary full-width"} onClick = {() => handleClick(dispatch)}>{prodExistsInCart.length > 0 ? "Go to Cart" : "Add to Cart"}</button>
            </div>
            <div className="card-footer flex space-between m1-top">
                <button className = "btn btn-error full-width" onClick = {handleWishlistButton} >{prodExistsInWishlist.length > 0 ? "Go to Wishlist" : "Add to Wishlist"}</button>
            </div>
            
    </div>
    )
}

export default ProductCard