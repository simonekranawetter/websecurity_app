import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/Auth0ProviderWithHistory";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory>
      <App />        
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>
);