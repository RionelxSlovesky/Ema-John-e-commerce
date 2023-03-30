import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const Product = ({product,handleAddToCart}) => {

    

    return (
        <div className='product'>
            <div className="product-img-container">
                <img className='product-img' src={product.img} alt={product.name} />
            </div>
            <h3 className="product-name">Name: {product.name}</h3>
            <p className="product-price">Price: ${product.price}</p>
            <p className="product-brand">Brand: {product.seller}</p>
            <p className="product-rating">Rating: {product.ratings}</p>
            <button onClick={() => handleAddToCart(product)} className="add-to-cart">Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
        </div>
    );
};

export default Product;