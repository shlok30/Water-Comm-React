import React from 'react'
import { useLocation } from 'react-router-dom'
import {useUser} from '../context/user-context'

const Footer = () => {
    const {pathname} = useLocation()
    const {state : {cart}} = useUser()
    return(
        <footer className = {pathname === '/cart' && cart.length < 2 ? "footer abosulute-footer" : "footer m6-top" }>
            Made by Shlok
        </footer>
    )
}

export default Footer