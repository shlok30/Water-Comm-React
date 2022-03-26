import React from 'react'
import { useProductListFunction } from '../../context/product-listing-context'

const RadioSort = ({sorting}) => {
    const {state,dispatch} = useProductListFunction()
    console.log("Sort state",state.sorting,"Prop",sorting)
    return(
        <div className = "padding-s-block m2-top flex">
            <input type = "radio" className = "radio-btn" name = "sorting" value = {sorting} checked = {sorting === state.sorting} onChange = {() => dispatch({type:"SORTING",payload:sorting})} />
            <p className = "grow-1" style={{textTransform : 'capitalize'}}>{sorting} to {sorting === "low" ? "high" : "Low"}</p>
        </div>
    )
}

export default RadioSort