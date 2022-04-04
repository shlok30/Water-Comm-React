import React from 'react';
import { useProductListFunction } from '../context/product-listing-context';
import { useNavigate } from 'react-router-dom'

const CardWithOverlayText = ({category}) => {

    const {dispatch} = useProductListFunction()
    const navigate = useNavigate()

    const handleClick = () => {
        dispatch({type : "CATEGORY_RESET"})
        dispatch({type : "CATEGORY" , payload : category.toLowerCase()})
        navigate('/products')
    }

    return(
        <div className="card-container cursor-pointer" onClick = {handleClick}>
            <div className="img-container badge flex flex-center">
                <img
                    src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"
                    alt = "card-image"
                />
                <span className="badge-icon">New</span>
                <span className="overlay-text">{category}</span>
            </div>
        </div>
    )
}

export default CardWithOverlayText