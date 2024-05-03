import React from 'react';

function Cart({ cartItems, handleRemoveCart }) {
    return (
        <ol className="list-group list-group-numbered">
            {cartItems.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-start">
                    <div className="ms-2 me-auto">
                        <div className="fw-bold">{item.title}</div>
                        Quantity: {item.quantity} - ${item.price} each
                    </div>
                    <span>Total: ${item.quantity * item.price}</span>
                    <button onClick={() => handleRemoveCart(item)} className="badge bg-danger rounded-pill">Remove</button>
                </li>
            ))}
        </ol>
    );
}

export default Cart;
