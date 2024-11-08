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
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className={styles.title}>SLR Gebäudereinigung</h1>
          <p className={styles.subtitle}>
            Professionelle Reinigungsdienstleistungen für Ihr Zuhause und Ihr
            Unternehmen
          </p>
          <div className={styles.buttons}>
            <a href="#leistungen" className={styles.primaryButton}>
              Unsere Leistungen
            </a>
            <a href="#kontakt" className={styles.secondaryButton}>
              Kontaktieren Sie uns
            </a>
          </div>
        </motion.div>
        <motion.div
          className={styles.contactSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className={styles.contactItem}>
            <FaPhoneAlt className={styles.icon} />
            <a href="tel:+4915228714145" className={styles.contactLink}>
              +49 (0) 152 / 28714145
            </a>
          </div>
          <div className={styles.contactItem}>
            <FaEnvelope className={styles.icon} />
            <a
              href="mailto:kontakt@slr-gebaeudereinigung.de"
              className={styles.contactLink}
            >
              kontakt@slr-gebaeudereinigung.de
            </a>
          </div>
          <div className={styles.contactItem}>
            <FaMapMarkerAlt className={styles.icon} />
            <span className={styles.contactText}>
              Haringstr. 11 85635 Siegertsbrunn
            </span>
          </div>
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
