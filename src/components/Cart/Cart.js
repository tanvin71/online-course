import React from 'react';
import'./Cart.css';
const Cart = (props) => {
    const cart = props.cart
    const total =cart.reduce((total, crs) => total +crs.price,0);
    return (
        <div className='cart'>
            <h3 style={{color: 'yellowgreen'}}>Course summery</h3>
            <h4>Order summery: {cart.length}</h4>
            <h5>Total price: $ {total}</h5>
            <button className="btn btn-info">Review your cart</button>
        </div>
    );
};

export default Cart;