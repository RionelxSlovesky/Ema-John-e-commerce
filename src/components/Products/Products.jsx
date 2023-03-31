import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = ({handleAddToCart, products}) => {

    return (
        <div className='products'>

            {
                products.map(product => <Product 
                handleAddToCart={handleAddToCart} 
                key={product?.id} 
                product={product}></Product>)
                
            }
            
        </div>
    );
};

export default Products;<Product></Product>