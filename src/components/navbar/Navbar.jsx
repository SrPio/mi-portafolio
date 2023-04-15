import React from "react";
import { useScrollPosition } from "../../hooks/useScrollPosition";
import styles from "./Navbar.module.css";

function Navbar({ isDarkMode, manejoDarkMode }) {
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
          Eduación
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
              "https://drive.google.com/file/d/11JDgW_340GgoXqm0S92IKmv-teOmG5PX/view?usp=sharing",
              "_blank"
            )
          }
        >
          <img loading="lazy" src="/assets/download-icon.svg" alt="" />
          Descargar mi CV
        </div>
      </div>
    </div>
  );
}

export default Navbar;
