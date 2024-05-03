import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';

const CheckoutPage = ({ placeOrder }) => {
    const { cartItems } = useCart();
    const navigate = useNavigate();

    const handlePlaceOrder = () => {
        placeOrder();
        navigate('/confirmation');
    };

    const totalPrice = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);

    return (
        <div className="checkout-container">
            <div className="checkout-header">
                <h2>Checkout</h2>
            </div>
            <div className="checkout-content">
                <div className="checkout-summary">
                    <div className="total-price">Total Price: ${totalPrice.toFixed(2)}</div>
                    <button onClick={handlePlaceOrder} className="checkout-btn">Place Order</button>
                </div>
            </div>
        </div>
    );
};

export default CheckoutPage;
