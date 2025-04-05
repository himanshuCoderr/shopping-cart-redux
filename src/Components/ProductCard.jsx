import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../slice/cartSlice';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="product">
      <h3>{product.name}</h3>
      <p>${product.price}</p>
      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;