import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';
import ReviewItem from '../ReviewItem/ReviewItem';

const Orders = () => {
    const cart = useLoaderData();
    console.log(cart);

    return (
        <div>
            <div className='shop'>
                <div>
                    {
                        cart.map(product => <ReviewItem key={product.id} product={product}></ReviewItem>)
                    }
                </div>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Orders;