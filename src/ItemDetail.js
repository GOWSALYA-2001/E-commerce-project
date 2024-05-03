import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import { useLikedItems } from './LikedItemsContext';
import img1Outline from './images/apple.jpg';
import img1Filled from './images/c2-filled.png';

function ItemDetail({ products }) {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const { likedItems, toggleLikedItem } = useLikedItems();

    // Find the product by ID, making sure to convert id from URL to the appropriate type if necessary.
    const product = products.find(p => p.id.toString() === id);

    // Initialize the quantity state
    const [quantity, setQuantity] = useState(1);

    // Check if the item is liked
    const isLiked = likedItems.some(item => item.id === product.id);

    // Redirect if no product is found
    if (!product) {
        return <div>Product not found</div>;
    }

    // Function to handle adding product to cart
    const handleAddToCart = () => {
        addToCart({ ...product, quantity }); // Ensure the quantity is being passed correctly
        navigate('/cart'); // Navigate to the cart page after adding
    };

    // Function to increase quantity
    const increaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    // Function to decrease quantity
    const decreaseQuantity = () => {
        setQuantity(prevQuantity => prevQuantity > 1 ? prevQuantity - 1 : 1);
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={`${process.env.PUBLIC_URL}/${product.image}`} alt={product.title} className="img-fluid" />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h2 className="card-title" style={{ fontFamily: 'Arial, sans-serif', fontSize: '1.8em', color: 'black' }}>{product.title}</h2>
                                    <p className="card-text" style={{ fontSize: '1.2em', fontFamily: 'Verdana, sans-serif' }}>Price: <span style={{ color: 'green', fontFamily: 'Verdana, sans-serif', fontWeight: 'bold' }}>${product.price}</span></p>
                                    <div className="d-flex align-items-center">
                                        <button onClick={decreaseQuantity} disabled={quantity <= 1} aria-label="Decrease quantity" className="btn btn-secondary">-</button>
                                        <span className="mx-2" style={{ fontSize: '1.3em', fontFamily: 'Arial, sans-serif' }}> Quantity: {quantity} </span>
                                        <button onClick={increaseQuantity} aria-label="Increase quantity" className="btn btn-secondary">+</button>
                                    </div>
                                    <button onClick={handleAddToCart} className="btn btn-primary mt-3 me-3">Add to Cart</button>
                                    <img src={isLiked ? img1Filled : img1Outline} alt="heart" onClick={() => toggleLikedItem(product)} className="img-fluid" style={{ width: '35px', cursor: 'pointer' }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
