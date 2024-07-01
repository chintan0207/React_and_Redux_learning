/* eslint-disable no-unused-vars */

import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ThemeState from "./context/ThemeState";

function App() {
  return (
    <ThemeState>
      <Header />
      <main>
        <Outlet />
      </main>
    </ThemeState>
  );
}

export default App;
