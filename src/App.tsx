import Footer from "./layout/Footer";
import Header from "./layout/Header";
import Main from "./layout/Main";
import AppRoutes from "./routes";

function App() {
  return (
    <>
      <Header />
      <Main>
        <AppRoutes />
      </Main>
      <Footer />
    </>
  );
}

export default App;
