import React from 'react'

const Nav = () => {
    return(
        <nav className = "navigation flex gap-xl align-center full-width">
            <div className="nav-brand">Water-Commerce</div>
            <div className = "input-wrapper flex grow-1 flex-center" >
                <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
                <a href = "login.html"><button className="btn btn-secondary">Login</button></a>
                <i className="material-icons cursor-pointer" >favorite_border</i>
                <i className="material-icons cursor-pointer" >shopping_cart</i>
            </div>
        </nav>
    )
}

export default Nav