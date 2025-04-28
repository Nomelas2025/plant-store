import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div className="overlay">
        <h1>GreenLeaf 🌿</h1>
        <p>Tu tienda de plantas de interior favorita. ¡Dale vida a tu hogar!</p>
        <button onClick={() => navigate('/products')}>Comenzar</button>
      </div>
    </div>
  );
};

export default Home;