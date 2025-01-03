import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Welcome to the Real Estate Home Page</h1>
    <p>This is the home page of our real estate site.</p>
    <nav>
      <Link to="/buy">Buy a Home</Link> | <Link to="/sell">Sell a Home</Link> 
    </nav>
  </div>
);

export default Home;
