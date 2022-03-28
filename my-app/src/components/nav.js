import React from 'react'
import { useUser } from '../context/user-context'
import { Link ,useNavigate } from 'react-router-dom'

const Nav = () => {
    const {state,showLoginAlert,dispatch} = useUser()
    const navigate = useNavigate()
    //console.log("Nav state",state)
    const sumOfItems = (sum,curr) => sum + curr.qty
    const numberOfCartItems = state.cart.reduce(sumOfItems,0)
    const handleClick = () => {
        if(!state.encodedToken){
            dispatch({type : "ALERT"})
            setTimeout(() => dispatch({type : "ALERT"}),1000)
        }
        else{
            navigate('/cart')
        }

    }
    return(
        <nav className = "navigation flex gap-xl align-center full-width">
            <div className="nav-brand">Water-Commerce</div>
            <div className = "input-wrapper flex grow-1 flex-center" >
                <input className = "input-field" placeholder="Please Enter Text" />
            </div>
            <div className = "flex gap-xl flex-center grow-1" >
                <Link to = '/login'><button className="btn btn-secondary">Login</button></Link>
                <i className="material-icons cursor-pointer" >favorite_border</i>
                <div class = "icon badge" onClick = {handleClick} style = {{cursor : "pointer"}}>
	                <span class="material-icons md-40">shopping_cart</span>
	                <span class = "number top-right">{numberOfCartItems}</span>
                </div>
            </div>
        </nav>
    )
}

export default Nav