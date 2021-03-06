import React from 'react'

const userReducer = (state,{type,payload}) => {
    switch(type){
        case "TOKEN":
            return {...state,encodedToken : payload}
        case "CART":
                return {...state,cart : [...payload]}  
        case "WISHLIST":
            return {...state,wishlist : [...payload]}
        case "ALERT":
            return{...state,showLoginAlert : !state.showLoginAlert}
        case "LOGOUT":
            return {...state, encodedToken : "" , cart : [] , wishlist : [],showLoginAlert : false}
        default:
            break

    }
}

export default userReducer