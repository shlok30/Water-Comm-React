import React from 'react';

const CardWithOverlayText = ({category}) => {
    return(
        <div class="card-container">
            <a href="product-page.html">
                <div class="img-container badge flex flex-center">
                    <img
                    src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"
                    alt = "card-image"
                    />
                    <span class="badge-icon">New</span>
                    <span class="overlay-text">{category}</span>
                </div>
            </a>  
        </div>
    )
}

export default CardWithOverlayText