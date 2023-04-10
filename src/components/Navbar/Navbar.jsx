import React from 'react';
import './Navbar.css'
import Logo from '../../assets/Logo.svg'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='primary-nav-container'>
          <nav className='primary-nav'>
            <a href=''><img src={Logo} alt="" /></a>
            <ul className='primary-nav-list'>
                <li className="primary-nav-items"><Link to='/' className='nav-links'>Shop</Link></li>
                <li className="primary-nav-items"><Link to='/orders' className='nav-links'>Order</Link></li>
                <li className="primary-nav-items"><Link to='/inventory' className='nav-links'>Manage Inventory</Link></li>
                <li className="primary-nav-items"><Link to='/login' className='nav-links'>Login</Link></li>
            </ul>
          </nav>  
        </div>
    );
};

export default Navbar;