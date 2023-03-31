import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const [cart,setCart] = useState([])

    useEffect(()=>{
        const storedCart = getShoppingCart();
    },[])


    const handleAddToCart = (product) => {

        const newCart = [...cart,product]
        setCart(newCart)

        addToDb(product.id)

    }

    return (
        <div className='shop'>
            <Products handleAddToCart={handleAddToCart}></Products>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;