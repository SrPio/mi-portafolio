import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";

function Contact({ isDarkMode }) {
  return (
    <div
      id="contact"
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
            action=""
          >
            <h1>¡Trabajemos juntos!</h1>
            <div className={styles.form_gruop}>
              <label htmlFor="">Nombre</label>
              <input
                className={styles.input_contact}
                type="text"
                placeholder="Escribe tu nombre"
              />
            </div>
            <div className={styles.form_gruop}>
              <label htmlFor="">Email</label>
              <input
                className={styles.input_contact}
                type="email"
                placeholder="Escribe tu email"
              />
            </div>
            <div className={styles.form_gruop}>
              <label htmlFor="">Mensaje</label>
              <textarea
                className={styles.input_area}
                type="text"
                placeholder="Escribe tu mensaje"
              />
            </div>
            <button className={styles.btn_send_contact}>Enviar</button>
          </form>
          <div className={styles.contanier_mobile_btns}>
            <button className={styles.btn_linkedin}>
              <img loading="lazy" src="/assets/linkedin-icon.svg" alt="icon" />
              Contáctame por Linkedin
            </button>
            <button className={styles.btn_github}>
              <img loading="lazy" src="/assets/github-icon.svg" alt="icon" />
              Contáctame por GitHub
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
            />
            <motion.img
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              loading="lazy"
              src="/assets/github-icon.svg"
              alt="icon"
              className={styles.icon_github}
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
