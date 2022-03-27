import React from 'react'
import { useLocation } from 'react-router-dom'

const Footer = () => {
    const {pathname} = useLocation()
    return(
        <footer className = {pathname === '/cart' ? "footer abosulute-footer" : "footer m6-top" }>
            Made by Shlok
        </footer>
    )
}

export default Footer