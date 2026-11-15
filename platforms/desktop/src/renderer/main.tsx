import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "@renderer/App";
import "./main.css";
const rootElement = document.getElementById("root");

if (rootElement === null) {
  throw new Error("Failed to find the root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
