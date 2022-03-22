import React from 'react'
import { useUser } from '../context/user-context'

const TransactionDetailsCard = () => {
    const {state} = useUser()
    const totalSumOfCartItemsReducer = (sum,curr) => sum + parseInt(curr.price,10)*curr.qty
    const totalSumOfCartItems = state.cart.reduce(totalSumOfCartItemsReducer,0)
    const deliveryCharge = 250
    return(
        <div>
            <div class = "primary-text m2-top bold">Price Details</div>
            <hr class = "m1-top" />
            <div class = "flex gap-m space-between m3-top">
                <p class="secondary-text">Price</p>
                <p>Rs {totalSumOfCartItems}</p>
            </div>
            <div class = "flex gap-m space-between m3-top">
                <p class="secondary-text">Discount</p>
                <p>$0</p>
            </div>
            <div class = "flex gap-m space-between m3-top" >
                <p class="secondary-text">Delivery Chargers</p>
                <p>Rs {deliveryCharge}</p>
            </div>
            <p class="m2-top">You saved $0 on this purchase</p>
            <hr class = "m1-top" />
            <div class = "flex gap-m space-between m3-top">
                <p class="primary-text bold">Total</p>
                <p class = "bold">Rs {totalSumOfCartItems + deliveryCharge}</p>
            </div>
            <button class = "btn btn-primary full-width m2-top">Place Order</button>
        </div>
    )
}

export default TransactionDetailsCard