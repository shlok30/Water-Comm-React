import React from 'react'
import { useLocation } from 'react-router-dom'
import {useUser} from '../context/user-context'

const Footer = ({lengthOfItems}) => {
    const {pathname} = useLocation()
    const {state : {cart,wishlist}} = useUser()
    return(
        <footer className = {lengthOfItems === 0 ? "footer abosulute-footer" : "footer m6-top" }>
            Made by Shlok
        </footer>
    )
}

export default Footer