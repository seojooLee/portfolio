import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import NewApp from "./NewApp.tsx";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<NewApp />);
