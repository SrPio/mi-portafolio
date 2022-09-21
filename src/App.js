import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
      <Education />
    </div>
  );
}

export default App;
