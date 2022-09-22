import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/Projects/Projects';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
      <Projects />
    </div>
  );
}

export default App;
