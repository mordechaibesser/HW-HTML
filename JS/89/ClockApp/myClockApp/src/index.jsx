import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";  // If you have some base styling

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
