import React from 'react'
import logo from '../images/logo.svg'
export default function Navbar() {
    return (
        <div className='navbar'>  
            <div className='logodiv'> 
                <img className='logo' src={logo} />
                <a href='#'><p>www.landify.design</p></a>
            </div>
            <div className='navbar-text'>
                <h1>Welcome to Landify</h1>
                <p>We are glad you are here! Here’s some important 
                    info about Landify UI kit before you get started.</p>
            </div>
        </div>
    )
}