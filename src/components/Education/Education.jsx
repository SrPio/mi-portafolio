import React from "react";
import styles from "./Education.module.css";

function Education() {
  return (
    <div className={styles.education_container}>
      <div className={styles.education}>
        <h1>Educación</h1>
        <div className={styles.container_item}>
          <div className={styles.container_img}>
            <img
              src="/assets/degree-icon.svg"
              alt="degree icon"
              className={styles.item_img}
            />
          </div>
          <div className={styles.item_text}>
            <p className={styles.item_date}>2017 - 2022</p>
            <h2 className={styles.item_title}>Ingeniería de Sistemas</h2>
            <p className={styles.item_institution}>
              Universidad del Valle, Colombia.
            </p>
          </div>
        </div>
        <div className={styles.container_item}>
          <div className={styles.container_img}>
            <img
              src="/assets/degree-icon.svg"
              alt="degree icon"
              className={styles.item_img}
            />
          </div>
          <div className={styles.item_text}>
            <p className={styles.item_date}>2021 - 2022</p>
            <h2 className={styles.item_title}>Desarrollo Web Front End</h2>
            <p className={styles.item_institution}>Acámica, Colombia.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
