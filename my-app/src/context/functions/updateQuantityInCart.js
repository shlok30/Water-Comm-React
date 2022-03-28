import React from 'react'
import axios from "axios"

const updateQuantity = (id,encodedToken,updateType,dispatch,qty) => {
    //console.log(encodedToken)
    if(qty === 1 && updateType === 'decrement'){
        console.log("Landed in danger zone")
        return
    }
    else{
        axios
        .post(`/api/user/cart/${id}`,{
            action: {
            type: updateType
            }
      },{headers : { 'authorization' : encodedToken}})
        .then((res) => {
            console.log("It was a success",res.data.cart)
            dispatch({type : "CART" , payload : res.data.cart} )
        })
        .catch(err => console.log(err))
    }
    
}

export default updateQuantity