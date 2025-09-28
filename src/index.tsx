import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import MainLayout from "./pages/MainLayout.tsx";
import NewApp from "./NewApp.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<NewApp />);
