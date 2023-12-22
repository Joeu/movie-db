import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/app.scss";
import App from "./App";
import { PreferencesProvider } from "./contexts/PreferencesContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PreferencesProvider>
      <App />
    </PreferencesProvider>
  </React.StrictMode>
);
