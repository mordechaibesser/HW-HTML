import React from 'react';
import { Link } from 'react-router-dom';

const BuyHome = () => (
  <div>
    <h1>Buy a Home</h1>
    <p>Find your dream home with us!</p>
    <nav>
      <Link to="/">Home</Link> | <Link to="/sell">Sell a Home</Link>
    </nav>
  </div>
);

export default BuyHome;
