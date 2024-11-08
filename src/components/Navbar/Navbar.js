import React, { useState, useEffect } from "react";
import styles from "./Navbar.module.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    const handleScroll = () => {
      // Dacă scroll-ul este mai mare de 50px, setează navbar-ul ca fiind vizibil
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  const navItems = [
    { name: "Startseite", to: "hero" },
    { name: "Über uns", to: "about" },
    { name: "Mission", to: "mission" },
    { name: "Dienstleistungen", to: "services" },
    { name: "Galerie", to: "gallery" },
    { name: "Kontakt", to: "contact" },
  ];

  return (
    <nav
      className={`${styles.navbar} ${
        isScrolled ? styles.scrolled : styles.transparent
      }`}
    >
      <div className={styles.container}>
        <div className={styles.logo}>
          <Link
            to="hero"
            smooth={true}
            duration={500}
            onClick={closeMobileMenu}
          >
            <img
              src="https://slr-gebaeudereinigung.de/wp-content/uploads/2023/03/WhatsApp-Image-2023-03-14-at-11.48.17.jpeg"
              alt="SLR Gebäudereinigung Logo"
              className={styles.logoImage}
            />
          </Link>
        </div>

        <ul
          className={`${styles.navLinks} ${
            isMobileMenuOpen ? styles.active : ""
          }`}
        >
          {navItems.map((item, index) => (
            <li key={index} className={styles.navItem}>
              <Link
                to={item.to}
                smooth={true}
                duration={500}
                offset={-80}
                className={styles.navLink}
                onClick={closeMobileMenu}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className={styles.hamburger}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
