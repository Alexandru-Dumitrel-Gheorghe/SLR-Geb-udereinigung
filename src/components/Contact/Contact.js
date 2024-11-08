import React, { useState, Suspense, lazy } from "react";
import styles from "./Contact.module.css";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";

// Lazy load icons for performance optimization
const FaPhoneAlt = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaPhoneAlt }))
);
const FaEnvelope = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaEnvelope }))
);
const FaMapMarkerAlt = lazy(() =>
  import("react-icons/fa").then((module) => ({
    default: module.FaMapMarkerAlt,
  }))
);
const FaCheckCircle = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaCheckCircle }))
);
const FaExclamationTriangle = lazy(() =>
  import("react-icons/fa").then((module) => ({
    default: module.FaExclamationTriangle,
  }))
);
const FaSpinner = lazy(() =>
  import("react-icons/fa").then((module) => ({ default: module.FaSpinner }))
);

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data, e) => {
    setErrorMessage("");
    try {
      await emailjs.sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_EMAILJS_USER_ID
      );
      reset();
    } catch (error) {
      console.error("Email sending error:", error);
      setErrorMessage("Es gab einen Fehler beim Senden der Nachricht.");
    }
  };

  return (
    <section
      className={styles.contactSection}
      aria-labelledby="contact-heading"
    >
      <div className={styles.background}></div>
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          aria-describedby="form-feedback"
        >
          <h2 id="contact-heading" className={styles.heading}>
            Kontaktieren Sie uns!
          </h2>
          <p className={styles.subheading}>
            Nehmen Sie gerne Kontakt mit uns auf. Erhalten Sie eine kostenlose
            Beratung durch unser Expertenteam.
          </p>

          {/* Contact Information */}
          <div className={styles.info}>
            <Suspense fallback={<div className={styles.iconPlaceholder}></div>}>
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
            </Suspense>
          </div>

          {/* Feedback Messages */}
          <div id="form-feedback" aria-live="assertive">
            {errorMessage && (
              <div className={styles.errorMessage} role="alert">
                <Suspense fallback={<span className={styles.errorIcon}></span>}>
                  <FaExclamationTriangle
                    className={styles.errorIcon}
                    aria-hidden="true"
                  />
                </Suspense>
                {errorMessage}
              </div>
            )}

            {isSubmitSuccessful && (
              <div className={styles.thankYouMessage} role="status">
                <Suspense
                  fallback={<span className={styles.successIcon}></span>}
                >
                  <FaCheckCircle
                    className={styles.successIcon}
                    aria-hidden="true"
                  />
                </Suspense>
                Vielen Dank für Ihre Nachricht! Wir werden uns bald bei Ihnen
                melden.
              </div>
            )}
          </div>

          {/* Form Fields */}
          {!isSubmitSuccessful && (
            <div className={styles.formGrid}>
              <div className={styles.formGroup}>
                <label htmlFor="firstName" className={styles.label}>
                  Vorname
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className={`${styles.input} ${
                    errors.firstName ? styles.inputError : ""
                  }`}
                  placeholder="Bitte Vornamen eingeben..."
                  {...register("firstName", {
                    required: "Vorname ist erforderlich.",
                  })}
                  aria-invalid={errors.firstName ? "true" : "false"}
                />
                {errors.firstName && (
                  <span className={styles.errorText}>
                    {errors.firstName.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="lastName" className={styles.label}>
                  Nachname
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className={`${styles.input} ${
                    errors.lastName ? styles.inputError : ""
                  }`}
                  placeholder="Bitte Nachnamen eingeben..."
                  {...register("lastName", {
                    required: "Nachname ist erforderlich.",
                  })}
                  aria-invalid={errors.lastName ? "true" : "false"}
                />
                {errors.lastName && (
                  <span className={styles.errorText}>
                    {errors.lastName.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="email" className={styles.label}>
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className={`${styles.input} ${
                    errors.email ? styles.inputError : ""
                  }`}
                  placeholder="Bitte E-Mail-Adresse eingeben..."
                  {...register("email", {
                    required: "E-Mail ist erforderlich.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message:
                        "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
                    },
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <span className={styles.errorText}>
                    {errors.email.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="phoneNumber" className={styles.label}>
                  Telefonnummer
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  className={`${styles.input} ${
                    errors.phoneNumber ? styles.inputError : ""
                  }`}
                  placeholder="Bitte Telefonnummer eingeben..."
                  {...register("phoneNumber", {
                    required: "Telefonnummer ist erforderlich.",
                  })}
                  aria-invalid={errors.phoneNumber ? "true" : "false"}
                />
                {errors.phoneNumber && (
                  <span className={styles.errorText}>
                    {errors.phoneNumber.message}
                  </span>
                )}
              </div>

              <div className={styles.formGroupFull}>
                <label htmlFor="message" className={styles.label}>
                  Ihre Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  className={`${styles.textarea} ${
                    errors.message ? styles.inputError : ""
                  }`}
                  placeholder="Bitte Nachricht eingeben..."
                  {...register("message", {
                    required: "Nachricht ist erforderlich.",
                  })}
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && (
                  <span className={styles.errorText}>
                    {errors.message.message}
                  </span>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          {!isSubmitSuccessful && (
            <button
              type="submit"
              className={styles.submitButton}
              disabled={isSubmitting}
              aria-busy={isSubmitting}
            >
              <Suspense fallback={<span className={styles.spinner}></span>}>
                {isSubmitting ? (
                  <FaSpinner className={styles.spinner} aria-hidden="true" />
                ) : (
                  "Absenden"
                )}
              </Suspense>
            </button>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
