// src/components/Hero/Sparkles.js
import React from "react";
import { motion } from "framer-motion";
import styles from "./Sparkles.module.css";

const Sparkles = () => {
  const sparkles = Array.from({ length: 15 });

  return (
    <div className={styles.sparklesContainer}>
      {sparkles.map((_, index) => (
        <motion.span
          key={index}
          className={styles.sparkle}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 2 + 1,
            repeat: Infinity,
            repeatType: "loop",
            delay: Math.random() * 5,
          }}
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 8 + 2}px`,
            height: `${Math.random() * 8 + 2}px`,
            backgroundColor: `rgba(255, 255, 255, ${
              Math.random() * 0.8 + 0.2
            })`,
          }}
        />
      ))}
    </div>
  );
};

export default Sparkles;
