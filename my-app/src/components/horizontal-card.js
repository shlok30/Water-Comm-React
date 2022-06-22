import React from 'react'

const HorizontalCard = ({title,thumbnail}) => {
    return(
        <div className="card-container flex flex-column gap-m grow-1 horizontal-card-container">
            <div className="horizontal-badge flex no-wrap">
                <div className="img-container badge fixed-img-height">
                    <img src={thumbnail}/>
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