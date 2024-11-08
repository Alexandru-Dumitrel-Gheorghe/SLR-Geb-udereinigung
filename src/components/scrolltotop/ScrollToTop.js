import React, { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Funcție pentru a face scroll la începutul paginii
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Afișează butonul dacă scroll-ul este mai mare decât 300px
  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    isVisible && (
      <div className={styles.scrollToTop} onClick={scrollToTop}>
        <FaArrowUp className={styles.icon} />
      </div>
    )
  );
};

export default ScrollToTop;
