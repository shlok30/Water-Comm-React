import { createContext, useContext, useReducer } from "react";
import userReducer from "./reducers/userReducer";
import addToCart from "./functions/addToCart";
import updateQuantity from "./functions/updateQuantityInCart";
import deleteProduct from "./functions/deleteFromCart";
import addToWishlist from "./functions/addToWishlist";
import removeFromWishlist from "./functions/removeFromWishlist";

const UserContext = createContext()

const UserContextProvider = ({children}) => {
    const [state,dispatch] = useReducer(userReducer,{encodedToken : "" , cart : [] , wishlist : [],showLoginAlert : false})

    return(
        <UserContext.Provider value = {{state , dispatch , addToCart , updateQuantity,deleteProduct ,addToWishlist, removeFromWishlist }}>
            {children}
        </UserContext.Provider>
    )
}

const useUser = () => useContext(UserContext)

export {UserContext,UserContextProvider,useUser}