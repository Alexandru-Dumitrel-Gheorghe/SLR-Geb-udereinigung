// src/components/Services/Services.js
import React from "react";
import styles from "./Services.module.css";
import { motion } from "framer-motion";
import { FaBroom, FaSprayCan, FaHardHat } from "react-icons/fa";

const Services = () => {
  const servicesData = [
    {
      icon: <FaBroom />,
      title: "Unterhaltsreinigung",
      description:
        "Mit unserer professionellen Unterhaltsreinigung sorgen wir dafür, dass Ihre Räumlichkeiten regelmäßig sauber und gepflegt bleiben. Ob Büro, Praxis oder Gewerbefläche – wir passen unseren Service individuell an Ihre Bedürfnisse an.",
      image:
        "https://images.unsplash.com/photo-1583907659441-addbe699e921?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaSprayCan />,
      title: "Grundreinigung",
      description:
        "Die Grundreinigung sorgt für eine gründliche und tiefgehende Reinigung Ihrer Räumlichkeiten und Immobilien. Besonders hartnäckiger Schmutz und schwer zugängliche Bereiche werden intensiv gereinigt.",
      image:
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      icon: <FaHardHat />,
      title: "Baureinigung",
      description:
        "Nach Beendigung von Baumaßnahmen oder Renovierungsarbeiten sorgt unsere Baureinigung für eine gründliche Säuberung. Wir entfernen zuverlässig Staub und Verunreinigungen, damit Ihre Immobilie bezugsfertig ist.",
      image:
        "https://images.unsplash.com/photo-1617617558346-d157b6ae0aeb?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Unsere Leistungen</h2>
        <div className={styles.cardsContainer}>
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div
                className={styles.cardImage}
                style={{ backgroundImage: `url(${service.image})` }}
              >
                <div className={styles.overlay}>
                  <div className={styles.icon}>{service.icon}</div>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.title}>{service.title}</h3>
                <p className={styles.description}>{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;
