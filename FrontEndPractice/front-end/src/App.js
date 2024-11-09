import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home/Home';
import AppContextProvider from './common/context/AppContextProvider';

function App() {

  return (
    <AppContextProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AppContextProvider>
  );
}

export default App;
