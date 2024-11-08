// src/components/Gemeinden/Gemeinden.js
import React, { Suspense, lazy } from "react";
import styles from "./Gemeinden.module.css";
import { motion } from "framer-motion";

// Lazy load icons for performance optimization
const FaArrowRight = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaArrowRight }))
);

const Gemeinden = () => {
  const gemeinden = [
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Gemeinde_Haar.png",
      alt: "Gemeinde Haar",
      name: "Gemeinde Haar",
      description:
        "Die Gemeinde Haar vertraut auf unsere Dienstleistungen, um öffentliche und private Räume sauber und gepflegt zu halten.",
      link: "#contact",
    },
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Gemeinde_Oberschleissheim.png",
      alt: "Gemeinde Oberschleißheim",
      name: "Gemeinde Oberschleißheim",
      description:
        "Gemeinde Oberschleißheim setzt auf unsere Expertise in der Gebäudereinigung, um höchste Standards in Sauberkeit zu gewährleisten.",
      link: "#contact",
    },
    // Adaugă mai multe obiecte dacă este necesar
  ];

  return (
    <section
      id="gemeinden"
      className={styles.gemeinden}
      aria-labelledby="gemeinden-heading"
    >
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 id="gemeinden-heading" className={styles.heading}>
          Unsere Gemeinden
        </h2>
        <div className={styles.cardsContainer}>
          {gemeinden.map((gemeinde, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className={styles.imageContainer}>
                <img
                  src={gemeinde.src}
                  alt={gemeinde.alt}
                  className={styles.image}
                  loading="lazy"
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{gemeinde.name}</h3>
                <p className={styles.cardDescription}>{gemeinde.description}</p>
                <a
                  href={gemeinde.link}
                  className={styles.button}
                  aria-label={`Kontaktieren Sie uns für ${gemeinde.name}`}
                >
                  Kontaktieren Sie uns
                  <Suspense
                    fallback={<span className={styles.iconPlaceholder}></span>}
                  >
                    <FaArrowRight className={styles.icon} aria-hidden="true" />
                  </Suspense>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Gemeinden;
