import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, phone, message, type } = req.body;

  if (!name || !phone) {
    return res.status(400).json({ error: "Ім'я та телефон є обов'язковими." });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER, // replace with real email
      pass: process.env.EMAIL_PASS, // app-specific password
    },
  });

  const mailOptions = {
    from: '"iHELP Website" <lovengiro@gmail.com>',
    to: process.env.EMAIL_RECEIVER,
    subject: `Новий контакт: ${type || "форма зворотнього зв'язку"}`,
    text: `Ім'я: ${name}\nТип форми: ${type || "(не вказано)"}\nПовідомлення: ${
      message || "(немає)"
    }\nТелефон: ${phone}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Форма успішно надіслана!" });
  } catch (error) {
    console.error("Email error:", error);
    res.status(500).json({ error: "Не вдалося надіслати форму." });
  }
}

//Api with captcha
// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ error: "Method not allowed" });
//   }

//   const { name, phone, message, type, captchaToken } = req.body;

//   if (!name || !phone) {
//     return res.status(400).json({ error: "Ім'я та телефон є обов'язковими." });
//   }

//   if (!captchaToken) {
//     return res.status(400).json({ error: "Captcha token is required." });
//   }

//   // Verify reCAPTCHA token with Google API
//   const secretKey = process.env.RECAPTCHA_SECRET_KEY;
//   const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

//   try {
//     const captchaRes = await fetch(verifyUrl, { method: "POST" });
//     const captchaData = await captchaRes.json();

//     if (!captchaData.success) {
//       return res.status(400).json({ error: "reCAPTCHA verification failed." });
//     }
//   } catch (error) {
//     console.error("Captcha verification error:", error);
//     return res.status(500).json({ error: "Captcha verification error." });
//   }

//   // Proceed with sending email
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER, // replace with real email
//       pass: process.env.EMAIL_PASS, // app-specific password
//     },
//   });

//   const mailOptions = {
//     from: '"iHELP Website" <lovengiro@gmail.com>',
//     to: process.env.EMAIL_RECEIVER,
//     subject: `Новий контакт: ${type || "форма зворотнього зв'язку"}`,
//     text: `Ім'я: ${name}\nТип форми: ${type || "(не вказано)"}\nПовідомлення: ${
//       message || "(немає)"
//     }\nТелефон: ${phone}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     res.status(200).json({ message: "Форма успішно надіслана!" });
//   } catch (error) {
//     console.error("Email error:", error);
//     res.status(500).json({ error: "Не вдалося надіслати форму." });
//   }
// }
