import React from 'react'
import Nav from '../components/nav'
import CardWithOverlayText from '../components/card-text-overlay'
import HorizontalCard from '../components/horizontal-card'
import Footer from '../components/footer'
import { useUser } from '../context/user-context'
import { Link } from 'react-router-dom'

const Homepage = () => {
    const {state : {showLoginAlert}} = useUser()
    return(
        <div>
            <Nav />
            {showLoginAlert ? <div class="alert error"><strong>Error!</strong> You need to Login to use this Functionality!</div> : ""}
            <section className = "preview container center-block flex space-between m5-top">
                <CardWithOverlayText category = "Fiction" />
                <CardWithOverlayText category = "Horror" />
                <CardWithOverlayText category = "Non-Fiction"/>
            </section>
            <section className = "hero container center-block m5-top">
                <div className = "img-container">
                    <Link to = "/products"><img src = "https://c4.wallpaperflare.com/wallpaper/365/101/293/frank-miller-batman-batman-year-one-artwork-wallpaper-preview.jpg" alt = "Hero" /></Link>          
                </div>
            </section>
            <section className = "cards-preview container center-block flex gap-m m5-top" >
                <HorizontalCard title = "The Godfather"/>
                <HorizontalCard title = "Think and Grow Rich" />
            </section>
            <Footer />
        </div>
    )
}

export default Homepage