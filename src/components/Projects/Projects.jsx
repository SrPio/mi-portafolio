import React from "react";
import styles from "./Projects.module.css";

import { motion } from "framer-motion";

function Projects() {
  return (
    <div id="projects" className={styles.container_project}>
      <div className={styles.project}>
        <div className={styles.container_info_project}>
          <h1>Mis Proyectos</h1>
          <div className={styles.container_items}>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.5,
              }}
              className={styles.items}
            >
              <img loading="lazy" src="/assets/project-001.png" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.0,
              }}
              className={styles.items}
            >
              <img loading="lazy" src="/assets/project-002.png" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 1.5,
              }}
              className={styles.items}
            >
              <img loading="lazy" src="/assets/project-003.png" alt="" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 2.0,
              }}
              className={styles.items}
            >
              <img loading="lazy" src="/assets/project-004.png" alt="" />
            </motion.div>
          </div>
          <button className={styles.btn_projects}>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
