import React from "react";
import styles from "./Gemeinden.module.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Gemeinden = () => {
  const gemeinden = [
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Gemeinde_Haar.png",
      alt: "Gemeinde Haar",
      name: "Gemeinde Haar",
      description:
        "Die Gemeinde Haar vertraut auf unsere Dienstleistungen, um öffentliche und private Räume sauber und gepflegt zu halten. Wir gewährleisten eine hygienische und angenehme Umgebung für alle Bewohner.",
      link: "#contact",
    },
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Gemeinde_Oberschleissheim.png",
      alt: "Gemeinde Oberschleißheim",
      name: "Gemeinde Oberschleißheim",
      description:
        "Gemeinde Oberschleißheim setzt auf unsere Expertise in der Gebäudereinigung, um höchste Standards in Sauberkeit und Professionalität zu gewährleisten. Unser Service sorgt für eine gepflegte und einladende Umgebung.",
      link: "#contact",
    },
  ];

  return (
    <section id="gemeinden" className={styles.gemeinden}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>
          Gemeinden die auf unsere Dienstleistungen setzen
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
                />
              </div>
              <div className={styles.content}>
                <h3 className={styles.cardTitle}>{gemeinde.name}</h3>
                <p className={styles.cardDescription}>{gemeinde.description}</p>
                <a href={gemeinde.link} className={styles.button}>
                  Kontaktieren Sie uns <FaArrowRight className={styles.icon} />
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
