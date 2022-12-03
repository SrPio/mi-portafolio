import React from "react";
import styles from "./Education.module.css";

import { motion } from "framer-motion";

function Education({ isDarkMode }) {
  return (
    <div
      id="education"
      className={`${isDarkMode ? styles.dark : ""} ${
        styles.education_container
      }`}
    >
      <div className={`${isDarkMode ? styles.dark : ""} ${styles.education}`}>
        <h1>Educación</h1>
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
    </div>
  );
}

export default Education;
