import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const Layout = () => (
  <div>
    <header style={{ padding: '10px', backgroundColor: '#f4f4f4' }}>
      <h1>Real Estate</h1>
      <nav>
        <Link to="/">Home</Link> | <Link to="/buy">Buy a Home</Link> | <Link to="/sell">Sell a Home</Link>
      </nav>
    </header>
    <main style={{ padding: '20px' }}>
      <Outlet />
    </main>
  </div>
);

export default Layout;
