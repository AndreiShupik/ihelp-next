/** @type {import('next').NextConfig} */
const { i18n } = require("./next-i18next.config");

// module.exports = {
//   reactStrictMode: true,
//   // any other config
// };

// next.config.js
module.exports = {
  reactStrictMode: false,
  i18n,
};

// module.exports = {
//   images: {
//     domains: ['your-supabase-bucket-url.supabase.co', 'another-domain.com'],
//   },
// };
