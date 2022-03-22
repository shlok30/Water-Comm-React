import React from 'react'

const TransactionDetailsCard = () => {
    return(
        <div>
            <div class = "primary-text m2-top bold">Price Details</div>
            <hr class = "m1-top" />
            <div class = "flex gap-m space-between m3-top">
                <p class="secondary-text">Price</p>
                <p>$200</p>
            </div>
            <div class = "flex gap-m space-between m3-top">
                <p class="secondary-text">Discount</p>
                <p>$0</p>
            </div>
            <div class = "flex gap-m space-between m3-top" >
                <p class="secondary-text">Delivery Chargers</p>
                <p>$50</p>
            </div>
            <p class="m2-top">You saved $0 on this purchase</p>
            <hr class = "m1-top" />
            <div class = "flex gap-m space-between m3-top">
                <p class="primary-text bold">Total</p>
                <p class = "bold">$250</p>
            </div>
            <button class = "btn btn-primary full-width m2-top">Place Order</button>
        </div>
    )
}

export default TransactionDetailsCard