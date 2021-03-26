import React from 'react';
import './Header.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='Header'>
            <div className='leaf'>
                <h1>Leaf</h1>
                <Link to='/dream'><img src={logo} alt='logo' /></Link>
            </div>
            <h2>Change Starts From Within</h2>
        </div>
    )
}

export default Header;

