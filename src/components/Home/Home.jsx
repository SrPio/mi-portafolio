import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div id="home" className={styles.container_home}>
      <div className={styles.home}>
        <div className={styles.container_title}>
          <h1>
            <span>Hola</span>
            <br />
            soy Andrés Fernando Jaramillo Avila
            <br />
            Ingeniero de sistemas / Desarrollador web front end
          </h1>
          <div className={styles.btn_saluda}>
            Saluda
            <img src="" alt="" />
          </div>
        </div>
        <div className={styles.container_pic}>
          <div>
            <img
              className={styles.glass_html}
              src="/assets/html-glass.svg"
              alt=""
            />
            <img
              className={styles.glass_js}
              src="/assets/js-glass.svg"
              alt=""
            />
            <img
              className={styles.glass_css}
              src="/assets/css-glass.svg"
              alt=""
            />
            <img
              className={styles.glass_react}
              src="/assets/react-glass.svg"
              alt=""
            />
            <img
              className={styles.back_pic}
              src="/assets/back-pic-home.svg"
              alt=""
            />
            <img className={styles.pic} src="/assets/home-pic.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
