import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you're looking for doesn't exist.</p>
    <nav>
      <Link to="/">Go Back Home</Link>
    </nav>
  </div>
);

export default NotFound;
