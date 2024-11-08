// Contact.jsx
import React, { useState } from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
  FaExclamationTriangle,
  FaSpinner,
} from "react-icons/fa";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";

const Contact = () => {
  const initialFormData = {
    anrede: "",
    name: "",
    email: "",
    telefon: "",
    nachricht: "",
    zustimmung: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = () => {
    const { anrede, name, email, telefon, nachricht, zustimmung } = formData;
    if (!anrede || !name || !email || !telefon || !nachricht || !zustimmung) {
      return "Bitte füllen Sie alle Pflichtfelder aus.";
    }
    // Validare simplistă a emailului
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "Bitte geben Sie eine gültige E-Mail-Adresse ein.";
    }
    // Validare simplistă a telefonului
    const phoneRegex = /^\+?[0-9\s-]{7,15}$/;
    if (!phoneRegex.test(telefon)) {
      return "Bitte geben Sie eine gültige Telefonnummer ein.";
    }
    return "";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateForm();
    if (validationError) {
      setErrorMessage(validationError);
      return;
    }

    setIsSending(true);
    setErrorMessage("");

    // Simularea trimiterii formularului
    setTimeout(() => {
      // Exemplu de succes
      setSubmitted(true);
      setFormData(initialFormData);
      setIsSending(false);
    }, 2000);
  };

  // Configurare marker Leaflet
  const markerIcon = new L.Icon({
    iconUrl: markerIconPng,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });

  return (
    <section id="kontakt" className={styles.contact}>
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.heading}>Kontaktieren Sie uns!</h2>
          <p className={styles.subheading}>
            Nehmen Sie gerne Kontakt mit uns auf. Erhalten Sie eine kostenlose
            Beratung durch unser Expertenteam.
          </p>
        </motion.div>

        <div className={styles.content}>
          {/* Informații de Contact */}
          <div className={styles.info}>
            <div className={styles.infoItem}>
              <FaPhoneAlt className={styles.icon} aria-hidden="true" />
              <div className={styles.infoText}>
                <h3>Festnetz & Mobil</h3>
                <p>
                  <strong>Festnetz:</strong> +49 (0) 8102 / 8729001
                  <br />
                  <strong>Mobil:</strong> +49 (0) 152 / 28714145
                </p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaEnvelope className={styles.icon} aria-hidden="true" />
              <div className={styles.infoText}>
                <h3>E-Mail</h3>
                <p>
                  <a href="mailto:kontakt@slr-gebaeudereinigung.de">
                    kontakt@slr-gebaeudereinigung.de
                  </a>
                </p>
              </div>
            </div>
            <div className={styles.infoItem}>
              <FaMapMarkerAlt className={styles.icon} aria-hidden="true" />
              <div className={styles.infoText}>
                <h3>Adresse</h3>
                <p>
                  SLR Gebäudereinigung
                  <br />
                  Haringstr. 11
                  <br />
                  85635 Siegertsbrunn
                </p>
              </div>
            </div>
          </div>

          {/* Formular de Contact */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
            noValidate
            aria-describedby="form-feedback"
          >
            {errorMessage && (
              <motion.div
                className={styles.errorMessage}
                role="alert"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaExclamationTriangle
                  className={styles.errorIcon}
                  aria-hidden="true"
                />
                <span>{errorMessage}</span>
              </motion.div>
            )}

            {submitted && (
              <motion.div
                className={styles.successMessage}
                role="status"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                <FaCheckCircle
                  className={styles.successIcon}
                  aria-hidden="true"
                />
                <p>Ihre Nachricht wurde erfolgreich gesendet!</p>
              </motion.div>
            )}

            {!submitted && (
              <>
                <div className={styles.formGrid}>
                  <div className={styles.formGroup}>
                    <label htmlFor="anrede" className={styles.label}>
                      Anrede
                    </label>
                    <select
                      id="anrede"
                      name="anrede"
                      value={formData.anrede}
                      onChange={handleChange}
                      className={styles.input}
                      required
                      aria-required="true"
                    >
                      <option value="">-- Bitte wählen --</option>
                      <option value="Herr">Herr</option>
                      <option value="Frau">Frau</option>
                      <option value="Divers">Divers</option>
                    </select>
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="name" className={styles.label}>
                      Vor- und Nachname*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Geben Sie Ihren Vor- und Nachnamen ein"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      aria-required="true"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="email" className={styles.label}>
                      E-Mail*
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Geben Sie eine gültige E-Mail-Adresse ein"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      aria-required="true"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label htmlFor="telefon" className={styles.label}>
                      Telefon*
                    </label>
                    <input
                      type="tel"
                      id="telefon"
                      name="telefon"
                      placeholder="Geben Sie eine gültige Telefonnummer an"
                      value={formData.telefon}
                      onChange={handleChange}
                      required
                      className={styles.input}
                      aria-required="true"
                    />
                  </div>
                  <div className={styles.formGroupFull}>
                    <label htmlFor="nachricht" className={styles.label}>
                      Nachricht*
                    </label>
                    <textarea
                      id="nachricht"
                      name="nachricht"
                      placeholder="Geben Sie Ihre Nachricht ein!"
                      value={formData.nachricht}
                      onChange={handleChange}
                      required
                      className={styles.textarea}
                      aria-required="true"
                    ></textarea>
                  </div>
                </div>
                <div className={styles.checkboxGroup}>
                  <input
                    type="checkbox"
                    id="zustimmung"
                    name="zustimmung"
                    checked={formData.zustimmung}
                    onChange={handleChange}
                    required
                    className={styles.checkbox}
                    aria-required="true"
                  />
                  <label htmlFor="zustimmung" className={styles.checkboxLabel}>
                    Ich stimme zu, dass meine Angaben und Daten zur Beantwortung
                    meiner Anfrage elektronisch erhoben und gespeichert werden.
                  </label>
                </div>
                <button
                  type="submit"
                  className={styles.submitButton}
                  disabled={isSending}
                  aria-disabled={isSending}
                >
                  {isSending ? (
                    <>
                      <FaSpinner
                        className={styles.spinner}
                        aria-hidden="true"
                      />{" "}
                      Senden...
                    </>
                  ) : (
                    "Anfrage senden"
                  )}
                </button>
              </>
            )}
          </form>
        </div>

        {/* Secțiunea Hartă */}
        <motion.div
          className={styles.mapSection}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <MapContainer
            center={[48.0191, 11.7097]} // Coordonate pentru Siegertsbrunn
            zoom={13}
            scrollWheelZoom={false}
            className={styles.map}
            aria-label="Map showing the location of SLR Gebäudereinigung"
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[48.0191, 11.7097]} icon={markerIcon}>
              <Popup>
                SLR Gebäudereinigung <br /> Haringstr. 11, 85635 Siegertsbrunn
              </Popup>
            </Marker>
          </MapContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
