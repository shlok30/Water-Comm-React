import React, { createContext, useContext, useReducer } from 'react'
import productListReducer from './reducers/productListReducer'

const ProductListingContext = createContext()

const ProductListingContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(productListReducer,{category : {fiction : true , 'non-fiction' : true , horror: true} , rating : "" , sorting : "" , priceRange : 1000})
    console.log(state)
    return(
        <ProductListingContext.Provider value = {{state,dispatch}} >
            {children}
        </ProductListingContext.Provider>
    )
}

const useProductListFunction = () => useContext(ProductListingContext)

export {ProductListingContextProvider,ProductListingContext,useProductListFunction}