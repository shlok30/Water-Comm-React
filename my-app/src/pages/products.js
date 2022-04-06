import React from 'react'
import Footer from '../components/footer'
import Main from '../components/main'
import Nav from '../components/nav'
import Sidebar from '../components/sidebar'




const ProductsListing = () => {

    
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