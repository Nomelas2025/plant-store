import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import Header from './Header';
import productsData from './products';

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    if (!cart.find(p => p.id === product.id)) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increment = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item));
  };

  const decrement = (id) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    ));
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Header cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products={productsData} cart={cart} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} increment={increment} decrement={decrement} removeFromCart={removeFromCart} />} />
      </Routes>
    </Router>
  );
};

export default App;