import React from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    return (
        <div className='shop'>
            <Products></Products>
            <div className='order-summary'>
                <h3>Order Summary:</h3>
            </div>
        </div>
    );
};

export default Shop;