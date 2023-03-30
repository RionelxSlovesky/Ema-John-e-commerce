import React from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <Products></Products>
            <div className='order-summary'>
                <h2>Order Summary:</h2>
            </div>
        </div>
    );
};

export default Shop;