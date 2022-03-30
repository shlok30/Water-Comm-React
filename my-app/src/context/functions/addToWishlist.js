import React from 'react'
import axios from 'axios'

const addToWishlist = (product,encodedToken,dispatch) => {
    
    axios
    .post("/api/user/wishlist",{"product" : product},{headers : { 'authorization' : encodedToken}})
    .then((res) => {
        console.log("successfully added to Wislist",res.data)
        dispatch({type : "WISHLIST" , payload : res.data.wishlist})
    })
    .catch((err) => console.log(err))
}

export default addToWishlist