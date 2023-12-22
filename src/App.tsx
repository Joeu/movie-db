import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";
import { Provider } from "react-redux";
import store from "./reducers/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Main>
          <AppRoutes />
        </Main>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
