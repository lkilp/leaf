import React from 'react';

import './Footer.scss';
import employee1 from '../assets/pictures/employee-1-pexels-daria-shevtsova-709790.jpg';
import employee2 from '../assets/pictures/employee-2-pexels-daria-shevtsova-1250426.jpg';

const Footer = () => {
    return (
        <div className='Footer'>
            <h2>The Growing Team</h2>
            <dic classNeme='team'>
                
                <div className='employees'>
                    <div className='employee-1'>
                        <div>
                            <h3>Sandy Sanderson</h3>
                            <div>Managing Fairy</div>
                            <div>"Trees fascinate me."</div>
                        </div>
                        <img src={employee1} alt='Sandy Sanderson' />
                    </div>
                    <div className='employee-2'>
                        <img src={employee2} alt='Windy Winterson' />
                        <div>
                            <h3>Windy Winterson</h3>
                            <div>Creative Ninja</div>
                            <div>"Keep planting the seeds!"</div>
                        </div>
                    </div>
                </div>
            </dic>

        </div>
    )
}

export default Footer;
