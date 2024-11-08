// src/components/Hero/Bubbles.js
import React from "react";
import styles from "./Bubbles.module.css";

const Bubbles = () => {
  // Generăm un număr de bule
  const bubbles = Array.from({ length: 20 });

  return (
    <div className={styles.bubblesContainer}>
      {bubbles.map((_, index) => (
        <span key={index} className={styles.bubble}></span>
      ))}
    </div>
  );
};

export default Bubbles;
