import React from 'react'
import { useUser } from '../context/user-context'
import { useNavigate , useLocation } from 'react-router-dom'

const ProductCard = ({title,author,price,id,category,rating,thumbnail}) => {
    const {state,dispatch,addToCart,addToWishlist,removeFromWishlist} = useUser()
    const encodedToken = state.encodedToken
    const navigate = useNavigate()
    const location = useLocation()

    const handleClick = (dispatch) => {
        if(!encodedToken){                   //User is not logged in
            dispatch({type:"ALERT"})
            setTimeout(() => dispatch({type : "ALERT"}),1000)
        }
        else{                                // User is logged in
            if(prodExistsInCart.length > 0){// User is logged in and item has already been added to cart
                navigate('/cart')
            }
            else{                            // User is logged in and item has not been added to cart
                addToCart({id , title ,author, price, category, rating, thumbnail},encodedToken,dispatch)
            }
        }  
    }

    const handleWishlistButton = (e) => {
        const typeOfAction = e.target.innerText
        if(!encodedToken){
            dispatch({type:"ALERT"})
            setTimeout(() => dispatch({type : "ALERT"}),1000)
        }
        else{
            
            if(typeOfAction === "Go to Wishlist"){
                navigate('/wishlist')
            }
            else if(typeOfAction === "Add to Wishlist"){
                addToWishlist({_id : id ,title,author,price,category,rating,thumbnail},encodedToken,dispatch)
            }
            else{
                removeFromWishlist(id,encodedToken,dispatch)
            }
        }
        
        
    }

    //checking if product is already present in the cart
    const prodExistsInCart = state.cart.filter((prod) => prod['_id'] === id)

    //checking if product is already present in wishlist
    const prodExistsInWishlist = state.wishlist.filter((prod) => prod['_id'] === id)

    return(
        <div className="card-container ">
            <div className="img-container badge fixed-img-height">
                <img src={thumbnail} alt = "img"/>
                <span className="badge-icon">New</span>
            </div>
            <div className="card-header m3-top">
                <h4>{title}</h4>
                <p className="card-subtitle m1">By {author}</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext" style = {{textTransform : "capitalize"}}>{category}</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext">Rating : {rating} Stars</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext">Rs {price}</p>
            </div>
            <div className="card-footer flex space-between m3-top">
                <button className = {prodExistsInCart.length > 0 ? "btn btn-success full-width" : "btn btn-primary full-width"} onClick = {() => handleClick(dispatch)}>{prodExistsInCart.length > 0 ? "Go to Cart" : "Add to Cart"}</button>
            </div>
            <div className="card-footer flex space-between">
                <button className = "btn btn-error full-width" onClick = {handleWishlistButton}>{location.pathname === "/wishlist" ? "Remove from Wishlist" : prodExistsInWishlist.length > 0 ? "Go to Wishlist" : "Add to Wishlist"}</button>
            </div>
    </div>
    )
}

export default ProductCard