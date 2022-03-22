import React from 'react'
import CartCard from '../components/cart-card'
import Footer from '../components/footer'
import Nav from '../components/nav'
import TransactionDetailsCard from '../components/transaction-card'
import { useUser } from '../context/user-context'



const CartPage = () => {
    const {state:{cart}} = useUser()
    
    const renderCartCard = () => cart.map((prod) => <CartCard key = {prod['_id']} id = {prod['_id']} title = {prod.title} price = {prod.price} qty = {prod.qty} />)

    return(
        <div>
            <Nav />
            <div className="text-m center-text m5-top bold">My Cart</div>
            <div className = "container center-block m5-top flex space-between flex-center">
                {renderCartCard()}
                <div className = "padding-m price">
                    <TransactionDetailsCard />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default CartPage