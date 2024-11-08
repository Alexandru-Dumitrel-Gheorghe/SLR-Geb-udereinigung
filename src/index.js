// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Importă stilurile globale
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
