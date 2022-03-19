import React from 'react'

const HorizontalCard = ({title}) => {
    return(
        <div className="card-container flex flex-column gap-m grow-1">
            <div className="horizontal-badge flex no-wrap">
                <div className="img-container badge">
                    <img src="https://images.unsplash.com/photo-1643313947128-849e4da4fd5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2142&q=80"/>
                </div>
                <div className="card-header horizontal-card-header flex flex-column grow-1 flex-center gap-m">
                    <h4 className = "primary-text">New Arrivals</h4>
                    <p className="card-subtitle m1 secondary-text">{title}</p>
                </div>
            </div>
        </div>
    )
}

export default HorizontalCard