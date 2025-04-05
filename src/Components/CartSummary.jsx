import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart } from '../slice/cartSlice';

function CartSummary() {
  const { totalQuantity, totalPrice } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-summary">
      <p>Total Items: {totalQuantity}</p>
      <p>Total Price: ${totalPrice.toFixed(2)}</p>
      <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
    </div>
  );
}

export default CartSummary;
