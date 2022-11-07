import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([])
    const [cart, SetCart] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    const handClick = (product) =>{
        //console.log(product)
        const newCart = [...cart, product]
        SetCart(newCart);
    }


    return (
        <div className='shop-container'>
           <div className="products-container">
               {
                products.map(product => <Product 
                    key={product.id}
                    product={product}
                    handClick={handClick}
                    ></Product>)
               }
           </div>

           <div className='cart-container'>
                <h2>Order Summary</h2>
                <p>Selected Items: {cart.length}</p>
           </div>
           
        </div>
    ); 
};

export default Shop;