/* eslint-disable no-unused-vars */

import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import ThemeState from "./context/ThemeState";
import DataState from "./context/DataState";

function App() {
  return (
    <DataState>
      <ThemeState>
        <Header />
        <main>
          <Outlet />
        </main>
      </ThemeState>
    </DataState>
  );
}

export default App;
