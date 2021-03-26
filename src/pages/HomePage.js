import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Products from '../components/Products';

const HomePage = () => {
    return (
        <div className='HomePage'>
            <Header />
            <Products />
            <Footer />
        </div>
    )
}

export default HomePage;