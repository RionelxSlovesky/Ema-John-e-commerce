import React from 'react';
import './Product.css'

const Product = ({product}) => {
    return (
        <div className='product'>
            <div className="product-img-container">
                <img className='product-img' src={product.img} alt="" />
            </div>
            <h3 className="product-name">Name: {product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-brand">Brand: {product.seller}</p>
            <p className="product-rating">Rating: {product.ratings}</p>
            <button className="add-to-cart">Add to Cart</button>
        </div>
    );
};

export default Product;