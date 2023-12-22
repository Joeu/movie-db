import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";
import { usePreferences } from "./hooks/usePreferences";

function App() {
  const { theme } = usePreferences();

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <div className={`app ${theme}`}>
          <BrowserRouter>
            <Header />
            <Main>
              <AppRoutes />
            </Main>
            <Footer />
          </BrowserRouter>
        </div>
      </PersistGate>
    </Provider>
  );
}

export default App;
