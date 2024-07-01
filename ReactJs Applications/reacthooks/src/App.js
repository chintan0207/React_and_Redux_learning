import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Service from './pages/Service';
import NoPage from './pages/NoPage';
import DataState from './context/DataState';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <DataState>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/service' element={<Service />} />
          <Route path='*' element = {<NoPage/>}/>
        </Routes>
      </BrowserRouter>
      </DataState>
    </>
  );
}

export default App;
