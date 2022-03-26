import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import ProductCard from '../components/product-card'
import { useUser } from '../context/user-context'

const WishlistPage = () => {
    const {state,dispatch} = useUser()
    const renderProductCards = () => state.wishlist.map(({id,title,author,price}) => <ProductCard title = {title} id = {id} author = {author} price = {price} key = {id} /> ) 
    return(
        <div>
            <Nav />
            <div class = "primary-text bold text-m center-text m3-top">My Wishlist</div>
            <div class="container center-block m5-top flex gap-m space-between" style = {{position: "relative"}}>
                {renderProductCards()}
            </div>
            <Footer />
        </div>
        
    )
}

export default WishlistPage