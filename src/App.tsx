import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./App.css";

import TooltipPage from "./pages/TooltipPage";

function App() {
  return (
    <>
      <TooltipPage />
      <ToastContainer />
    </>
  );
}

export default App;
