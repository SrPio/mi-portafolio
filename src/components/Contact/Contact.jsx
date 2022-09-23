import React from "react";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <div className={styles.container_contact}>
      <div className={styles.contact}>
        <div className={styles.container_info_contact}>
          <form className={styles.contact_form} action="">
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
          <div className={styles.container_networks}>
            <img
              src="/assets/linkedin-icon.svg"
              alt=""
              className={styles.icon_linkedin}
            />
            <img
              src="/assets/github-icon.svg"
              alt=""
              className={styles.icon_github}
            />
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
}

export default Contact;
