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
            return {...state,wishlist : [...payload]} // confirm if we update the entire state everytime or only append the latest item
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

const addToWishlist = (product,encodedToken,dispatch) => {
    console.log("Wishlist clicked",product)
    axios
    .post("/api/user/wishlist",{"product" : product},{headers : { 'authorization' : encodedToken}})
    .then((res) => {
        console.log("successfully added to Wislist",res.data)
        dispatch({type : "WISHLIST" , payload : res.data.wishlist})
    })
    .catch((err) => console.log(err))
}

const removeFromWishlist = (id,encodedToken,dispatch) => {
    console.log("Id from removewishlist",id)
    axios
    .delete(`/api/user/wishlist/${id}`,{headers : { 'authorization' : encodedToken}})
    .then(res => {
        console.log("Successfully Deleted",res.data.wishlist)
        dispatch({type : "WISHLIST" ,  payload : res.data.wishlist})
    })
    .catch(err => console.log(err => console.log(err)))
}

const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,{encodedToken : "" , cart : [] , wishlist : []})
    console.log("user context state",state)
    return(
        <UserContext.Provider value = {{state , dispatch , addToCart , updateQuantity, deleteProduct , addToWishlist, removeFromWishlist }}>
            {children}
        </UserContext.Provider>
    )
}


const useUser = () => useContext(UserContext)

export {UserContext,UserContextProvider,useUser}