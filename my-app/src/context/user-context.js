import { createContext, useContext, useReducer } from "react";
import userReducer from "./reducers/userReducer";
import addToCart from "./functions/addToCart";
import updateQuantity from "./functions/updateQuantityInCart";
import deleteProduct from "./functions/deleteFromCart";

const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,{encodedToken : "" , cart : [] , wishlist : [],showLoginAlert : false})
    console.log("user context state",state)
    return(
        <UserContext.Provider value = {{state , dispatch , addToCart , updateQuantity,deleteProduct}}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContext,UserContextProvider,useUser}