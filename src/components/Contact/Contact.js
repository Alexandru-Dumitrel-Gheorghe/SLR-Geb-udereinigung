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
              {[
                {
                  icon: <FaPhoneAlt />,
                  title: "Festnetz & Mobil",
                  content: [
                    "Festnetz: +49 (0) 8102 / 8729001",
                    "Mobil: +49 (0) 152 / 28714145",
                  ],
                },
                {
                  icon: <FaEnvelope />,
                  title: "E-Mail",
                  content: ["kontakt@slr-gebaeudereinigung.de"],
                },
                {
                  icon: <FaMapMarkerAlt />,
                  title: "Adresse",
                  content: [
                    "SLR Gebäudereinigung",
                    "Haringstr. 11",
                    "85635 Siegertsbrunn",
                  ],
                },
              ].map((item, index) => (
                <div key={index} className={styles.infoItem}>
                  {item.icon}
                  <div className={styles.infoText}>
                    <h3>{item.title}</h3>
                    <p>
                      {item.content.map((text, i) => (
                        <span key={i}>
                          {text}
                          <br />
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
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
              {[
                {
                  id: "firstName",
                  label: "Vorname",
                  type: "text",
                  placeholder: "Bitte Vornamen eingeben...",
                  required: true,
                },
                {
                  id: "lastName",
                  label: "Nachname",
                  type: "text",
                  placeholder: "Bitte Nachnamen eingeben...",
                  required: true,
                },
                {
                  id: "email",
                  label: "E-Mail",
                  type: "email",
                  placeholder: "Bitte E-Mail-Adresse eingeben...",
                  required: true,
                },
                {
                  id: "phoneNumber",
                  label: "Telefonnummer",
                  type: "tel",
                  placeholder: "Bitte Telefonnummer eingeben...",
                  required: true,
                },
              ].map(({ id, label, type, placeholder, required }) => (
                <div key={id} className={styles.formGroup}>
                  <label htmlFor={id} className={styles.label}>
                    {label}
                  </label>
                  <input
                    type={type}
                    id={id}
                    name={id}
                    className={`${styles.input} ${
                      errors[id] ? styles.inputError : ""
                    }`}
                    placeholder={placeholder}
                    {...register(id, {
                      required: required
                        ? `${label} ist erforderlich.`
                        : undefined,
                    })}
                    aria-invalid={errors[id] ? "true" : "false"}
                  />
                  {errors[id] && (
                    <span className={styles.errorText}>
                      {errors[id].message}
                    </span>
                  )}
                </div>
              ))}
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
