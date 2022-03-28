import React from 'react'
import axios from "axios"

const addToCart = ({id,title,author,price},encodedToken,dispatch) => {
    //console.log("From add to cart",{'_id' : id , 'title' : title , 'author' : author , 'price' : price})
    axios
     .post("/api/user/cart",{"product" : { "_id" : id , "title" : title , "author" : author , "price" : price}},{headers :{ 'authorization' : encodedToken}})
     .then((res) => {
        console.log("it was a success",res.data.cart)
        //const cartLastItem = res.data.cart[res.data.cart.length - 1]
        dispatch({type : "CART" , payload : res.data.cart} )
     })
     .catch(err => console.log("Failed",err))
    
}

export default addToCart