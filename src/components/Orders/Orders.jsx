import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';
import { deleteShoppingCart, removeFromDb } from '../../utilities/fakedb';

const Orders = () => {
    const savedCart = useLoaderData();
    const [cart, setCart] = useState(savedCart)

    const handleRemoveFromCart = (id) =>  {
        const remaining = cart.filter(product => product.id !== id);
        setCart(remaining)
        removeFromDb(id)
    }

    const handleClearCart = () => {
        setCart([]);
        deleteShoppingCart();
    }

    useEffect(()=> {
        console.log(cart)
    },[cart])

    return (
        <div>
            <div className='shop'>
                <div>
                    {
                        cart.map(product => <ReviewItem 
                        product={product}
                        handleRemoveFromCart={handleRemoveFromCart}></ReviewItem>)
                    }
                </div>
                <Cart cart={cart} handleClearCart={handleClearCart}>
                    <button className='proceed-btn'>Proceed Checkout</button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;