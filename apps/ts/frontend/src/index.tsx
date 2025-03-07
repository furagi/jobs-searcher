import React from "react";
import ReactDOM from "react-dom/client";
// import logo from './logo.svg?react';
import "./index.css";
import { App } from "./app";

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
