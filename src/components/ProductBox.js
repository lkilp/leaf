import React from 'react';
import './ProductBox.scss';

const ProductBox = (props) => {
    const { product, i } = props;
    return (
        <a href={product.link} target="_blank" rel='noreferrer'
        className={`ProductBox box${i+1}`}>
            <div className="out">
            <div className='product-category'>{product.text}</div>
            <div className='filter' />
            </div>
        </a>
    )
}

export default ProductBox;

    