import React, { useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { useTranslation } from "next-i18next";

import * as styles from "./ContactForm.module.scss";

function ContactForm({ type }) {
  const { t } = useTranslation("contactForm");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [phone, setPhone] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [loading, setLoading] = useState(false);

  const isValidEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = t("errors.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("errors.emailRequired");
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = t("errors.emailInvalid");
    }

    if (!phone) {
      newErrors.phone = t("errors.phoneRequired");
    } else if (!isValidPhoneNumber(phone)) {
      newErrors.phone = t("errors.phoneInvalid");
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError(null);

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const fullData = {
      ...formData,
      phone,
      type,
    };

    try {
      setLoading(true);

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fullData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || t("errors.submitError"));
      }

      setSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      setPhone("");
      setErrors({});
    } catch (error) {
      setSubmitError(t("errors.submitError"));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.formWrapper}>
      <h4>{t("title")}</h4>

      {submitted ? (
        <p className={styles.success}>{t("successMessage")}</p>
      ) : (
        <form onSubmit={handleSubmit} className={styles.form} noValidate>
          {/* NAME */}
          <label>
            {t("fields.name")}
            <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </label>

          {/* EMAIL */}
          <label>
            {t("fields.email")}
            <input
              type="email"
              name="email"
              autoComplete="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </label>

          {/* PHONE */}
          <label>
            {t("fields.phone")}
            <PhoneInput
              name="phone"
              autoComplete="tel"
              international
              defaultCountry="UA"
              value={phone}
              onChange={(value) => {
                setPhone(value);
                setErrors((prev) => ({
                  ...prev,
                  phone: "",
                }));
              }}
              className={styles.phoneInput}
            />
            {errors.phone && <span className={styles.error}>{errors.phone}</span>}
          </label>

          {/* MESSAGE */}
          <label>
            {t("fields.message")}
            <textarea
              name="message"
              autoComplete="off"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              placeholder={t("fields.messagePlaceholder")}
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? t("buttons.sending") : t("buttons.send")}
          </button>

          {submitError && <p className={styles.error}>{submitError}</p>}
        </form>
      )}
    </section>
  );
}

export default ContactForm;

//Form with Captcha
// import React, { useState, useRef } from "react";
// import ReCAPTCHA from "react-google-recaptcha"; // import recaptcha
// import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
// import "react-phone-number-input/style.css";

// import * as styles from "./ContactForm.module.scss";

// function ContactForm({ type }) {
//   const [formData, setFormData] = useState({
//     name: "",
//     message: "",
//   });

//   const [phone, setPhone] = useState("");
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const [submitError, setSubmitError] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [captchaToken, setCaptchaToken] = useState(null);

//   // Ref to reCAPTCHA component to reset it if needed
//   const recaptchaRef = useRef(null);

//   const validate = () => {
//     const newErrors = {};

//     if (!formData.name.trim()) newErrors.name = "Ім’я обов’язкове.";
//     if (!phone) {
//       newErrors.phone = "Телефон обов’язковий.";
//     } else if (!isValidPhoneNumber(phone)) {
//       newErrors.phone = "Невірний номер телефону.";
//     }

//     if (!captchaToken) {
//       newErrors.captcha = "Будь ласка, підтвердьте, що ви не робот.";
//     }

//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const onCaptchaChange = (token) => {
//     setCaptchaToken(token);
//     setErrors((prev) => ({ ...prev, captcha: "" }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitError(null);

//     const validationErrors = validate();
//     if (Object.keys(validationErrors).length > 0) {
//       setErrors(validationErrors);
//       return;
//     }

//     const fullData = { ...formData, phone, type, captchaToken };

//     try {
//       setLoading(true);

//       const res = await fetch("/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(fullData),
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         throw new Error(errorData.error || "Помилка при відправці форми");
//       }

//       setSubmitted(true);
//       setFormData({ name: "", message: "" });
//       setPhone("");
//       setErrors({});
//       recaptchaRef.current.reset(); // reset captcha on success
//       setCaptchaToken(null);
//     } catch (error) {
//       setSubmitError(error.message);
//       recaptchaRef.current.reset();
//       setCaptchaToken(null);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <section className={styles.formWrapper}>
//       <h4>Форма зворотнього зв'язку</h4>

//       {submitted ? (
//         <p className={styles.success}>Дякуємо! Ми з вами зв’яжемось найближчим часом.</p>
//       ) : (
//         <form onSubmit={handleSubmit} className={styles.form} noValidate>
//           <label>
//             Ім’я
//             <input type="text" name="name" autoComplete="name" value={formData.name} onChange={handleChange} />
//             {errors.name && <span className={styles.error}>{errors.name}</span>}
//           </label>

//           <label>
//             Телефон
//             <PhoneInput
//               name="phone"
//               autoComplete="tel"
//               international
//               defaultCountry="UA"
//               value={phone}
//               onChange={(value) => {
//                 setPhone(value);
//                 setErrors((prev) => ({ ...prev, phone: "" }));
//               }}
//               className={styles.phoneInput}
//             />
//             {errors.phone && <span className={styles.error}>{errors.phone}</span>}
//           </label>

//           <label>
//             Повідомлення
//             <textarea
//               name="message"
//               autoComplete="off"
//               value={formData.message}
//               onChange={handleChange}
//               rows={4}
//               placeholder="Ваше повідомлення..."
//             />
//           </label>

//           {/* reCAPTCHA widget */}
//           <ReCAPTCHA
//             sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
//             onChange={onCaptchaChange}
//             ref={recaptchaRef}
//           />
//           {errors.captcha && <span className={styles.error}>{errors.captcha}</span>}

//           <button type="submit" disabled={loading}>
//             {loading ? "Відправляємо..." : "Надіслати"}
//           </button>

//           {submitError && <p className={styles.error}>{submitError}</p>}
//         </form>
//       )}
//     </section>
//   );
// }

// export default ContactForm;
