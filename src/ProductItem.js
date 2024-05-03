import React from 'react';
import { useCart } from './CartContext';  // Ensure this path is accurate

const ProductList = ({ products }) => {
    const { addToCart } = useCart();

    const handleAddToCart = (product) => {
        addToCart(product);
        alert('Added to cart!');
    };

    return (
        <div>
            {products.map(product => (
                <div key={product.id}>
                    <h3>{product.name}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    );
};

export default ProductList;
