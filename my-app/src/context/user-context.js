import { createContext, useContext, useReducer } from "react";
import axios from "axios"

const UserContext = createContext()

const userReducer = (state,{type,payload}) => {
    switch(type){
        case "TOKEN":
            return {...state,encodedToken : payload}
        case "CART":
            if(payload.length > 0){
                return {...state,cart : [...payload]}
            }
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

/*const updateQuantity = (qty,id,encodedToken) => {
    //console.log(encodedToken)
    console.log(id)
    axios
     .post(`/api/user/cart/:${id}`,{
        action: {
          type: "increment"
        }
      },{headers : { 'authorization' : encodedToken}})
     .then((res) => console.log("It was a success",res.data))
     .catch(err => console.log(err))
} */


const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,{encodedToken : "" , cart : [] , wishlist : []})
    console.log("user context state",state)
    return(
        <UserContext.Provider value = {{state , dispatch , addToCart}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContext,UserContextProvider,useUser}