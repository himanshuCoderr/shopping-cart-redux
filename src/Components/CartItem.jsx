import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../slice/cartSlice';

function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
      <p>Quantity: {item.quantity}</p>
      <button onClick={() => dispatch(removeFromCart({id : item.id}))}>Remove</button>
    </div>
  );
}

export default CartItem;