import React from 'react'
import Categories from './sidebar-components/categories-component'
import Rating from './sidebar-components/rating'
import Range from './sidebar-components/range'
import RadioSort from './sidebar-components/radio-sort'


const Sidebar = () => {
    return(
        <aside className = "side-bar">
            <div className = "flex space-between padding-m">
                <strong>Filter</strong>
                <p>Clear</p>
            </div>
            <Range />
            <div className = "padding-m m2-top">
                <div className = "text-s bold">Category</div>
                <Categories categories={"Fiction"}/>
                <Categories categories={"Horror"}/>
                <Categories categories={"Non-Fiction"}/>
            </div>
            <div className= "padding-m m2-top">
                <div className="text-s bold">Rating</div>
                <Rating rating = {4} />
                <Rating rating = {3} />
                <Rating rating = {2} />
                <Rating rating = {1} />
            </div>
            <div className = "padding-m m2-top">
                <div className="text-s bold">Sort By</div>
                <RadioSort sorting = {"low"}/>
                <RadioSort sorting = {"high"}/>
            </div>
        </aside>
    )
}

export default Sidebar