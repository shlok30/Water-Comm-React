import React from 'react'
import { useUser } from '../context/user-context'

const CartCard = ({qty,price,author,id,title,rating,category}) => {
    const {state,updateQuantity,dispatch,deleteProduct,addToWishlist,removeFromWishlist} = useUser()
    const encodedToken = state.encodedToken
    const itemExistsInWishlist = state.wishlist.filter((prod) => prod['_id'] === id)
    
    const handleWishlistButton = (e) => {
        const actionType = e.target.innerText
        if(actionType === "Add to Wishlist"){
            addToWishlist({_id: id , title ,author, price , rating ,category},encodedToken,dispatch)
        }
        else{
            removeFromWishlist(id,encodedToken,dispatch)
        }
    }

    return(
        <div className="card-container m1-top flex flex-column gap-m" style = {{width : "100%"}}>
                <div className="horizontal-badge flex no-wrap">
                    <div className="img-container">
                        <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"/>
                    </div>
                    <div className="card-header horizontal-card-header grow-1">
                        <h4 className = "primary-text m2-top">{title}</h4>
                        <p className="card-subtitle m1 secondary-text m2-top" >Rs : {price}</p>
                        <label for="quantity">Quantity:</label>
                        {/* <input type="number" id="quantity" name="quantity" min = '1' value = {qty} onChange = { (e) => updateQuantity(id,state.encodedToken)}  /> */}
                        <span>{qty}</span>
                        <button style = {{width:'1rem'}} onClick = {() => updateQuantity(id,state.encodedToken,'increment',dispatch,qty)}>+</button>
                        <button style = {{width:'1rem'}} disabled = {qty === 1} onClick = {() => updateQuantity(id,state.encodedToken,'decrement',dispatch,qty)}>-</button>
                        <button className = "btn btn-error m2-top full-width" onClick = {() => deleteProduct(id,state.encodedToken,dispatch)}>Remove from Cart</button>
                        <button className = "btn btn-success m2-top full-width" onClick = {handleWishlistButton}>{itemExistsInWishlist.length > 0 ? "Remove from Wishlist" : "Add to Wishlist"}</button>
                    </div>
                </div>
        </div>
            
    )
}

export default CartCard