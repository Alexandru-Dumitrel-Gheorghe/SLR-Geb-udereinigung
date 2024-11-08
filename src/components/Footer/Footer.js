// src/components/Footer/Footer.jsx
import React from "react";
import styles from "./Footer.module.css";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className={styles.footer}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <div className={styles.container}>
        {/* Social Media Links */}
        <motion.div
          className={styles.socialMedia}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className={styles.icon} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className={styles.icon} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter className={styles.icon} />
          </a>
        </motion.div>

        {/* Copyright */}
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} SLR Gebäudereinigung. Alle Rechte
          vorbehalten.
        </p>

        {/* Credit */}
        <p className={styles.credit}>
          Design und Entwicklung von{" "}
          <a
            href="https://yourportfolio.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Alexandru G.
          </a>
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
