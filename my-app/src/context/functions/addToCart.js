import React from 'react'
import axios from "axios"

const addToCart = ({id,title,author,price,category,rating,thumbnail},encodedToken,dispatch) => {
   
    axios
     .post("/api/user/cart",{"product" : { "_id" : id , title ,  author ,  price , category ,  rating, thumbnail}},{headers :{ 'authorization' : encodedToken}})
     .then((res) => {
        //console.log("it was a success",res.data.cart)
        dispatch({type : "CART" , payload : res.data.cart} )
     })
     .catch(err => console.log("Failed",err))
    
}

export default addToCart