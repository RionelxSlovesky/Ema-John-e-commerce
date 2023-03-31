import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart,setCart] = useState([])

    useEffect(()=> {
        fetch('products.json')
        .then(res=>res.json())
        .then(data=> setProducts(data))
    }, [])

    

    useEffect( ()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        // step 1: get id
        for(const id in storedCart) {
            // step 2 get the product by using id
            const addedProduct= products.find(product => product.id ==id)
            // step 3: add quantity

            if(addedProduct) {
                addedProduct.quanity = storedCart[id]

                let length = storedCart[id]

                while(length>0) {
                    savedCart.push(addedProduct)
                    length--;
                }
                
            }
            // step 4: added the addedProduct to the saved cart
            
        }
        // step 5: set the cart
        setCart(savedCart)
    },[products])


    const handleAddToCart = (product) => {

        const newCart = [...cart,product]
        setCart(newCart)

        addToDb(product.id)

    }

    return (
        <div className='shop'>
            <Products products={products} handleAddToCart={handleAddToCart}></Products>
            <Cart cart={cart}></Cart>
        </div>
    );
};

export default Shop;