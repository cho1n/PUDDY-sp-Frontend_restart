import "./App.css";
import { FooterNav } from "./components/common/FooterNav/FooterNav.tsx";
import { Header } from "./components/common/Header/header.tsx";
import { AppRouter } from "./routes/AppRouter.tsx";

function App() {
  return (
    <>
      <Header title={"마이페이지"} />
      <AppRouter />
      <FooterNav />
    </>
  );
}

export default App;
