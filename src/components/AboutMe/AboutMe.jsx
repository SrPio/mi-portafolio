import React from "react";
import styles from "./AboutMe.module.css";

import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

function AboutMe({ isDarkMode, changeIconSelected, isScrollChange }) {
  const containerRef = useRef(null);
  useEffect(() => {
    if (!isScrollChange) {
      const handleScroll = () => {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight / 2) {
          changeIconSelected("persona");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [changeIconSelected]);
  return (
    <div
      id="aboutMe"
      ref={containerRef}
      className={`${isDarkMode ? styles.dark : ""} ${styles.container_aboutMe}`}
    >
      <div className={styles.aboutMe}>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${
            styles.container_info
          }`}
        >
          <div className={styles.pic_section}>
            <div
              className={`${isDarkMode ? styles.dark : ""} ${
                styles.rectangle_title
              }`}
            >
              <h1
                className={`${isDarkMode ? styles.dark : ""} ${styles.title}`}
              >
                Sobre Mí
              </h1>
              <motion.img
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                loading="lazy"
                src="/assets/aboutme-picTINY.png"
                alt=""
              />
            </div>
          </div>
          <div className={styles.info_section}>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Soy Ingeniero de Sistemas y Desarrollador Web Front-End
              especializado en crear aplicaciones y sitios web cautivadores. Con
              sólidos conocimientos en HTML, CSS, Sass, JavaScript y React,
              puedo transformar tus ideas en una experiencia digital impactante.
              Mi obsesión por los detalles y mi enfoque en la experiencia visual
              del usuario garantizan resultados impresionantes. Además, estoy
              versado en herramientas como Adobe XD, Figma y GIT para llevar la
              colaboración y la eficiencia al máximo. Si buscas un experto en
              desarrollo Front-End con habilidades UX/UI excepcionales,
              ¡Contáctame!
            </motion.p>
          </div>
          <button
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
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
