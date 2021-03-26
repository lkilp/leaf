import React from 'react';
import ProductBox from './ProductBox';
import './Products.scss';

const products = [
    { text: 'bathroom', link: 'https://www.amazon.com/s?k=bathroom&ref=nb_sb_noss_1' },
    { text: 'kitchen', link: 'https://www.amazon.com/s?k=kitchen&ref=nb_sb_noss_1' },
    { text: 'laundry', link: 'https://www.amazon.com/s?k=laundry&ref=nb_sb_noss_1' },
    { text: 'toys', link: 'https://www.amazon.com/s?k=toys&ref=nb_sb_noss_1' },
    { text: 'baby', link: 'https://www.amazon.com/s?k=baby&ref=nb_sb_noss_1' },
    { text: 'pets', link: 'https://www.amazon.com/s?k=pets&ref=nb_sb_noss_1' },

]

const Products = () => {
    return (
        <div className='Products'>
             <div className='products'>
                {products.map((product, i) => {
                    return <ProductBox product={product} i={i} />
                })}
            </div>
        </div>
    )
}

export default Products;