import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
