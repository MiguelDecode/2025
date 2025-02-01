import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { FirstApp } from "./components/FirstApp/FirstApp.jsx";
import { CounterApp } from "./components/CounterApp/CounterApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <FirstApp title="Hola, soy Vegeta." /> */}
    <CounterApp initialValue={20} />
  </StrictMode>
);
