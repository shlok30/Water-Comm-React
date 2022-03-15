import React from 'react'
import Nav from '../components/nav'
import CardWithOverlayText from '../components/card-text-overlay'
import HorizontalCard from '../components/horizontal-card'
import Footer from '../components/footer'

const Homepage = () => {
    return(
        <div>
            <Nav />
            <section className = "preview container center-block flex space-between m5-top">
                <CardWithOverlayText category = "Fiction" />
                <CardWithOverlayText category = "Horror" />
                <CardWithOverlayText category = "Non-Fiction"/>
            </section>
            <section class = "hero container center-block m5-top">
                <div class = "img-container">
                    <a href = "product-page.html"><img src = "https://c4.wallpaperflare.com/wallpaper/365/101/293/frank-miller-batman-batman-year-one-artwork-wallpaper-preview.jpg" alt = "Hero" /></a>           
                </div>
            </section>
            <section class = "cards-preview container center-block flex gap-m m5-top" >
                <HorizontalCard title = "The Godfather"/>
                <HorizontalCard title = "Think and Grow Rich" />
            </section>
            <Footer />
        </div>
    )
}

export default Homepage