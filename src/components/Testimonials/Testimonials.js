// src/components/Testimonials/Testimonials.js
import React from "react";
import styles from "./Testimonials.module.css";
import { FaStar, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Selina Maurer",
    source: "Rezension aus Google",
    rating: 5,
    comment:
      "Sehr gründliche und saubere Arbeit. Empfehle ich jederzeit weiter! Top-Service",
  },
  {
    name: "Sabine Kranicz",
    source: "Rezension aus Google",
    rating: 5,
    comment:
      "Sehr gründliche Reinigung von einem professionellen Team. Super Geschäftsleitung die sich um alles kümmert. Sehr empfehlenswert",
  },
  {
    name: "Vedrana Smoljanovic",
    source: "Rezension aus Google",
    rating: 5,
    comment:
      "Top Leute, tolle Leistung. Kann ich nur und werde auch weiterempfehlen",
  },
];

const Testimonials = () => {
  return (
    <section className={styles.testimonials}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Kundenbewertungen</h2>
        <div className={styles.cardsContainer}>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className={styles.card}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 15px 30px rgba(0,0,0,0.3)",
              }}
            >
              <FaQuoteLeft className={styles.quoteLeft} />
              <p className={styles.comment}>"{testimonial.comment}"</p>
              <FaQuoteRight className={styles.quoteRight} />
              <div className={styles.footer}>
                <h3 className={styles.name}>{testimonial.name}</h3>
                <p className={styles.source}>{testimonial.source}</p>
                <div className={styles.rating}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <FaStar key={i} className={styles.star} />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
