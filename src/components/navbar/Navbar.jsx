import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container_botones_left}>
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
        <img src="/assets/moon-icon.svg" alt="" />
        <div className={styles.btn_downloadCV}>
          <img src="/assets/download-icon.svg" alt="" />
          Descargar mi CV
        </div>
      </div>
    </div>
  );
}

export default Navbar;
