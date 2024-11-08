// src/components/Testimonials/Testimonials.js

import React from "react";
import styles from "./Testimonials.module.css";
import { FaStar } from "react-icons/fa";

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
      <h2 className={styles.heading}>Kundenbewertungen</h2>
      <div className={styles.cardsContainer}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className={styles.card}>
            <h3 className={styles.name}>{testimonial.name}</h3>
            <p className={styles.source}>{testimonial.source}</p>
            <div className={styles.rating}>
              {[...Array(testimonial.rating)].map((_, i) => (
                <FaStar key={i} className={styles.star} />
              ))}
            </div>
            <p className={styles.comment}>"{testimonial.comment}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
