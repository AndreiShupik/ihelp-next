const path = require("path");

module.exports = {
  i18n: {
    locales: ["en", "ua"],
    defaultLocale: "ua",
    localeDetection: true,
  },

  // Explicit path to your translation files
  localePath: path.resolve("./public/locales"),
};
