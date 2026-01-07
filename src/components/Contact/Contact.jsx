import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";
import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";

function Contact({ isDarkMode, changeIconSelected, isScrollChange }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);

  useEffect(() => {
    if (!isScrollChange) {
      const handleScroll = () => {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight / 2) {
          changeIconSelected("café");
        }
      };

      window.addEventListener("scroll", handleScroll);

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [changeIconSelected]);

  const [state, handleSubmit] = useForm("mgebpbwa");
  if (state.succeeded) {
    return (
      <div
        id="contact"
        className={`${isDarkMode ? styles.dark : ""} ${
          styles.container_contact
        }`}
      >
        <div className={styles.contact}>
          <div
            className={`${isDarkMode ? styles.dark : ""} ${
              styles.container_info_contact
            }`}
          >
            <form
              className={`${isDarkMode ? styles.dark : ""} ${
                styles.contact_form
              }`}
            >
              <h2 className={styles.form__submitted__text}>
                {t("contact.thanks")}
              </h2>
            </form>
            <div className={styles.contanier_mobile_btns}>
              <button
                className={styles.btn_linkedin}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/andres-fernando-jaramillo-avila/",
                    "_blank"
                  )
                }
              >
                <img
                  loading="lazy"
                  src="/assets/linkedin-icon.svg"
                  alt="icon"
                />
                {t("contact.contactLinkedIn")}
              </button>
              <button
                className={styles.btn_github}
                onClick={() =>
                  window.open("https://github.com/SrPio", "_blank")
                }
              >
                <img loading="lazy" src="/assets/github-icon.svg" alt="icon" />
                {t("contact.contactGitHub")}
              </button>
            </div>
            <div className={styles.container_networks}>
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                loading="lazy"
                src="/assets/linkedin-icon.svg"
                alt="icon"
                className={styles.icon_linkedin}
                onClick={() =>
                  window.open(
                    "https://www.linkedin.com/in/andres-fernando-jaramillo-avila/",
                    "_blank"
                  )
                }
              />
              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                loading="lazy"
                src="/assets/github-icon.svg"
                alt="icon"
                className={styles.icon_github}
                onClick={() =>
                  window.open("https://github.com/SrPio", "_blank")
                }
              />
            </div>
          </div>
        </div>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${styles.footer}`}
        ></div>
      </div>
    );
  }

  return (
    <div
      id="contact"
      ref={containerRef}
      className={`${isDarkMode ? styles.dark : ""} ${styles.container_contact}`}
    >
      <div className={styles.contact}>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${
            styles.container_info_contact
          }`}
        >
          <form
            className={`${isDarkMode ? styles.dark : ""} ${
              styles.contact_form
            }`}
            onSubmit={handleSubmit}
          >
            <h1>{t("contact.title")}</h1>
            <div className={styles.form_gruop}>
              <label htmlFor="nombre">{t("contact.name")}</label>
              <input
                className={styles.input_contact}
                type="text"
                id="nombre"
                name="nombre"
                placeholder={t("contact.namePlaceholder")}
              />
              <ValidationError
                prefix={t("contact.name")}
                field="nombre"
                errors={state.errors}
              />
            </div>
            <div className={styles.form_gruop}>
              <label htmlFor="email">{t("contact.email")}</label>
              <input
                className={styles.input_contact}
                id="email"
                type="email"
                name="email"
                placeholder={t("contact.emailPlaceholder")}
              />
              <ValidationError
                prefix={t("contact.email")}
                field="email"
                errors={state.errors}
              />
            </div>
            <div className={styles.form_gruop}>
              <label htmlFor="mensaje">{t("contact.message")}</label>
              <textarea
                className={styles.input_area}
                type="text"
                id="mensaje"
                name="mensaje"
                placeholder={t("contact.messagePlaceholder")}
              />
              <ValidationError
                prefix={t("contact.message")}
                field="mensaje"
                errors={state.errors}
              />
            </div>
            <button
              className={styles.btn_send_contact}
              type="submit"
              disabled={state.submitting}
            >
              {t("contact.send")}
            </button>
          </form>
          <div className={styles.contanier_mobile_btns}>
            <button
              className={styles.btn_linkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andres-fernando-jaramillo-avila/",
                  "_blank"
                )
              }
            >
              <img loading="lazy" src="/assets/linkedin-icon.svg" alt="icon" />
              {t("contact.contactLinkedIn")}
            </button>
            <button
              className={styles.btn_github}
              onClick={() => window.open("https://github.com/SrPio", "_blank")}
            >
              <img loading="lazy" src="/assets/github-icon.svg" alt="icon" />
              {t("contact.contactGitHub")}
            </button>
          </div>
          <div className={styles.container_networks}>
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              loading="lazy"
              src="/assets/linkedin-icon.svg"
              alt="icon"
              className={styles.icon_linkedin}
              onClick={() =>
                window.open(
                  "https://www.linkedin.com/in/andres-fernando-jaramillo-avila/",
                  "_blank"
                )
              }
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              loading="lazy"
              src="/assets/github-icon.svg"
              alt="icon"
              className={styles.icon_github}
              onClick={() => window.open("https://github.com/SrPio", "_blank")}
            />
          </div>
        </div>
      </div>
      <div
        className={`${isDarkMode ? styles.dark : ""} ${styles.footer}`}
      ></div>
    </div>
  );
}

export default Contact;
