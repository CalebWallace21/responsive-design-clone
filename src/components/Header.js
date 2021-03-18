import React from 'react';
import '../App.css'
function Header (){
    return (
        <nav className='header-bar'>
            
            <header className="header-title-large">   
            <h1 className="site-title"> Start Bootstrap</h1>
            <p className="nav-items">About        Projects          Contact</p>            
            </header>

            <header className="header-title-small">
            <h1 className="site-title-small"> Start Bootstrap</h1>
            <button className="menu-button">Menu</button>  
            </header>  
                   
        </nav>
    )
}

export default Header