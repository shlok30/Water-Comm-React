import React from 'react'
import axios from 'axios'

const removeFromWishlist = (id,encodedToken,dispatch) => {
    console.log("Id from removewishlist",id)
    axios
    .delete(`/api/user/wishlist/${id}`,{headers : { 'authorization' : encodedToken}})
    .then(res => {
        //console.log("Successfully Deleted",res.data.wishlist)
        dispatch({type : "WISHLIST" ,  payload : res.data.wishlist})
    })
    .catch(err => console.log(err => console.log(err)))
}

export default removeFromWishlist