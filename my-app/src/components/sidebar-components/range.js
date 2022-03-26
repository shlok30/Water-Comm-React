import React, { useContext } from 'react'
import { useProductListFunction } from '../../context/product-listing-context'

const Range = () => {
    const {state,dispatch} = useProductListFunction()
    return(
        <div className = "padding-m m2-top">
            <div className = "text-s bold">Price : Above {state.priceRange}</div>
            <div>
                <input type="range" min="1000" max="5000" className = "slider m2-top full-width" value = {state.priceRange} onChange = {(e) => dispatch({type:"RANGE",payload:e.target.value})}/>
            </div> 
        </div>
    )
}

export default Range