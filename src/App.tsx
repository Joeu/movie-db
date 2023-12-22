import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";
import { PreferencesProvider } from "./contexts/PreferencesContext";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <PreferencesProvider>
          <BrowserRouter>
            <Header />
            <Main>
              <AppRoutes />
            </Main>
            <Footer />
          </BrowserRouter>
        </PreferencesProvider>
      </PersistGate>
    </Provider>
  );
}

export default App;
