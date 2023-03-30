import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div className='product'>
            <div className="product-img-container">
                <img src="" alt="" />
            </div>
            <h3 className="product-name">Name:</h3>
            <p className="product-price">Price:</p>
            <p className="product-brand">Brand:</p>
            <p className="product-rating">Rating:</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Product;