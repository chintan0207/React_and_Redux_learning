import './App.css';
import 'animate.css';
import About from './Component/About';
import Contact from './Component/Contact';
import Education from './Component/Education';
import Homepage from './Component/Homepage';
import Navbar from './Component/Navbar';
import Projects from './Component/Projects';
import Skills from './Component/Skills';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Homepage />
      <About/>
      <Projects/>
      <Skills/>
      <Education />
      <Contact/>
    </div>
  );
}

export default App;
