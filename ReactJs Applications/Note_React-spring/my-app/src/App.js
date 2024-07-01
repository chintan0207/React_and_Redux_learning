import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import ListOfNotes from './Components/ListOfNotes';
import AddandUpdate from './Components/AddandUpdate';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<ListOfNotes/>} />
          <Route path='/addnote' element={<AddandUpdate/>} />
          <Route path='/editnote/:id' element={<AddandUpdate/>} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
