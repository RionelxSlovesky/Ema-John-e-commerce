import React from 'react';
import './Navbar.css'
import Logo from '../assets/Logo.svg'

const Navbar = () => {
    return (
        <>
          <nav className='primary-nav'>
            <a href=''><img src={Logo} alt="" /></a>
            <ul className='primary-nav-list'>
                <li className="primary-nav-items"><a href='/order' className='nav-links'>Order</a></li>
                <li className="primary-nav-items"><a href='/order-reviews' className='nav-links'>Order Reviews</a></li>
                <li className="primary-nav-items"><a href='/inventory' className='nav-links'>Manage Inventory</a></li>
                <li className="primary-nav-items"><a href='/login' className='nav-links'>Login</a></li>
            </ul>
          </nav>  
        </>
    );
};

export default Navbar;