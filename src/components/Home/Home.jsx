import React from "react";
import styles from "./Home.module.css";
import Typed from "typed.js";
import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion, useAnimationControls } from "framer-motion";

const GLASS_HTML_FLOAT = { opacity: 1, scale: 1, x: 30, y: -20 };
const GLASS_HTML_TRANSITION = {
  default: {
    duration: 0.3,
    ease: "linear",
  },
  x: {
    duration: 2,
    ease: [0.17, 0.67, 0.83, 0.67],
    repeat: Infinity,
    repeatType: "reverse",
  },
  y: {
    duration: 2,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
  scale: {
    type: "spring",
    damping: 3,
    stiffness: 100,
    restDelta: 0.001,
  },
};

const GLASS_JS_FLOAT = { opacity: 1, scale: 1, x: 40, y: 25 };
const GLASS_JS_TRANSITION = {
  default: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  },
  x: {
    duration: 5,
    ease: [0.17, 0.67, 0.83, 0.67],
    repeat: Infinity,
    repeatType: "reverse",
  },
  y: {
    duration: 5,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
  scale: {
    type: "spring",
    damping: 3,
    stiffness: 100,
    restDelta: 0.001,
  },
};

const GLASS_CSS_FLOAT = { opacity: 1, scale: 1, x: -40, y: 30 };
const GLASS_CSS_TRANSITION = {
  default: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  },
  x: {
    duration: 6,
    ease: [0.17, 0.67, 0.83, 0.67],
    repeat: Infinity,
    repeatType: "reverse",
  },
  y: {
    duration: 6,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
  scale: {
    type: "spring",
    damping: 3,
    stiffness: 100,
    restDelta: 0.001,
  },
};

const GLASS_REACT_FLOAT = { opacity: 1, scale: 1, x: -30, y: 30 };
const GLASS_REACT_TRANSITION = {
  default: {
    duration: 0.3,
    ease: [0, 0.71, 0.2, 1.01],
  },
  x: {
    duration: 4,
    ease: [0.17, 0.67, 0.83, 0.87],
    repeat: Infinity,
    repeatType: "reverse",
  },
  y: {
    duration: 4,
    ease: "linear",
    repeat: Infinity,
    repeatType: "reverse",
  },
  scale: {
    type: "spring",
    damping: 3,
    stiffness: 100,
    restDelta: 0.001,
  },
};

// Safari decodes the intro's VP9/WebM but ignores WebM's alpha channel, so the
// cutout renders over an opaque black box. Every browser on iOS/iPadOS is WebKit
// underneath, so brand sniffing alone is not enough. Until we ship an
// HEVC-with-alpha source these engines can composite, they get the still portrait.
const shouldSkipIntroVideo = () => {
  if (typeof navigator === "undefined") return true;

  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  const isSafari =
    /^((?!chromium|chrome|crios|fxios|edg|android).)*safari/i.test(ua);

  return isIOS || isSafari;
};

function Home({ isDarkMode, changeIconSelected, isScrollChange }) {
  const { t, i18n } = useTranslation();
  const variableText = useRef(null);
  const [skipIntroVideo] = useState(shouldSkipIntroVideo);
  const [introVideoEnded, setIntroVideoEnded] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(!skipIntroVideo);

  const glassHtmlControls = useAnimationControls();
  const glassJsControls = useAnimationControls();
  const glassCssControls = useAnimationControls();
  const glassReactControls = useAnimationControls();

  useEffect(() => {
    glassHtmlControls.start(GLASS_HTML_FLOAT, GLASS_HTML_TRANSITION);
    glassJsControls.start(GLASS_JS_FLOAT, GLASS_JS_TRANSITION);
    glassCssControls.start(GLASS_CSS_FLOAT, GLASS_CSS_TRANSITION);
    glassReactControls.start(GLASS_REACT_FLOAT, GLASS_REACT_TRANSITION);
  }, []);

  // onEnded is the only thing that reveals the still portrait, and it never
  // fires if playback stops short — a backgrounded tab pauses the video, and a
  // decode stall leaves it hanging. Reveal the portrait once the intro has had
  // well past its runtime so the hero can never stay empty.
  useEffect(() => {
    if (!showIntroVideo || introVideoEnded) return;

    const watchdog = setTimeout(() => setIntroVideoEnded(true), 12000);
    return () => clearTimeout(watchdog);
  }, [showIntroVideo, introVideoEnded]);

  useEffect(() => {
    const typed = new Typed(variableText.current, {
      strings: [
        t("home.professions.systemsEngineer"),
        t("home.professions.frontendDeveloper"),
        t("home.professions.uxuiDesigner"),
        t("home.professions.creative"),
      ],
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
      showCursor: true,
      /* cursorChar: "|", */
    });

    return () => {
      typed.destroy();
    };
  }, [i18n.language, t]);

  const containerRef = useRef(null);

  useEffect(() => {
    if (!isScrollChange) {
      const handleScroll = () => {
        const { top } = containerRef.current.getBoundingClientRect();
        if (top < window.innerHeight / 2) {
          changeIconSelected("casa");
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
      id="home"
      ref={containerRef}
      className={`${isDarkMode ? styles.dark : ""} ${styles.container_home}`}
    >
      <div className={styles.home}>
        <div
          className={`${isDarkMode ? styles.dark : ""} ${
            styles.container_title
          }`}
        >
          <h1 className={`${isDarkMode ? styles.dark : ""}`}>
            <span className={styles.home__textSaludo}>
              {t("home.greeting")}
            </span>
            {t("home.soy")}
            <br />
            {t("home.name")}
            <br />
            <span ref={variableText} className={styles.home__variableText}>
              {t("home.professions.systemsEngineer")}
            </span>
          </h1>
          <a href="#contact" className={styles.btn_saluda}>
            {t("home.greetButton")}
            <img loading="lazy" src="" alt="" />
          </a>
        </div>
        <div className={styles.container_pic}>
          <div>
            <motion.img
              initial={{ opacity: 0, scale: 0.5, x: 0, y: 0 }}
              animate={glassHtmlControls}
              drag
              onDragEnd={() =>
                glassHtmlControls.start(GLASS_HTML_FLOAT, GLASS_HTML_TRANSITION)
              }
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
              animate={glassJsControls}
              drag
              onDragEnd={() =>
                glassJsControls.start(GLASS_JS_FLOAT, GLASS_JS_TRANSITION)
              }
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
              animate={glassCssControls}
              drag
              onDragEnd={() =>
                glassCssControls.start(GLASS_CSS_FLOAT, GLASS_CSS_TRANSITION)
              }
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
              animate={glassReactControls}
              drag
              onDragEnd={() =>
                glassReactControls.start(
                  GLASS_REACT_FLOAT,
                  GLASS_REACT_TRANSITION
                )
              }
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
              className={styles.pic}
              initial={{ opacity: 0 }}
              animate={{ opacity: introVideoEnded || skipIntroVideo ? 1 : 0 }}
              transition={{ duration: 0.9, ease: "easeInOut" }}
              src="/assets/home-picTINY.png"
              alt=""
              loading="lazy"
            />
            {showIntroVideo && (
              <motion.video
                className={styles.intro_video}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  introVideoEnded
                    ? { opacity: 0, scale: 1.15 }
                    : { opacity: 1, scale: 1.15 }
                }
                transition={
                  introVideoEnded
                    ? { duration: 0.9, ease: "easeInOut" }
                    : {
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }
                }
                onAnimationComplete={() => {
                  if (introVideoEnded) setShowIntroVideo(false);
                }}
                autoPlay
                muted
                playsInline
                onEnded={() => {
                  setIntroVideoEnded(true);
                  setTimeout(() => setShowIntroVideo(false), 950);
                }}
                onError={() => setIntroVideoEnded(true)}
                onLoadedMetadata={(e) => {
                  e.currentTarget.playbackRate = 1.8;
                }}
              >
                <source
                  src="/assets/transparent-video-yo.webm"
                  type="video/webm"
                />
                <source
                  src="/assets/transparent-video-yo.mov"
                  type="video/quicktime"
                />
              </motion.video>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
