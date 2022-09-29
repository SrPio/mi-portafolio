import React from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Home() {
  const variableText = useRef(null);

  useEffect(() => {
    const typed = new Typed(variableText.current, {
      strings: [
        "Ingeniero de Sistemas",
        "Desarrollador Web Front-end",
        "Diseñador UX/UI",
        "Creativo",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      /* cursorChar: "|", */
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className={styles.container_home}>
      <div className={styles.home}>
        <div className={styles.container_title}>
          <h1>
            <span className={styles.home__textSaludo}>Hola, </span>
            soy
            <br />
            Andrés Jaramillo
            <br />
            <span ref={variableText} className={styles.home__variableText}>
              Ingeniero de sistemas
            </span>
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
