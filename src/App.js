import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/Projects/Projects';

import { useState } from "react";

function App() {

  const [isDarkMode, setIsdarkMode] = useState(false);

  const manejoDarkMode = () => {
    setIsdarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <Navbar isDarkMode={isDarkMode} manejoDarkMode={manejoDarkMode} />
      <Home isDarkMode={isDarkMode} />
      <AboutMe isDarkMode={isDarkMode} />
      <Education isDarkMode={isDarkMode} />
      <Projects isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
