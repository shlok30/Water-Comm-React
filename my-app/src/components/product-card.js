import React from 'react'

const ProductCard = ({title,author,price,category,rating}) => {
    return(
        <div className="card-container ">
            <div className="img-container badge">
                <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80" alt = "img"/>
                <span className="badge-icon">New</span>
            </div>
            <div className="card-header m3-top">
                <h4>{title}</h4>
                <p className="card-subtitle m1">By {author}</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext" style = {{textTransform : "capitalize"}}>{category}</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext">Rating : {rating} Stars</p>
            </div>
            <div className="card-body m3-top">
                <p className="card-subtext">Rs {price}</p>
            </div>
            <div className="card-footer flex space-between m3-top">
                <button className = {prodExistsInCart.length > 0 ? "btn btn-success full-width" : "btn btn-primary full-width"} onClick = {() => handleClick(dispatch)}>{prodExistsInCart.length > 0 ? "Go to Cart" : "Add to Cart"}</button>
            </div>
        </div>
    )
}

export default ProductCard