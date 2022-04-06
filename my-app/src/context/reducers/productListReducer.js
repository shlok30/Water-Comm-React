import React from 'react'

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
        case "RESET":
            return ({...state,sorting : "",rating : "", priceRange : 1000 , category : {fiction : true , 'non-fiction' : true , horror: true}})
        case "CATEGORY_RESET":
            return ({...state , category : {fiction : false , 'non-fiction' : false , horror : false}})
        default:
            break;
    }
}

export default productListReducer