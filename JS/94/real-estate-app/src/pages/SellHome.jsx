import React from 'react';
import { Link } from 'react-router-dom';

const SellHome = () => (
  <div>
    <h1>Sell a Home</h1>
    <p>Let us help you sell your home!</p>
    <nav>
      <Link to="/">Home</Link> | <Link to="/buy">Buy a Home</Link>
    </nav>
  </div>
);

export default SellHome;
