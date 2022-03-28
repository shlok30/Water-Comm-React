import React from 'react'
import { useProduct } from '../context/product-context'
import { useProductListFunction } from '../context/product-listing-context'
import ProductCard from './product-card'

const Main = () => {
    const {productsList} = useProduct()
    const {state,dispatch} = useProductListFunction()
    const renderProducts = (prodList) => {
        return prodList.map((prod) => <ProductCard key = {prod['_id']} title = {prod.title} author = {prod.author} price = {prod.price} id = {prod['_id']} category = {prod.categoryName} rating = {prod.rating}/>)
    }
    const categoryFilter = (categories) => productsList.filter((item) => categories[item.categoryName])
    
    const ratingFilter = (prodList,rating) => rating ? prodList.filter((item) => parseInt(item.rating,10) >= rating) : [...prodList]

    
    // PREVENT SUBSEQUENT FILTER CALLS WHEN THAT STATE DOESNT CHANGE?
    const sortingFunction = (prodList,sorting) => prodList.sort((a,b) => sorting === 'high' ? b.price - a.price : a.price - b.price )

    

    const priceFilter = (prodList,range) => prodList.filter((item) => parseInt(item.price,10) >= range)

    const categoryFilteredList = categoryFilter(state.category)
    const ratingFilteredList = ratingFilter(categoryFilteredList,state.rating)
    const priceFilteredList = priceFilter(ratingFilteredList,state.priceRange)
    const sortedList = sortingFunction(priceFilteredList,state.sorting)

    return(
        <main className = "main-content padding-m grow-1">
            <strong>Showing All Products</strong>
            <div className = "container center-block flex gap-m space-between">
                {renderProducts(sortedList)}
            </div>
        </main>
    )
}

export default Main