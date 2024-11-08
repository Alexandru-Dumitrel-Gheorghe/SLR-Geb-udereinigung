// src/components/Hero/Hero.js

import React from "react";
import styles from "./Hero.module.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import Bubbles from "./Bubbles"; // Importăm componenta Bubbles

const Hero = () => {
  return (
    <section className={styles.hero} id="hero">
      <Bubbles /> {/* Adăugăm componenta Bubbles */}
      <div className={styles.overlay}></div>
      <div className={styles.content}>
        <motion.div
          className={styles.textSection}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            SLR Gebäudereinigung
          </motion.h1>
          <motion.p
            className={styles.subtitle}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Professionelle Reinigungsdienstleistungen für Ihr Zuhause und Ihr
            Unternehmen
          </motion.p>
          <div className={styles.buttons}>
            <motion.a
              href="#leistungen"
              className={styles.primaryButton}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Unsere Leistungen
            </motion.a>
            <motion.a
              href="#kontakt"
              className={styles.secondaryButton}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              Kontaktieren Sie uns
            </motion.a>
          </div>
        </motion.div>
        <motion.div
          className={styles.contactSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <motion.div
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+4915228714145" className={styles.contactLink}>
              +49 (0) 152 / 28714145
            </a>
          </motion.div>
          <motion.div
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaEnvelope className={styles.icon} />
            <a
              href="mailto:kontakt@slr-gebaeudereinigung.de"
              className={styles.contactLink}
            >
              kontakt@slr-gebaeudereinigung.de
            </a>
          </motion.div>
          <motion.div
            className={styles.contactItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaMapMarkerAlt className={styles.icon} />
            <span className={styles.contactText}>
              Haringstr. 11 85635 Siegertsbrunn
            </span>
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className={styles.scrollDown}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
      >
        <a
          href="#leistungen"
          className={styles.scrollLink}
          aria-label="Scroll Down"
        >
          <span></span>
          <span></span>
          <span></span>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
