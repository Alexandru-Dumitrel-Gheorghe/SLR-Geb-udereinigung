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
        "Mit unserer professionellen Unterhaltsreinigung sorgen wir dafür, dass Ihre Räumlichkeiten regelmäßig sauber und gepflegt bleiben. Ob Büro, Praxis oder Gewerbefläche – wir passen unseren Service individuell an Ihre Bedürfnisse an. SLR Gebäudereinigung bietet Ihnen einen zuverlässigen Reinigungsplan, der für eine kontinuierlich angenehme und hygienische Umgebung sorgt.",
    },
    {
      icon: <FaSprayCan />,
      title: "Grundreinigung",
      description:
        "Die Grundreinigung von SLR Gebäudereinigung sorgt für eine gründliche und tiefgehende Reinigung Ihrer Räumlichkeiten und Immobilien. Besonders hartnäckiger Schmutz und schwer zugängliche Bereiche werden intensiv gereinigt, damit Ihre Räumlichkeiten und Ihre Immobilie in neuem Glanz erstrahlt. Ideal als Ergänzung zur regelmäßigen Reinigung oder als einmaliger Service.",
    },
    {
      icon: <FaHardHat />,
      title: "Baureinigung",
      description:
        "Nach Beendigung von Baumaßnahmen oder Renovierungsarbeiten sorgt SLR Gebäudereinigung für eine gründliche Baureinigung. Wir entfernen zuverlässig Staub und Verunreinigungen, damit Ihre Immobilie bezugsfertig ist. Egal ob Grobreinigung während der Bauphase oder Feinreinigung vor der Übergabe – wir garantieren Sauberkeit und Präzision bis ins Detail.",
    },
  ];

  return (
    <section id="services" className={styles.services}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Unsere Leistungen</h2>
        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          viewport={{ once: true }}
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              className={styles.card}
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0,0,0,0.2)",
              }}
            >
              <div className={styles.icon}>{service.icon}</div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.description}>{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Services;
