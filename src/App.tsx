import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import { store, persistor } from "./reducers/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Header />
          <Main>
            <AppRoutes />
          </Main>
          <Footer />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
