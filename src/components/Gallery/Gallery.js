import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Gallery = () => {
  const images = [
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Grundreinigung.jpg",
      alt: "Unterhaltsreinigung",
    },
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Grundreinigung-2.jpg",
      alt: "Grundreinigung",
    },
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Fensterreinigung.jpg",
      alt: "Fensterreinigung",
    },
    {
      src: "https://slr-gebaeudereinigung.de/wp-content/uploads/2024/10/Bodenreinigung.jpg",
      alt: "Bodenreinigung",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIdx, setCurrentImageIdx] = useState(0);

  const openModal = (index) => {
    setCurrentImageIdx(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const showNext = () => {
    setCurrentImageIdx((prevIdx) => (prevIdx + 1) % images.length);
  };

  const showPrev = () => {
    setCurrentImageIdx((prevIdx) =>
      prevIdx === 0 ? images.length - 1 : prevIdx - 1
    );
  };

  return (
    <section id="gallery" className={styles.gallery}>
      <motion.div
        className={styles.container}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h2 className={styles.heading}>Unsere Galerie</h2>
        <div className={styles.grid}>
          {images.map((image, index) => (
            <motion.div
              key={index}
              className={styles.card}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => openModal(index)}
            >
              <img src={image.src} alt={image.alt} className={styles.image} />
              <div className={styles.overlay}>
                <motion.div
                  className={styles.text}
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {image.alt}
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.modalOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button className={styles.closeButton} onClick={closeModal}>
                <FaTimes />
              </button>
              <button className={styles.prevButton} onClick={showPrev}>
                <FaArrowLeft />
              </button>
              <img
                src={images[currentImageIdx].src}
                alt={images[currentImageIdx].alt}
                className={styles.modalImage}
              />
              <button className={styles.nextButton} onClick={showNext}>
                <FaArrowRight />
              </button>
              <div className={styles.modalCaption}>
                {images[currentImageIdx].alt}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;
