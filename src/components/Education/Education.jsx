import React from "react";
import styles from "./Education.module.css";
import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const VISIBLE_LIMIT = 5;

const FILTERS = [
  { id: "all", kind: null },
  { id: "work", kind: "work" },
  { id: "edu", kind: "edu" },
];

const ICONS = {
  work: { src: "/assets/maletin.svg", alt: "work icon" },
  edu: { src: "/assets/degree-icon.svg", alt: "degree icon" },
};

function Education({ isDarkMode, changeIconSelected, isScrollChange }) {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const [filter, setFilter] = useState("all");
  const [isExpanded, setIsExpanded] = useState(false);

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

  const items = useMemo(() => {
    const list = t("education.items", { returnObjects: true });
    return Array.isArray(list) ? list : [];
  }, [t]);

  const counts = useMemo(
    () => ({
      all: items.length,
      work: items.filter((item) => item.kind === "work").length,
      edu: items.filter((item) => item.kind === "edu").length,
    }),
    [items]
  );

  const filtered = useMemo(
    () => items.filter((item) => filter === "all" || item.kind === filter),
    [items, filter]
  );

  const visible = isExpanded ? filtered : filtered.slice(0, VISIBLE_LIMIT);
  const hidden = Math.max(0, filtered.length - VISIBLE_LIMIT);

  const handleFilter = (id) => {
    setFilter(id);
    setIsExpanded(false);
  };

  return (
    <div
      id="education"
      ref={containerRef}
      className={`${isDarkMode ? styles.dark : ""} ${
        styles.education_container
      }`}
    >
      <div className={`${isDarkMode ? styles.dark : ""} ${styles.education}`}>
        <div className={styles.header}>
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {t("education.title")}
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className={styles.filters}
            role="tablist"
          >
            {FILTERS.map(({ id }) => (
              <button
                key={id}
                type="button"
                role="tab"
                aria-selected={filter === id}
                onClick={() => handleFilter(id)}
                className={`${styles.filter} ${
                  filter === id ? styles.filter_active : ""
                }`}
              >
                {t(`education.filters.${id}`)}
                <span className={styles.filter_count}>{counts[id]}</span>
              </button>
            ))}
          </motion.div>
        </div>

        <div className={styles.timeline}>
          {visible.map((item, index) => (
            <motion.div
              key={`${filter}-${item.id}`}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.15 }}
              className={styles.item}
            >
              <span
                className={`${styles.dot} ${
                  item.kind === "edu" ? styles.dot_edu : ""
                }`}
              />
              <p className={styles.item_date}>{item.date}</p>
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + index * 0.15 }}
                className={`${styles.container_img} ${
                  item.kind === "edu" ? styles.container_img_edu : ""
                }`}
              >
                <img
                  loading="lazy"
                  src={ICONS[item.kind].src}
                  alt={ICONS[item.kind].alt}
                  className={styles.item_img}
                />
              </motion.span>
              <span className={styles.item_text}>
                <h2 className={styles.item_title}>{item.title}</h2>
                <p className={styles.item_date_inline}>{item.date}</p>
                <p className={styles.item_institution}>{item.institution}</p>
              </span>
              <span
                className={`${styles.tag} ${
                  item.kind === "edu" ? styles.tag_edu : ""
                }`}
              >
                {t(`education.tags.${item.kind}`)}
              </span>
            </motion.div>
          ))}

          {filtered.length === 0 && (
            <p className={styles.empty}>{t("education.empty")}</p>
          )}

          {hidden > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + visible.length * 0.15 }}
              className={styles.more_row}
            >
              <span className={`${styles.dot} ${styles.dot_more}`} />
              <button
                type="button"
                className={styles.more_btn}
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded
                  ? t("education.less")
                  : t("education.more", { count: hidden })}
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Education;
