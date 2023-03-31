import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    let totalPrice = 0;
    let totalShipping = 0;
    
    for(const item of cart) {
        totalPrice += item.price
        totalShipping += item.shipping
    }

    const tax = totalPrice * 0.7;
    const grandTotal = totalPrice + totalShipping + tax;

    

    return (
        <div className='order-summary'>
            <h2 className='summary-header'>Order Summary:</h2>
            <p className='summary-desc'>Selected Items: {cart.length}</p>
            <p className='summary-desc'>Total Price: {totalPrice}</p>
            <p className='summary-desc'>Shipping: {totalShipping}</p>
            <p className='summary-desc'>Tax: {tax.toFixed(2)}</p>
            <p className='summary-desc'>Grand Total: {grandTotal.toFixed(2)}</p>
        </div>
    );
};

export default Cart;