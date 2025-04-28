import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({ cartCount }) => (
  <header className="header">
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/products">Productos</Link>
      <Link to="/cart">Carrito 🛒 ({cartCount})</Link>
    </nav>
  </header>
);

export default Header;