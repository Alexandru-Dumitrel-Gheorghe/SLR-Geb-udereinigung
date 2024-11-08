// src/components/About/About.js
import React from "react";
import styles from "./About.module.css";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLeaf } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>Über uns</h2>
          <motion.div
            className={styles.separator}
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className={styles.content}>
          <motion.div
            className={styles.imageContainer}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <img
              src="https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Screenshot-2024-10-04-at-09.30.53.png"
              alt="Über uns SLR Gebäudereinigung"
              className={styles.image}
            />
            <motion.div
              className={styles.badge}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <FaLeaf className={styles.badgeIcon} />
              <span>Nachhaltigkeit</span>
            </motion.div>
          </motion.div>

          <motion.div
            className={styles.text}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className={styles.paragraph}>
              <strong>SLR Gebäudereinigung</strong> ist seit über 20 Jahren ein
              erfolgreiches, inhabergeführtes Unternehmen mit Sitz in München
              (Haar). Mit einem engagierten Team von rund 60 qualifizierten
              Mitarbeiterinnen und Mitarbeitern bieten wir
              Reinigungsdienstleistungen auf höchstem Niveau. Unser
              kontinuierliches Wachstum und die langjährige Erfahrung
              ermöglichen es uns, flexibel und kompetent auf die vielfältigen
              Anforderungen unserer Kunden einzugehen.
            </p>
            <p className={styles.paragraph}>
              Wir sind stolz darauf, nicht nur durch Qualität, sondern auch
              durch Zuverlässigkeit und eine hohe Serviceorientierung zu
              überzeugen. Ob es sich um Bürogebäude, Industrieanlagen,
              Wohnhäuser oder Sonderreinigungen handelt – wir stellen uns gerne
              jeder Herausforderung rund um das Thema Gebäudereinigung.
            </p>
            <p className={styles.paragraph}>
              Haben Sie Interesse an unseren Dienstleistungen? Wir freuen uns,
              von Ihnen zu hören und stehen Ihnen gerne für eine unverbindliche
              Beratung zur Verfügung.
            </p>

            <div className={styles.contactInfo}>
              <motion.a
                href="tel:+4915228714145"
                className={styles.contactItem}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                aria-label="Telefonnummer anrufen"
              >
                <FaPhone className={styles.icon} />
              </motion.a>
              <motion.a
                href="mailto:kontakt@slr-gebaeudereinigung.de"
                className={styles.contactItem}
                whileHover={{ scale: 1.2 }}
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                aria-label="E-Mail senden"
              >
                <FaEnvelope className={styles.icon} />
              </motion.a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className={styles.additionalInfo}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className={styles.subHeading}>
            Gemeinsam sorgen wir für Sauberkeit und Ordnung
          </h3>
          <p className={styles.paragraph}>
            Wir bieten Ihnen zuverlässige und qualitativ hochwertige Arbeit zu
            wettbewerbsfähigen Preisen.
          </p>
          <h3 className={styles.subHeading}>Engagement für Umwelt und Klima</h3>
          <p className={styles.paragraph}>
            Als Teilnehmer am Umwelt- und Klimapakt Bayern bekennt sich SLR
            Gebäudereinigung zu nachhaltigem Handeln und dem Schutz unserer
            Umwelt. Wir setzen auf umweltschonende Reinigungsverfahren und
            achten auf den effizienten Einsatz von Ressourcen. Unser Ziel ist
            es, höchste Reinigungsstandards mit Verantwortung für die Zukunft zu
            verbinden – für eine saubere und lebenswerte Umwelt.
          </p>
          <p className={styles.experience}>
            <FaLeaf className={styles.leafIcon} /> 20 Jahre Erfahrung
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
