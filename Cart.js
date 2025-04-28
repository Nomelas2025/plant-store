import React from 'react';
import { useNavigate } from 'react-router-dom';

const Cart = ({ cart, increment, decrement, removeFromCart }) => {
  const navigate = useNavigate();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>${item.price} x {item.quantity}</p>
                <button onClick={() => increment(item.id)}>+</button>
                <button onClick={() => decrement(item.id)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <h3>Total: ${total}</h3>
          <button onClick={() => alert('Próximamente')}>Pagar</button>
          <button onClick={() => navigate('/products')}>Continuar comprando</button>
        </>
      )}
    </div>
  );
};

export default Cart;