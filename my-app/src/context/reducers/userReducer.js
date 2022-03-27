import React from 'react'

const userReducer = (state,{type,payload}) => {
    switch(type){
        case "TOKEN":
            return {...state,encodedToken : payload}
        case "CART":
                return {...state,cart : [...payload]}  
        case "WISHLIST":
            return {...state,wishlist : [...state.wishlist,...payload]}
        default:
            break

    }
}

export default userReducer