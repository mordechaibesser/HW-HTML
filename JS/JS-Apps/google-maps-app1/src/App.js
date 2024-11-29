// src/App.js
import React from "react";
import Map from "./components/Map"; // Import Map component

const App = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Arial, sans-serif" }}>
      <h1>My Cool Google Maps App</h1>
      <Map /> {/* Render Map component here */}
    </div>
  );
};

export default App;
