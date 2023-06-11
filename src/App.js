import './App.css';
import AboutMe from './components/AboutMe/AboutMe';
import Contact from './components/Contact/Contact';
import Education from './components/Education/Education';
import Home from './components/Home/Home';
import Navbar from './components/navbar/Navbar';
import Projects from './components/Projects/Projects';

import { useEffect, useState } from "react";

function App() {

  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isDarkMode, setIsdarkMode] = useState(false);
  const [isScrollChange, setIsScrollChange] = useState(false);


  useEffect(() => {

    //detectar el tema del sistema (claro u oscuro)
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      // dark mode
      setIsdarkMode(true)
    }
  }, [])



  const manejoDarkMode = () => {
    setIsdarkMode(!isDarkMode);
  };


  //para gestionar el icono seleccionado y su redirect en la navbar de mobile

  const changeIconSelected = (icon) => {
    setSelectedIcon(icon);
  }
  const handleClick = (icon) => {
    setIsScrollChange(true); // Establecer la bandera en true al hacer clic en un ícono de la navegación
    changeIconSelected(icon); // Cambiar el icono inmediatamente al hacer clic en un ícono de la navegación

    let elementId;

    if (icon === "casa") {
      elementId = "home";
    } else if (icon === "persona") {
      elementId = "aboutMe";
    } else if (icon === "libro") {
      elementId = "education";
    } else if (icon === "cuadros") {
      elementId = "projects";
    } else if (icon === "café") {
      elementId = "contact";
    }

    if (elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => {
          setIsScrollChange(false); // Cambiar el estado a false después del redireccionamiento
        }, 1000);
      }
    }

  };





  return (
    <div className={`${isDarkMode ? "dark" : ""} ${"App"
      }`}>
      <Navbar isDarkMode={isDarkMode} handleClick={handleClick} selectedIcon={selectedIcon} manejoDarkMode={manejoDarkMode} />
      <Home isDarkMode={isDarkMode} changeIconSelected={changeIconSelected} isScrollChange={isScrollChange} />
      <AboutMe isDarkMode={isDarkMode} changeIconSelected={changeIconSelected} isScrollChange={isScrollChange} />
      <Education isDarkMode={isDarkMode} changeIconSelected={changeIconSelected} isScrollChange={isScrollChange} />
      <Projects isDarkMode={isDarkMode} changeIconSelected={changeIconSelected} isScrollChange={isScrollChange} />
      <Contact isDarkMode={isDarkMode} changeIconSelected={changeIconSelected} isScrollChange={isScrollChange} />
    </div>
  );
}

export default App;
