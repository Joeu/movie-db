import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";
import { usePreferences } from "./hooks/usePreferences";

function App() {
  const { theme } = usePreferences();

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Header />
        <Main>
          <AppRoutes />
        </Main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
