import React, { useState } from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styles from "./Navbar.module.css";

function Navbar({ isDarkMode, manejoDarkMode, handleClick, selectedIcon }) {
  return (
    <div
      className={`${useScrollPosition() > 0 ? styles.shadow : ""} ${
        isDarkMode ? styles.dark : ""
      }
      ${styles.navbar}`}
    >
      <div
        className={`${isDarkMode ? styles.dark : ""} ${
          styles.container_botones_left
        }`}
      >
        <a href="#home" className={styles.link_sections}>
          Inicio
        </a>
        <a href="#aboutMe" className={styles.link_sections}>
          Sobre mí
        </a>
        <a href="#education" className={styles.link_sections}>
          Trayectoria
        </a>
        <a href="#projects" className={styles.link_sections}>
          Proyectos
        </a>
        <a href="#contact" className={styles.link_sections}>
          Contactos
        </a>
      </div>
      <div className={styles.container_botones_right}>
        <button onClick={manejoDarkMode}>
          <img
            loading="lazy"
            src={`${
              isDarkMode ? "/assets/sun-icon.svg" : "/assets/moon-icon.svg"
            }`}
            alt=""
          />
        </button>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${
            styles.btn_downloadCV
          }`}
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/18I3QYr7YX6nUhfZyOFEfKalsiUKZbc8o/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img loading="lazy" src="/assets/download-icon.svg" alt="" />
          Descargar mi CV
        </div>
      </div>

      <div className={`${isDarkMode ? styles.dark : ""} ${styles.nav_mobile}`}>
        <div
          className={`${
            selectedIcon === "casa" ? styles.nav_mobileClicked : ""
          }`}
          onClick={() => handleClick("casa")}
        >
          <img src="/assets/ic_fluent_home_28_regular.svg" alt="icono casa" />
        </div>
        <div
          className={`${
            selectedIcon === "persona" ? styles.nav_mobileClicked : ""
          }`}
          onClick={() => handleClick("persona")}
        >
          <img src="/assets/people-icon.svg" alt="icono persona" />
        </div>
        <div
          className={`${
            selectedIcon === "libro" ? styles.nav_mobileClicked : ""
          }`}
          onClick={() => handleClick("libro")}
        >
          <img src="/assets/book-icon.svg" alt="icono libro" />
        </div>
        <div
          className={`${
            selectedIcon === "cuadros" ? styles.nav_mobileClicked : ""
          }`}
          onClick={() => handleClick("cuadros")}
        >
          <img src="/assets/cuadros-icon.svg" alt="icono cuadros" />
        </div>
        <div
          className={`${
            selectedIcon === "café" ? styles.nav_mobileClicked : ""
          }`}
          onClick={() => handleClick("café")}
        >
          <img src="/assets/coffe-icon.svg" alt="icono café" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
