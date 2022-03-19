import React, { createContext, useContext, useReducer } from 'react'

const ProductListingContext = createContext()

const productListReducer = (state,{type,payload}) => {
    console.log("Type",type,"Payload",payload)
    switch(type){
        case "SORTING":
            return ({...state,sorting : payload})
        case "CATEGORY":
            return ({...state , category : {...state['category'] , [payload] : !state.category[payload]} })
        case "RATING":
            return ({...state,rating : payload})
        case "RANGE":
            return ({...state,priceRange: payload})
        default:
            break;
    }
}


const ProductListingContextProvider = ({children}) => {
    const [state , dispatch] = useReducer(productListReducer,{category : {fiction : true , 'non-fiction' : true , horror: true} , rating : "" , sorting : "" , priceRange : 1000})
    return(
        <ProductListingContext.Provider value = {{state,dispatch}} >
            {children}
        </ProductListingContext.Provider>
    )
}

const useProductListFunction = () => useContext(ProductListingContext)

export {ProductListingContextProvider,ProductListingContext,useProductListFunction}
