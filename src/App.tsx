import { BrowserRouter } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";
import { NotificationsProvider } from "./contexts/NotificationsContext";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <NotificationsProvider>
        <Main>
          <AppRoutes />
        </Main>
      </NotificationsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
