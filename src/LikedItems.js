import React from 'react';
import { useCart } from './CartContext';
import { useNavigate } from 'react-router-dom';
import { useLikedItems } from './LikedItemsContext'; 
import './nav.css'; // Import CSS file

const LikedItems = ({ products }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const { likedItems } = useLikedItems();

    const handleAddToCart = (product) => {
        addToCart(product);
        navigate('/cart');
    };

    // Filter products to display only the liked items
    const likedProducts = products.filter(product =>
        likedItems.some(likedItem => likedItem.id === product.id)
    );

    console.log("Liked Products:", likedProducts); // Log liked products for debugging

    return (
        <div className="liked-items-container"> {/* Apply CSS class to container */}
            <h2>Liked Items</h2>
            <ul>
                {likedProducts.map(product => (
                    <li key={product.id}>
                        <img src={product.image} alt={product.title} />
                        <div>{product.title}</div> {/* Render product title */}
                        <div>${product.price}</div> {/* Render product price */}
                        <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LikedItems;
