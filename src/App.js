import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <AboutMe />
    </div>
  );
}

export default App;
