import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.container_project}>
      <div className={styles.project}>
        <div className={styles.container_info_project}>
          <h1>Mis Proyectos</h1>
          <div className={styles.container_items}>
            <div className={styles.items}>
              <img src="/assets/project-001.png" alt="" />
            </div>
            <div className={styles.items}>
              <img src="/assets/project-002.png" alt="" />
            </div>
            <div className={styles.items}>
              <img src="/assets/project-003.png" alt="" />
            </div>
            <div className={styles.items}>
              <img src="/assets/project-004.png" alt="" />
            </div>
          </div>
          <button className={styles.btn_projects}>Ver más</button>
        </div>
      </div>
    </div>
  );
}

export default Projects;
