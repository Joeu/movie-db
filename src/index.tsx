import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/app.scss";
import App from "./App";
import { PreferencesProvider } from "./contexts/PreferencesContext";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
        <PreferencesProvider>
          <App />
        </PreferencesProvider>
      </Provider>
    </PersistGate>
  </React.StrictMode>
);
