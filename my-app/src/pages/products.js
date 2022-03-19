import React from 'react'
import Footer from '../components/footer'
import Main from '../components/main'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'
import { useProductListFunction } from '../context/product-listing-context'



const ProductsListing = () => {
    const {state , dispatch} = useProductListFunction()
    console.log("Product Listing Page State",state)
    return(
        <div>
            <Nav />
            <div className="wrapper flex no-wrap">
                <Sidebar />
                <Main />
            </div>
            <Footer />
        </div>
    )
}

export default ProductsListing