import React from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { useEffect, useRef } from "react";

import { motion } from "framer-motion";

function Home({ isDarkMode }) {
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
    <div
      id="home"
      className={`${isDarkMode ? styles.dark : ""} ${styles.container_home}`}
    >
      <div className={styles.home}>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${
            styles.container_title
          }`}
        >
          <h1 className={`${isDarkMode ? styles.dark : ""}`}>
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
            <img loading="lazy" src="" alt="" />
          </div>
        </div>
        <div className={styles.container_pic}>
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={[{ opacity: 1, scale: 1, x: 30, y: -20 }]}
              transition={{
                default: {
                  duration: 0.3,
                  ease: "linear",
                },
                x: {
                  duration: 2,
                  ease: [0.17, 0.67, 0.83, 0.67],
                  yoyo: Infinity,
                },
                y: {
                  duration: 2,
                  ease: "linear",
                  yoyo: Infinity,
                },
                scale: {
                  type: "spring",
                  damping: 3,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              className={styles.glass_html}
              src="/assets/html-glass.svg"
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: 40, y: 25 }}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                x: {
                  duration: 5,
                  ease: [0.17, 0.67, 0.83, 0.67],
                  yoyo: Infinity,
                },
                y: {
                  duration: 5,
                  ease: "linear",
                  yoyo: Infinity,
                },
                scale: {
                  type: "spring",
                  damping: 3,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              className={styles.glass_js}
              src="/assets/js-glass.svg"
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: -40, y: 30 }}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                x: {
                  duration: 6,
                  ease: [0.17, 0.67, 0.83, 0.67],
                  yoyo: Infinity,
                  loop: Infinity,
                },
                y: {
                  duration: 6,
                  ease: "linear",
                  yoyo: Infinity,
                  loop: Infinity,
                },
                scale: {
                  type: "spring",
                  damping: 3,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              dragTransition={{ stiffness: 300 }}
              className={styles.glass_css}
              src="/assets/css-glass.svg"
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: 50, y: 0 }}
              animate={{ opacity: 1, scale: 1, x: -30, y: 30 }}
              transition={{
                default: {
                  duration: 0.3,
                  ease: [0, 0.71, 0.2, 1.01],
                },
                x: {
                  duration: 4,
                  ease: [0.17, 0.67, 0.83, 0.87],
                  yoyo: Infinity,
                },
                y: {
                  duration: 4,
                  ease: "linear",
                  yoyo: Infinity,
                },
                scale: {
                  type: "spring",
                  damping: 3,
                  stiffness: 100,
                  restDelta: 0.001,
                },
              }}
              drag
              dragConstraints={{
                top: -50,
                left: -50,
                right: 50,
                bottom: 50,
              }}
              className={styles.glass_react}
              src="/assets/react-glass.svg"
              alt=""
            />
            <img
              className={styles.back_pic}
              src={`${
                isDarkMode
                  ? "/assets/back-pic-home-dark.svg"
                  : "/assets/back-pic-home.svg"
              }`}
              alt=""
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.5,
                ease: [0, 0.71, 0.2, 1.01],
              }}
              className={styles.pic}
              src="/assets/home-picTINY.png"
              alt=""
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
