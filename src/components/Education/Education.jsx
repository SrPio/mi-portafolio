import React from "react";
import styles from "./Education.module.css";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

function Education({ isDarkMode, changeIconSelected, isScrollChange }) {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isScrollChange) {
      const handleScroll = () => {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight / 2) {
          changeIconSelected("libro");
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
      id="education"
      ref={containerRef}
      className={`${isDarkMode ? styles.dark : ""} ${
        styles.education_container
      }`}
    >
      <div className={`${isDarkMode ? styles.dark : ""} ${styles.education}`}>
        <h1>Trayectoria</h1>
        <div className={styles.items_wrapper}>
          <div className={styles.column}>
            <div className={styles.container_item}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                /* transition={{ delay: 0.5 }} */
                className={styles.container_img}
              >
                <img
                  loading="lazy"
                  src="/assets/degree-icon.svg"
                  alt="degree icon"
                  className={styles.item_img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.item_text}
              >
                <p className={styles.item_date}>2017 - 2022</p>
                <h2 className={styles.item_title}>Ingeniería de Sistemas</h2>
                <p className={styles.item_institution}>
                  Universidad del Valle, Colombia.
                </p>
              </motion.div>
            </div>
            <div className={styles.container_item}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                /* transition={{ delay: 0.5 }} */
                className={styles.container_img}
              >
                <img
                  loading="lazy"
                  src="/assets/degree-icon.svg"
                  alt="degree icon"
                  className={styles.item_img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.item_text}
              >
                <p className={styles.item_date}>2021 - 2022</p>
                <h2 className={styles.item_title}>Desarrollo Web Front End</h2>
                <p className={styles.item_institution}>Acámica, Colombia.</p>
              </motion.div>
            </div>
          </div>
          <div className={styles.column}>
            <div className={styles.container_item}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                /* transition={{ delay: 0.5 }} */
                className={styles.container_img}
              >
                <img
                  loading="lazy"
                  src="/assets/maletin.svg"
                  alt="work icon"
                  className={styles.item_img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.item_text}
              >
                <p className={styles.item_date}>2022 - 2024</p>
                <h2 className={styles.item_title}>FRONTEND DEVELOPER</h2>
                <p className={styles.item_institution}>PROtalento</p>
              </motion.div>
            </div>
            <div className={styles.container_item}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                /* transition={{ delay: 0.5 }} */
                className={styles.container_img}
              >
                <img
                  loading="lazy"
                  src="/assets/maletin.svg"
                  alt="work icon"
                  className={styles.item_img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.item_text}
              >
                <p className={styles.item_date}>2024 - 2024</p>
                <h2 className={styles.item_title}>
                  ING. DESARROLLADOR FRONTEND
                </h2>
                <p className={styles.item_institution}>
                  B&B HOLDING MEDELLÍN S.A.S
                </p>
              </motion.div>
            </div>
            <div className={styles.container_item}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                /* transition={{ delay: 0.5 }} */
                className={styles.container_img}
              >
                <img
                  loading="lazy"
                  src="/assets/maletin.svg"
                  alt="work icon"
                  className={styles.item_img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.item_text}
              >
                <p className={styles.item_date}>2025 – 2025</p>
                <h2 className={styles.item_title}>DESARROLLADOR WEB</h2>
                <p className={styles.item_institution}>TECNOLOGÍA PLUS</p>
              </motion.div>
            </div>
            <div className={styles.container_item}>
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                /* transition={{ delay: 0.5 }} */
                className={styles.container_img}
              >
                <img
                  loading="lazy"
                  src="/assets/maletin.svg"
                  alt="work icon"
                  className={styles.item_img}
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className={styles.item_text}
              >
                <p className={styles.item_date}>2025 – Actualidad</p>
                <h2 className={styles.item_title}>DESARROLLADOR DE SOFTWARE</h2>
                <p className={styles.item_institution}>COODE</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
