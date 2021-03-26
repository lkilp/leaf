import React from 'react';

import './DreamPage.scss';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import woman from '../assets/pictures/woman-pexels-gary-barnes-6231585.jpg';
import plant from '../assets/pictures/plant-pexels-alena-koval-886521.jpg';

const DreamPage = () => {
    return (
        <div className='DreamPage'>
            <div className='dream'>
                <Link to='/'><img className='leaf' src={logo} alt='logo' /></Link>
            </div>
            <section>
                <div className='left'>
                    <h2>We all have dreams...</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='imageConatiner'>
                        <img src={woman} alt='woman dreaming' className='woman' /> 
                    </div>
                    <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
                <div className='right'>
                    <h2>A dream you dream alone is only a dream.</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <div className='imageConatiner'>
                        <img src={plant} alt='plant' className='plant' />
                    </div>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </section>
        </div>
    )
}

export default DreamPage;