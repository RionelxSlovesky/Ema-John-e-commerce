import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';

const Orders = () => {
    const products = useLoaderData();
    console.log(products);

    return (
        <div>
            <div className='shop'>
                <h2>This is order page: {products.length}</h2>
                <Cart cart={[]}></Cart>
            </div>
        </div>
    );
};

export default Orders;