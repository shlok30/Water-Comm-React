import React from 'react'
import Footer from '../components/footer'
import Nav from '../components/nav'
import ProductCard from '../components/product-card'

const WishlistPage = () => {
    return(
        <div>
            <Nav />
            <div class = "primary-text bold text-m center-text m3-top">My Wishlist</div>
            <div class="container center-block m5-top flex gap-m space-between" style = {{position: "relative"}}>
                <ProductCard title = "XYZ" price = "2000" author = "Shlok" />
                <ProductCard title = "XYZ" price = "2000" author = "Shlok" />
                <ProductCard title = "XYZ" price = "2000" author = "Shlok" />
                <ProductCard title = "XYZ" price = "2000" author = "Shlok" />
                <ProductCard title = "XYZ" price = "2000" author = "Shlok" />
                <ProductCard title = "XYZ" price = "2000" author = "Shlok" />
            </div>
            <Footer />
        </div>
        
    )
}

export default WishlistPage