import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BuyHome from './pages/BuyHome';
import SellHome from './pages/SellHome';
import Layout from './Layout';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="buy" element={<BuyHome />} />
        <Route path="sell" element={<SellHome />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
