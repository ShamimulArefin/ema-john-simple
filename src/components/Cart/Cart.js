import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const total = cart.reduce((total, prdt) => total + prdt.price * prdt.quantity, 0);

    let shipping = 0;
    if(total > 50){
        shipping = 0;
    }
    else if(total > 15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    const tax = (total / 10);
    const grandTotal = (total + shipping + tax);
    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision)
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price: ${total}</p>
            <p><small>Shipping Price: ${shipping} </small></p>
            <p><small>Tax + VAT: ${formatNumber(tax)}</small></p>
            <p>Total Price: ${formatNumber(grandTotal)} </p>
            <br/>
            {
                props.children
            }
        </div>
    );
};

export default Cart;