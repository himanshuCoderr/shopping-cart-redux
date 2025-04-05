import React from 'react';
import { useSelector } from 'react-redux';
import CartItem from './CartItem';
import CartSummary from './CartSummary';
// import './Cart.css';

function CartList() {
  const items = useSelector(state => state.cart.items);

  return (
    <div className="cart">
      <h2>Cart</h2>
      {items.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {items.map(item => (
            <CartItem key={item.id} item={item} />
          ))}
          <CartSummary />
        </>
      )}
    </div>
  );
}

export default CartList;
