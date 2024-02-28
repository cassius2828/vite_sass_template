import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./css/style.css";
import { GlobalProvider } from "./Context/GlobalContext.jsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </GlobalProvider>
  </React.StrictMode>
);
