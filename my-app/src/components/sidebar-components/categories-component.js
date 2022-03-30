import React from 'react'
import { useProductListFunction } from '../../context/product-listing-context'

const Categories = ({categories}) => {
    const {state,dispatch} = useProductListFunction()
    return(
        <div>
            <div className = "padding-s-block m2-top">
                <input type = "checkbox" checked = {state.category[categories.toLowerCase()] === true} onChange = {() => dispatch({type : "CATEGORY" , payload : categories.toLowerCase()})} /> {categories}
            </div>
        </div>
        
    )
}

export default Categories