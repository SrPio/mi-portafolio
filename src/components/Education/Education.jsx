import React from "react";
import styles from "./Education.module.css";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

function Education({ isDarkMode, changeIconSelected, isScrollChange }) {
  const { t } = useTranslation();
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
        <h1>{t("education.title")}</h1>
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
                <p className={styles.item_date}>{t("education.degree.date")}</p>
                <h2 className={styles.item_title}>
                  {t("education.degree.title")}
                </h2>
                <p className={styles.item_institution}>
                  {t("education.degree.institution")}
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
                <p className={styles.item_date}>
                  {t("education.bootcamp.date")}
                </p>
                <h2 className={styles.item_title}>
                  {t("education.bootcamp.title")}
                </h2>
                <p className={styles.item_institution}>
                  {t("education.bootcamp.institution")}
                </p>
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
                <p className={styles.item_date}>{t("education.work1.date")}</p>
                <h2 className={styles.item_title}>
                  {t("education.work1.title")}
                </h2>
                <p className={styles.item_institution}>
                  {t("education.work1.institution")}
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
                <p className={styles.item_date}>{t("education.work2.date")}</p>
                <h2 className={styles.item_title}>
                  {t("education.work2.title")}
                </h2>
                <p className={styles.item_institution}>
                  {t("education.work2.institution")}
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
                <p className={styles.item_date}>{t("education.work3.date")}</p>
                <h2 className={styles.item_title}>
                  {t("education.work3.title")}
                </h2>
                <p className={styles.item_institution}>
                  {t("education.work3.institution")}
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
                <p className={styles.item_date}>{t("education.work4.date")}</p>
                <h2 className={styles.item_title}>
                  {t("education.work4.title")}
                </h2>
                <p className={styles.item_institution}>
                  {t("education.work4.institution")}
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
