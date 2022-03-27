import React from 'react'
import axios from "axios"

const deleteProduct = (id,encodedToken,dispatch) => {
    //console.log("Clicked")
    axios
    .delete(`/api/user/cart/${id}`,{headers : { 'authorization' : encodedToken}})
    .then((res) => {
        console.log("Successfully Deleted",res.data)
        dispatch({type : "CART" , payload : res.data.cart} )
    })
    .catch(err => console.log(err))
}

export default deleteProduct