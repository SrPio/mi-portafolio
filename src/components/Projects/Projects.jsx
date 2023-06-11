import React from "react";
import styles from "./Projects.module.css";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

function Projects({ isDarkMode, changeIconSelected, isScrollChange }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isScrollChange) {
      const handleScroll = () => {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight / 2) {
          changeIconSelected("cuadros");
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
      id="projects"
      ref={containerRef}
      className={`${isDarkMode ? styles.dark : ""} ${styles.container_project}`}
    >
      <div className={styles.project}>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${
            styles.container_info_project
          }`}
        >
          <h1 className={`${isDarkMode ? styles.dark : ""}`}>Mis Proyectos</h1>
          <div className={styles.container_items}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={`${styles.items} ${styles.items1}`}
              onClick={() => window.open("https://0ky9v.csb.app/", "_blank")}
            >
              <div className={styles.badge__items}>
                <h3>HTML</h3>
                <h3>CSS</h3>
              </div>
              <h2>Podcast Channel</h2>
              <h2>
                Demo
                <img
                  className={styles.arrow__icon}
                  loading="lazy"
                  src="/assets/arrow.svg"
                  alt=""
                />
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.0,
              }}
              className={`${styles.items} ${styles.items2}`}
              onClick={() =>
                window.open("https://peliculas-app-bay.vercel.app/", "_blank")
              }
            >
              <div className={styles.badge__items}>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JAVASCRIPT</h3>
                <h3>REACT</h3>
              </div>
              <h2>Peliculas-app</h2>
              <h2>
                Demo
                <img
                  className={styles.arrow__icon}
                  loading="lazy"
                  src="/assets/arrow.svg"
                  alt=""
                />
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
              }}
              className={`${styles.items} ${styles.items3}`}
              onClick={() => window.open("https://dk0og.csb.app/", "_blank")}
            >
              <div className={styles.badge__items}>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JAVASCRIPT</h3>
                <h3>REACT</h3>
              </div>
              <h2>Gifos-Aplicacion-web</h2>
              <h2>
                Demo
                <img
                  className={styles.arrow__icon}
                  loading="lazy"
                  src="/assets/arrow.svg"
                  alt=""
                />
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={`${styles.items} ${styles.items4}`}
              onClick={() =>
                window.open("https://devs-united-fff3e.web.app/", "_blank")
              }
            >
              <div className={styles.badge__items}>
                <h3>HTML</h3>
                <h3>CSS</h3>
                <h3>JAVASCRIPT</h3>
                <h3>REACT</h3>
              </div>
              <h2>Devs-United</h2>
              <h2>
                Demo
                <img
                  className={styles.arrow__icon}
                  loading="lazy"
                  src="/assets/arrow.svg"
                  alt=""
                />
              </h2>
            </motion.div>
          </div>
          <div className={styles.container_itemsMobile}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={`${isDarkMode ? styles.dark : ""} ${
                styles.mobile_card
              }`}
            >
              <div
                className={`${styles.card_header} ${styles.mobileItem1}`}
              ></div>
              <div className={styles.card_body}>
                <div className={styles.badge__items}>
                  <h3>HTML</h3>
                  <h3>CSS</h3>
                </div>
                <h2 className={`${isDarkMode ? styles.dark : ""}`}>
                  Podcast Channel
                </h2>
                <h2
                  className={styles.card_btn}
                  onClick={() =>
                    window.open("https://0ky9v.csb.app/", "_blank")
                  }
                >
                  Demo
                </h2>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={`${isDarkMode ? styles.dark : ""} ${
                styles.mobile_card
              }`}
            >
              <div
                className={`${styles.card_header} ${styles.mobileItem2}`}
              ></div>
              <div className={styles.card_body}>
                <div className={styles.badge__items}>
                  <h3>HTML</h3>
                  <h3>CSS</h3>
                  <h3>JAVASCRIPT</h3>
                  <h3>REACT</h3>
                </div>
                <h2 className={`${isDarkMode ? styles.dark : ""}`}>
                  Peliculas-app
                </h2>
                <h2
                  className={styles.card_btn}
                  onClick={() =>
                    window.open(
                      "https://peliculas-app-bay.vercel.app/",
                      "_blank"
                    )
                  }
                >
                  Demo
                </h2>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={`${isDarkMode ? styles.dark : ""} ${
                styles.mobile_card
              }`}
            >
              <div
                className={`${styles.card_header} ${styles.mobileItem3}`}
              ></div>
              <div className={styles.card_body}>
                <div className={styles.badge__items}>
                  <h3>HTML</h3>
                  <h3>CSS</h3>
                  <h3>JAVASCRIPT</h3>
                  <h3>REACT</h3>
                </div>
                <h2 className={`${isDarkMode ? styles.dark : ""}`}>
                  Gifos-Aplicacion-web
                </h2>
                <h2
                  className={styles.card_btn}
                  onClick={() =>
                    window.open("https://dk0og.csb.app/", "_blank")
                  }
                >
                  Demo
                </h2>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={`${isDarkMode ? styles.dark : ""} ${
                styles.mobile_card
              }`}
            >
              <div
                className={`${styles.card_header} ${styles.mobileItem4}`}
              ></div>
              <div className={styles.card_body}>
                <div className={styles.badge__items}>
                  <h3>HTML</h3>
                  <h3>CSS</h3>
                  <h3>JAVASCRIPT</h3>
                  <h3>REACT</h3>
                </div>
                <h2 className={`${isDarkMode ? styles.dark : ""}`}>
                  Devs-United
                </h2>
                <h2
                  className={styles.card_btn}
                  onClick={() =>
                    window.open("https://devs-united-fff3e.web.app/", "_blank")
                  }
                >
                  Demo
                </h2>
              </div>
            </motion.div>
          </div>
          <button
            className={styles.btn_projects}
            onClick={() => window.open("https://github.com/SrPio", "_blank")}
          >
            Ver más
          </button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
