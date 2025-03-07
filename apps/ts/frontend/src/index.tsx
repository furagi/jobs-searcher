import React from "react";
import ReactDOM from "react-dom/client";
import Logo from "./logo.svg?react";
import "./index.css";
import { App } from "./app";

console.log(Logo);
const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Root element not found");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
    <Logo />
  </React.StrictMode>,
);
