import "./App.css";
import Main from "./pages/main";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="max-w-[2000px] m-auto">
      <Header />
      <Main />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
