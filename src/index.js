import React from "react";
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./styles.scss";

// This implementation has changed after React 18
const mountNode = document.getElementById('app');
const root = createRoot(mountNode)

root.render(
  <Router>
    <App />
  </Router>
);
