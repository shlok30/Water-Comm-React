import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import ProductCard from '../components/product-card'
import { useUser } from '../context/user-context'
import { Link } from 'react-router-dom'

const WishlistPage = () => {
    const {state,dispatch} = useUser()
    const renderProductCards = () => state.wishlist.map(({_id,title,author,price,category,rating}) => <ProductCard title = {title} id = {_id} author = {author} price = {price} key = {_id} category = {category} rating = {rating} /> ) 
    return(
        <div>
            <Nav />
            <Link to = "/products" className='router-link padding-m'>Back to Products</Link>
            <div class = "primary-text bold text-m center-text m3-top">My Wishlist</div>
            <div class="container center-block m5-top flex gap-m space-around" style = {{position: "relative"}}>
                {renderProductCards()}
            </div>
            <Footer />
        </div>
        
    )
}

export default WishlistPage