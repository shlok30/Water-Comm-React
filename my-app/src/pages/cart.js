import React from 'react'
import { Link } from 'react-router-dom'
import CartCard from '../components/cart-card'
import Footer from '../components/footer'
import Nav from '../components/nav'
import TransactionDetailsCard from '../components/transaction-card'
import { useUser } from '../context/user-context'



const CartPage = () => {
    const {state:{cart}} = useUser()
    console.log("From cart page",cart)
    const renderCartCard = () => cart.map((prod) => <CartCard key = {prod['_id']} id = {prod['_id']} title = {prod.title} price = {prod.price} qty = {prod.qty} category = {prod.category} rating = {prod.rating} author = {prod.author} />)

    return(
        <div style = {{height : "100vh",position : "relative"}}>
            <Nav />
            <Link to = "/products" className='router-link padding-m'>Back to Products</Link>
            <div className="text-m center-text m5-top bold">My Cart</div>
            {cart.length > 0 ? 
            <div className = "container center-block m5-top flex space-between flex-center">
                <div style = {{width:"40%"}}>{renderCartCard()}</div>
                <div className = "padding-m price">
                    <TransactionDetailsCard />
                </div>
            </div> :
            <div className="container center-block m5-top flex flex-center">
                <div className="text-m center-text m5-top bold">No Items in Cart</div>
            </div>
            }
            
            <Footer lengthOfItems = {cart.length} />
        </div>
    )
}

export default CartPage