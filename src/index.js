// src/index.js

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // Asigură-te că index.css este importat aici
import App from "./App";
// Importă alte fișiere după necesitate

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
