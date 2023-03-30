import React, { useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const [cart,setCart] = useState([])


    const handleAddToCart = (product) => {

        const newCart = [...cart,product]
        setCart(newCart)
        console.log(newCart)

    }

    return (
        <div className='shop'>
            <Products handleAddToCart={handleAddToCart}></Products>
            <div className='order-summary'>
                <h2>Order Summary:</h2>
                <p>Selected Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;