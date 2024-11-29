import React from "react";
import Clock from "./components/Clock";

const App = () => {
  return (
    <div style={{ textAlign: "center", fontFamily: "Roboto, sans-serif" }}>
      <h1 style={{ color: "#1a237e", margin: "20px 0" }}>Fancy Clock App</h1>
      <Clock />
    </div>
  );
};

export default App;
