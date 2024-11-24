import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import AppContextProvider from "./common/context/AppContextProvider";
import SamePage from "./pages/SamePage/SamePage";
import Navbar1 from "./components/Header/Navbar1";
import Navbar2 from "./components/Header/Navbar2";

function App() {
  return (
    <AppContextProvider>
      <BrowserRouter>
        <Navbar1 />
        <Navbar2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sevices/:subservice" element={<SamePage />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
