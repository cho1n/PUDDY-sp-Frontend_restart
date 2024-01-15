import "./App.css";
import { FooterNav } from "./components/common/FooterNav/FooterNav.tsx";

function App() {
  return (
    <>
      <p className="text-5xl text-fontBlack font-bold mb-3"> Logo </p>
      <button className="bg-bgYellow w-500 h-500">count is</button>
      <FooterNav />
    </>
  );
}

export default App;
