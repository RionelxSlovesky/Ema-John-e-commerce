import React, { useState } from 'react';
import Cart from '../Cart/Cart';
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
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;