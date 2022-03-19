import React from 'react'
import { useProductListFunction } from '../../context/product-listing-context'

const Rating = ({rating}) => {
    const {state,dispatch} = useProductListFunction()
    //console.log("Rating state",state.rating)
    return(
        <div>
            <div className = "padding-s-block m2-top flex">
                <input type = "radio" className = "radio-btn center-text" name = "rating" value = {rating} onChange = {() => dispatch({type : "RATING" , payload : rating})}/>
                <p className = "grow-1">{rating} Stars and Above</p>
            </div>
        </div>
    )
}

export default Rating