import React from "react";
import styles from "./Mission.module.css";
import { motion } from "framer-motion";
import {
  FaHandshake,
  FaMoneyBillWave,
  FaHandsHelping,
  FaSmile,
  FaLeaf,
  FaRegLightbulb,
  FaRecycle,
  FaShieldAlt,
} from "react-icons/fa";

const Mission = () => {
  const missionData = [
    { icon: <FaHandshake />, title: "20 Jahre Erfahrung" },
    { icon: <FaMoneyBillWave />, title: "Faire Preise" },
    { icon: <FaHandsHelping />, title: "Alles aus einer Hand" },
    { icon: <FaSmile />, title: "Vollste Zufriedenheit" },
    { icon: <FaLeaf />, title: "Umweltbewusst" },
    { icon: <FaRegLightbulb />, title: "Innovative Lösungen" },
    { icon: <FaRecycle />, title: "Nachhaltigkeit" },
    { icon: <FaShieldAlt />, title: "Zuverlässigkeit" },
  ];

  return (
    <section id="mission" className={styles.mission}>
      <div className={styles.container}>
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Unsere Mission und Werte
        </motion.h2>

        <div className={styles.cards}>
          {missionData.map((item, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.1,
                boxShadow: "0px 20px 50px rgba(0,0,0,0.3)",
              }}
            >
              <div className={styles.iconWrapper}>
                <div className={styles.icon}>{item.icon}</div>
              </div>
              <h3 className={styles.title}>{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
