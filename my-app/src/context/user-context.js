import { createContext, useContext, useReducer } from "react";
import axios from "axios"

const UserContext = createContext()

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

const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,{encodedToken : "" , cart : [] , wishlist : []})
    console.log("user context state",state)
    return(
        <UserContext.Provider value = {{state , dispatch , addToCart , updateQuantity,deleteProduct}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContext,UserContextProvider,useUser}