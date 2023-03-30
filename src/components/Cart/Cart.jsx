import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {
    return (
        <div className='order-summary'>
            <h2 className='summary-header'>Order Summary:</h2>
            <p className='summary-desc'>Selected Items: {cart.length}</p>
            <p className='summary-desc'>Total Price: </p>
            <p className='summary-desc'>Total Shipping: </p>
            <p className='summary-desc'>Tax: </p>
            <p className='summary-desc'>Grand Total: </p>
        </div>
    );
};

export default Cart;