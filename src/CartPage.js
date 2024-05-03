import React from 'react';
import { useCart } from './CartContext';
import { Link } from 'react-router-dom';
import './CartPage.css'; // Import custom CSS for CartPage styling

function CartPage() {
    const { cartItems, removeFromCart } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="container mt-5">
                <h2>Your cart is empty.</h2>
            </div>
        );
    }

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

    return (
        <div className="cart-container">
            <h2 className="cart-title">Your Cart</h2>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h3 className="cart-item-title">{item.title}</h3>
                            <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                            <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                            <button className="btn btn-remove" onClick={() => removeFromCart(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3 className="summary-title">Total Price: ${totalPrice.toFixed(2)}</h3>
                <Link to="/checkout" className="btn btn-checkout">Proceed to Checkout</Link>
            </div>
        </div>
    );
}

export default CartPage;
