import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container_botones_left}>
        <button>Inicio</button>
        <button>Sobre mí</button>
        <button>Eduación</button>
        <button>Proyectos</button>
        <button>Contactos</button>
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
