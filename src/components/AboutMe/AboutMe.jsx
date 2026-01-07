import React from "react";
import styles from "./AboutMe.module.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function AboutMe({ isDarkMode, changeIconSelected, isScrollChange }) {
  const { t } = useTranslation();
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
                {t("aboutMe.title")}
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
              {t("aboutMe.description")}
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
            {t("aboutMe.downloadCV")}
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
