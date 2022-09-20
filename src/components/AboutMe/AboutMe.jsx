import React from "react";
import styles from "./AboutMe.module.css";

function AboutMe() {
  return (
    <div className={styles.container_aboutMe}>
      <div className={styles.aboutMe}>
        <div className={styles.container_info}>
          <div className={styles.pic_section}>
            <div className={styles.rectangle_title}>
              <h1 className={styles.title}>Sobre Mí</h1>
              <img src="/assets/aboutme-pic.png" alt="" />
            </div>
          </div>
          <div className={styles.info_section}>
            <p>
              Ingeniero de Sistemas y Desarrollador Web Front-End, con
              conocimientos en la creación y desarrollo de aplicaciones y sitios
              web usando tecnologías como HTML, CSS, Sass, JavaScript y React.
              Así mismo con experiencia en el uso de softwares de diseño,
              maquetación y prototipado como Adobe XD y Figma; además, de
              tecnologías de control de versiones y trabajo colaborativo (GIT).
              Soy un desarrollador Front-End que programa experiencias
              inspiradas en los principios UX/UI. Además, me caracterizo por
              tener una obsesión al detalle al momento de diseñar, maquetar y
              programar la experiencia visual del usuario, esto me ha llevado a
              profundizar mis conocimientos en Adobe XD y Figma. En pocas
              palabras puedo ser un UX/UI con fuertes habilidades técnicas
              Front-End, o un Front- End con avanzados conocimientos UX/UI.
            </p>
          </div>
          <button className={styles.btn_downloadCV}>
            <img src="/assets/download-icon.svg" alt="" />
            Descargar mi CV
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
