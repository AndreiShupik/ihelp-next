import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import * as styles from "./ContactForm.module.scss";

function ContactForm({ type }) {
  const [formData, setFormData] = useState({
    name: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Ім’я обов’язкове.";
    if (!phone) {
      newErrors.phone = "Телефон обов’язковий.";
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = "Невірний номер телефону.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const fullData = { ...formData, phone, type };

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fullData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "Помилка при відправці форми");
      }

      setSubmitted(true);
      setFormData({ name: "", message: "" });
      setPhone("");
      setErrors({});
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formWrapper}>
      <h4>Форма зворотнього зв'язку</h4>

      {submitted ? (
        <p className={styles.success}>Дякуємо! Ми з вами зв’яжемось найближчим часом.</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          <label>
            Ім’я
            <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </label>

          <label>
            Телефон
            <PhoneInput
              name="phone"
              autoComplete="tel"
              international
              defaultCountry="UA"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                setErrors((prev) => ({ ...prev, phone: "" }));
              }}
              className={styles.phoneInput}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </label>

          <label>
            Повідомлення
            <textarea
              name="message"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder="Ваше повідомлення..."
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? "Відправляємо..." : "Надіслати"}
          </button>

          {submitError && <p className={styles.error}>{submitError}</p>}
        </form>
      )}
    </section>
  );
}

export default ContactForm;
