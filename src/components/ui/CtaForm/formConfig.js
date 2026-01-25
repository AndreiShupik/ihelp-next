// import * as partnershipStyles from "./PartnershipBlocks.module.scss";
// import ContactForm from "../ContactForm/ContactForm";

const BANK_UAH_BASE = {
  edrpou: "44668404",
  iban: "UA513052990000026005015029654",
  bank_original: "АТ КБ «ПРИВАТБАНК»", // official name (kept as original)
  privat_link: "https://next.privat24.ua/payments/form/%7B%22token%22%3A%220a98407c-0259-4cf7-a521-6ce525b3a710%22%7D",
};

const BANK_USD_BASE = {
  iban: "UA623052990262066400932439100",
  bank_original: "JSC CB PRIVATBANK, KYIV, UKRAINE",
  swift: "PBANUA2X",
  correspondent: "bank: J.P. MORGAN AG, FRANKFURT, GERMANY",
  correspondentSwift: "CHASDEFX",
  account: "623-160-5145",
};

const COMMON_PAYMENTS = {
  bankLink: "https://send.monobank.ua/jar/AeuW8NKc9H",
  monobankCard: "5375 4112 1037 7656",
  payPal: "cfihelp.ua@gmail.com",
  crypto: [
    { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
    { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
    { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
  ],
};

// localized templates for bank beneficiaries & purposes & titles
const TRANSLATIONS = {
  FrontlinePeople: {
    title: {
      ua: "Допомога людям на прифронтових територіях",
      en: "Helping people in frontline areas",
    },
    bankUAH_beneficiary: {
      ua: 'БФ "Я допомагаю"',
      en: "Charitable Fund “I Help” (БФ «Я Допомагаю»)",
    },
    bankUAH_bank: {
      ua: "АТ КБ «ПРИВАТБАНК»",
      en: "JSC CB PRIVATBANK (UAH)",
    },
    bankUSD_beneficiary: {
      ua: "DZIUBENKO ANATOLII",
      en: "DZIUBENKO ANATOLII",
    },
    purpose: {
      ua: "Допомога людям на прифронтових територіях",
      en: "Helping people in frontline areas",
    },
  },

  SocialTaxi: {
    title: {
      ua: "Соціальне таксі у Херсонській області",
      en: "Social Taxi in Kherson Region",
    },
    bankUAH_beneficiary: {
      ua: 'БФ "Я допомагаю"',
      en: "Charitable Fund “I Help” (БФ «Я Допомагаю»)",
    },
    bankUAH_bank: {
      ua: "АТ КБ «ПРИВАТБАНК»",
      en: "JSC CB PRIVATBANK (UAH)",
    },
    bankUSD_beneficiary: {
      ua: "DZIUBENKO ANATOLII",
      en: "DZIUBENKO ANATOLII",
    },
    purpose: {
      ua: "Соціальне таксі у Херсонській області",
      en: "Social Taxi in Kherson Region",
    },
  },

  KhersonChildren: {
    title: {
      ua: "Допомога дітям Херсонщини",
      en: "Help for children of Kherson region",
    },
    bankUAH_beneficiary: {
      ua: 'БФ "Я допомагаю"',
      en: "Charitable Fund “I Help” (БФ «Я Допомагаю»)",
    },
    bankUAH_bank: {
      ua: "АТ КБ «ПРИВАТБАНК»",
      en: "JSC CB PRIVATBANK (UAH)",
    },
    bankUSD_beneficiary: {
      ua: "DZIUBENKO ANATOLII",
      en: "DZIUBENKO ANATOLII",
    },
    purpose: {
      ua: "Допомога дітям Херсонщини",
      en: "Help for children of Kherson region",
    },
  },

  Volunteer: {
    title: { ua: "Стати волонтером", en: "Become a Volunteer" },
    h3: {
      ua: "Кожна пара рук і кожна ідея важливі!",
      en: "Every pair of hands and every idea matters!",
    },
    intro: {
      ua: `Я, твій побратим <em>Анатолій Дзюбенко</em>, засновник <em>iHELP</em>, запрошую тебе стати пліч-о-пліч із нашою командою - як фізичною працею, так і розумовою діяльністю. Разом ми здатні зробити більше!`,
      en: `I’m your comrade, <em>Anatolii Dziubenko</em>, founder of <em>iHELP</em>, and I invite you to stand shoulder to shoulder with our team - through both hands-on support and creative collaboration. Together, we can do more.`,
    },
    bulletTitle: {
      ua: "Твоя участь стане рушійною силою в iHELP:",
      en: "Your contribution will help drive iHELP forward:",
    },
    bullets: {
      ua: [
        "Ти допомагатимеш Петрові, Олександру та Тетяні з організацією логістики для доставки гуманітарної допомоги.",
        "Візьмеш участь у налагодженні процесів та отримаєш практичні знання з управління проєктами iHELP відповідно до найкращих стандартів <em>Project Management Institute (USA)</em>.",
        "Долучишся до створення як творчих, так і стратегічних рішень, розширюючи діяльність Фонду для підтримки людей у прифронтових зонах.",
      ],
      en: [
        "You’ll support Petro, Oleksandr, and Tetiana in organising logistics for humanitarian deliveries.",
        "You’ll gain hands-on experience in building operational processes and project management using international best practices (<em>Project Management Institute, USA</em>).",
        "You’ll take part in both creative and strategic decision-making to expand the Foundation’s reach in frontline communities.",
      ],
    },
    closing: {
      ua: "Твій талант, час і зусилля - це внесок, що дарує гідне життя і творить жадане майбутнє сильної України!",
      en: "Your time, your talent, your effort - it all creates dignity today and shapes a stronger Ukraine tomorrow.",
    },
    contact: {
      ua: `Напиши мені на`,
      en: `Message me on`,
    },
    contactContinue: {
      ua: `зателефонуй за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповни форму нижче, щоб разом творити добро ще потужніше!`,
      en: `call us at <a href="tel:+380679832115">+38 067 983 2115</a>, or fill out the form below - and let’s do even more good, together.`,
    },
    note: {
      ua: "*Фонд iHELP залишає за собою право резервування ключових волонтерів від мобілізації до лав Збройних сил України на весь термін часу війни для сприяння обороні України у волонтерському секторі відповідно до чинного законодавства України.",
      en: "Note: iHELP reserves the right to request exemption of key volunteers from military mobilisation for the duration of the war, in accordance with Ukrainian law, to support the country’s defence through vital volunteer work.",
    },
  },

  Partner: {
    title: { ua: "Стати партнером", en: "Become a Partner" },
    h3: {
      ua: "Співпраця з iHELP",
      en: "Partner with iHELP",
    },
    intro1: {
      ua: `Ми заохочуємо до співпраці з <em>iHELP</em> українські комерційні підприємства, організації, а також усіх суб’єктів громадянського суспільства, для яких важливість цільового та максимально ефективного використання коштів і ресурсів є першочерговим пріоритетом, як це є для нас у iHELP.`,
      en: `We invite Ukrainian businesses, organisations, and civil society actors who value transparency, accountability, and mission-driven resource use - the same values we hold at iHELP - to partner with us.`,
    },
    intro2: {
      ua: `<em>iHELP</em> гарантує найвищі стандарти ефективності, якості та прозорості в наданні гуманітарної допомоги. Ми заряджаємо кожну гривню нашого партнера працювати «на повну», забезпечуючи безпомилкове надходження допомоги тим, хто її потребує понад усе, навіть у найскладніших умовах.`,
      en: `<em>iHELP</em> guarantees the highest standards of efficiency, quality, and transparency in delivering humanitarian aid. We make every hryvnia count - ensuring support reaches those who need it most, even in the most difficult conditions.`,
    },
    closing: {
      ua: `Вам важливо, щоб кожен працівник організації працював із максимальною віддачею? Запрошуємо «найняти» команду iHELP для реалізації ВАШОЇ допомоги там, де це справді важливо!`,
      en: `If you want every member of your organisation working with full impact, consider “hiring” the iHELP team to deliver your aid - right where it matters.`,
    },
    bullets: {
      ua: [
        "Спрямування допомоги з бездоганною точністю.",
        "Реалізацію гуманітарних проєктів, що відповідають світовим стандартам управління процесами та найвищим етичним принципам гуманітарної допомоги, забезпечуючи взірцеву якість, прозорість і максимальну ефективність.",
        "Майбутнє, де кожна донька чи син українця відчуває тепло підтримки, відновлення сил та віру в єдність і міць України.",
      ],
      en: [
        "Precise targeting of humanitarian support.",
        "Execution of projects to global standards, with ethical excellence and transparency.",
        "A future where every Ukrainian child feels support, strength, and hope in unity.",
      ],
    },
    contact: {
      ua: `Напишіть нам на`,
      en: `Reach out to us via`,
    },
    contactContinue: {
      ua: `зателефонуйте за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповніть форму нижче, щоб разом творити добро ще потужніше!`,
      en: `call <a href="tel:+380679832115">+38 067 983 2115</a>, or fill out the form below - and let’s make an even bigger impact, together.`,
    },
  },
};

/**
 * getFormConfig(locale)
 * locale: string 'ua' or 'en' (or fallback to 'ua')
 *
 * Returns the array of modal configs with strings picked for given locale.
 */
export function getFormConfig(locale = "ua") {
  // const lang = locale && locale.startsWith("en") ? "en" : "ua";
  const lang = locale.startsWith("en") ? "en" : "ua";

  // translate helper function
  const t = (section, key, lang) => TRANSLATIONS[section][key][lang];

  // Build config using translations for picked language
  const config = [
    {
      id: "FrontlinePeople",
      title: TRANSLATIONS.FrontlinePeople.title[lang],
      pages: ["FrontlinePeople"],
      modalType: ["donate"],
      blockStyle: "firstBlock",
      data: {
        bankUAH: {
          beneficiary: TRANSLATIONS.FrontlinePeople.bankUAH_beneficiary[lang],
          edrpou: BANK_UAH_BASE.edrpou,
          iban: BANK_UAH_BASE.iban,
          bank: TRANSLATIONS.FrontlinePeople.bankUAH_bank[lang],
          purpose: TRANSLATIONS.FrontlinePeople.purpose[lang],
          link: BANK_UAH_BASE.privat_link,
        },

        bankUSD: {
          beneficiary: TRANSLATIONS.FrontlinePeople.bankUSD_beneficiary[lang],
          iban: BANK_USD_BASE.iban,
          bank: BANK_USD_BASE.bank_original,
          swift: BANK_USD_BASE.swift,
          correspondent: BANK_USD_BASE.correspondent,
          correspondentSwift: BANK_USD_BASE.correspondentSwift,
          account: BANK_USD_BASE.account,
          purpose: TRANSLATIONS.FrontlinePeople.purpose[lang],
        },

        ...COMMON_PAYMENTS,
      },
    },

    {
      id: "SocialTaxi",
      title: TRANSLATIONS.SocialTaxi.title[lang],
      pages: ["SocialTaxi"],
      modalType: ["donate"],
      blockStyle: "secondBlock",
      data: {
        bankUAH: {
          beneficiary: TRANSLATIONS.SocialTaxi.bankUAH_beneficiary[lang],
          edrpou: BANK_UAH_BASE.edrpou,
          iban: BANK_UAH_BASE.iban,
          bank: TRANSLATIONS.SocialTaxi.bankUAH_bank[lang],
          purpose: TRANSLATIONS.SocialTaxi.purpose[lang],
          link: BANK_UAH_BASE.privat_link,
        },

        bankUSD: {
          beneficiary: TRANSLATIONS.SocialTaxi.bankUSD_beneficiary[lang],
          iban: BANK_USD_BASE.iban,
          bank: BANK_USD_BASE.bank_original,
          swift: BANK_USD_BASE.swift,
          correspondent: BANK_USD_BASE.correspondent,
          correspondentSwift: BANK_USD_BASE.correspondentSwift,
          account: BANK_USD_BASE.account,
          purpose: TRANSLATIONS.SocialTaxi.purpose[lang],
        },

        ...COMMON_PAYMENTS,
      },
    },

    {
      id: "KhersonChildren",
      title: TRANSLATIONS.KhersonChildren.title[lang],
      pages: ["KhersonChildren"],
      modalType: ["donate"],
      blockStyle: "thirdBlock",
      data: {
        bankUAH: {
          beneficiary: TRANSLATIONS.KhersonChildren.bankUAH_beneficiary[lang],
          edrpou: BANK_UAH_BASE.edrpou,
          iban: BANK_UAH_BASE.iban,
          bank: TRANSLATIONS.KhersonChildren.bankUAH_bank[lang],
          purpose: TRANSLATIONS.KhersonChildren.purpose[lang],
          link: BANK_UAH_BASE.privat_link,
        },

        bankUSD: {
          beneficiary: TRANSLATIONS.KhersonChildren.bankUSD_beneficiary[lang],
          iban: BANK_USD_BASE.iban,
          bank: BANK_USD_BASE.bank_original,
          swift: BANK_USD_BASE.swift,
          correspondent: BANK_USD_BASE.correspondent,
          correspondentSwift: BANK_USD_BASE.correspondentSwift,
          account: BANK_USD_BASE.account,
          purpose: TRANSLATIONS.KhersonChildren.purpose[lang],
        },

        ...COMMON_PAYMENTS,
      },
    },

    {
      id: "Volunteer",
      title: t("Volunteer", "title", lang),
      pages: ["Default"],
      modalType: ["volunteer"],
      contentData: {
        h3: t("Volunteer", "h3", lang),
        intro: t("Volunteer", "intro", lang),
        bullets: t("Volunteer", "bullets", lang),
        bulletTitle: t("Volunteer", "bulletTitle", lang),
        closing: t("Volunteer", "closing", lang),
        contact: t("Volunteer", "contact", lang),
        contactContinue: t("Volunteer", "contactContinue", lang),
        note: t("Volunteer", "note", lang),
        formType: "волонтерство",
      },
    },

    {
      id: "Partner",
      title: t("Partner", "title", lang),
      pages: ["Default"],
      modalType: ["partner"],
      contentData: {
        h3: t("Partner", "h3", lang),
        intro1: t("Partner", "intro1", lang),
        intro2: t("Partner", "intro2", lang),
        closing: t("Partner", "closing", lang),
        bullets: t("Partner", "bullets", lang),
        contact: t("Partner", "contact", lang),
        contactContinue: t("Partner", "contactContinue", lang),
        formType: "партнерство",
      },
    },
  ];

  return config;
}

/* --------------------------------------- */
/* --------------------------------------- */
/* --------------------------------------- */

// import * as partnershipStyles from "./PartnershipBlocks.module.scss";
// import ContactForm from "../ContactForm/ContactForm";

// const BANK_UAH_BASE = {
//   edrpou: "44668404",
//   iban: "UA513052990000026005015029654",
//   bank_original: "АТ КБ «ПРИВАТБАНК»", // official name (kept as original)
//   privat_link: "https://next.privat24.ua/payments/form/%7B%22token%22%3A%220a98407c-0259-4cf7-a521-6ce525b3a710%22%7D",
// };

// const BANK_USD_BASE = {
//   iban: "UA623052990262066400932439100",
//   bank_original: "JSC CB PRIVATBANK, KYIV, UKRAINE",
//   swift: "PBANUA2X",
//   correspondent: "bank: J.P. MORGAN AG, FRANKFURT, GERMANY",
//   correspondentSwift: "CHASDEFX",
//   account: "623-160-5145",
// };

// const COMMON_PAYMENTS = {
//   bankLink: "https://send.monobank.ua/jar/AeuW8NKc9H",
//   monobankCard: "5375 4112 1037 7656",
//   payPal: "cfihelp.ua@gmail.com",
//   crypto: [
//     { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
//     { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
//     { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
//   ],
// };

// /**
//  * getFormConfig(locale)
//  * locale: string 'ua' or 'en' (or fallback to 'ua')
//  *
//  * Returns the array of modal configs with strings picked for given locale.
//  */
// export function getFormConfig(locale = "ua") {
//   const lang = locale && locale.startsWith("en") ? "en" : "ua";

//   // localized templates for bank beneficiaries & purposes & titles
//   const TRANSLATIONS = {
//     FrontlinePeople: {
//       title: {
//         ua: "Допомога людям на прифронтових територіях",
//         en: "Helping people in frontline areas",
//       },
//       bankUAH_beneficiary: {
//         ua: 'БФ "Я допомагаю"',
//         en: "Charitable Fund “I Help” (БФ «Я Допомагаю»)",
//       },
//       bankUAH_bank: {
//         ua: "АТ КБ «ПРИВАТБАНК»",
//         en: "JSC CB PRIVATBANK (UAH)",
//       },
//       bankUSD_beneficiary: {
//         ua: "DZIUBENKO ANATOLII",
//         en: "DZIUBENKO ANATOLII",
//       },
//       purpose: {
//         ua: "Допомога людям на прифронтових територіях",
//         en: "Helping people in frontline areas",
//       },
//     },

//     SocialTaxi: {
//       title: {
//         ua: "Соціальне таксі у Херсонській області",
//         en: "Social Taxi in Kherson Region",
//       },
//       bankUAH_beneficiary: {
//         ua: 'БФ "Я допомагаю"',
//         en: "Charitable Fund “I Help” (БФ «Я Допомагаю»)",
//       },
//       bankUAH_bank: {
//         ua: "АТ КБ «ПРИВАТБАНК»",
//         en: "JSC CB PRIVATBANK (UAH)",
//       },
//       bankUSD_beneficiary: {
//         ua: "DZIUBENKO ANATOLII",
//         en: "DZIUBENKO ANATOLII",
//       },
//       purpose: {
//         ua: "Соціальне таксі у Херсонській області",
//         en: "Social Taxi in Kherson Region",
//       },
//     },

//     KhersonChildren: {
//       title: {
//         ua: "Допомога дітям Херсонщини",
//         en: "Help for children of Kherson region",
//       },
//       bankUAH_beneficiary: {
//         ua: 'БФ "Я допомагаю"',
//         en: "Charitable Fund “I Help” (БФ «Я Допомагаю»)",
//       },
//       bankUAH_bank: {
//         ua: "АТ КБ «ПРИВАТБАНК»",
//         en: "JSC CB PRIVATBANK (UAH)",
//       },
//       bankUSD_beneficiary: {
//         ua: "DZIUBENKO ANATOLII",
//         en: "DZIUBENKO ANATOLII",
//       },
//       purpose: {
//         ua: "Допомога дітям Херсонщини",
//         en: "Help for children of Kherson region",
//       },
//     },

//     Volunteer: {
//       title: { ua: "Стати волонтером", en: "Become a Volunteer" },
//       h3: {
//         ua: "Кожна пара рук і кожна ідея важливі!",
//         en: "Every pair of hands and every idea matters!",
//       },
//       intro: {
//         ua: `Я, твій побратим <em>Анатолій Дзюбенко</em>, засновник <em>iHELP</em>, запрошую тебе стати пліч-о-пліч із нашою командою - як фізичною працею, так і розумовою діяльністю. Разом ми здатні зробити більше!`,
//         en: `I’m your comrade, <em>Anatolii Dziubenko</em>, founder of <em>iHELP</em>, and I invite you to stand shoulder to shoulder with our team - through both hands-on support and creative collaboration. Together, we can do more.`,
//       },
//       bulletTitle: {
//         ua: "Твоя участь стане рушійною силою в iHELP:",
//         en: "Your contribution will help drive iHELP forward:",
//       },
//       bullets: {
//         ua: [
//           "Ти допомагатимеш Петрові, Олександру та Тетяні з організацією логістики для доставки гуманітарної допомоги.",
//           "Візьмеш участь у налагодженні процесів та отримаєш практичні знання з управління проєктами iHELP відповідно до найкращих стандартів <em>Project Management Institute (USA)</em>.",
//           "Долучишся до створення як творчих, так і стратегічних рішень, розширюючи діяльність Фонду для підтримки людей у прифронтових зонах.",
//         ],
//         en: [
//           "You’ll support Petro, Oleksandr, and Tetiana in organising logistics for humanitarian deliveries.",
//           "You’ll gain hands-on experience in building operational processes and project management using international best practices (<em>Project Management Institute, USA</em>).",
//           "You’ll take part in both creative and strategic decision-making to expand the Foundation’s reach in frontline communities.",
//         ],
//       },
//       closing: {
//         ua: "Твій талант, час і зусилля - це внесок, що дарує гідне життя і творить жадане майбутнє сильної України!",
//         en: "Your time, your talent, your effort - it all creates dignity today and shapes a stronger Ukraine tomorrow.",
//       },
//       contact: {
//         ua: `Напиши мені на`,
//         en: `Message me on`,
//       },
//       contactContinue: {
//         ua: `зателефонуй за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповни форму нижче, щоб разом творити добро ще потужніше!`,
//         en: `call us at <a href="tel:+380679832115">+38 067 983 2115</a>, or fill out the form below - and let’s do even more good, together.`,
//       },
//       note: {
//         ua: "*Фонд iHELP залишає за собою право резервування ключових волонтерів від мобілізації до лав Збройних сил України на весь термін часу війни для сприяння обороні України у волонтерському секторі відповідно до чинного законодавства України.",
//         en: "Note: iHELP reserves the right to request exemption of key volunteers from military mobilisation for the duration of the war, in accordance with Ukrainian law, to support the country’s defence through vital volunteer work.",
//       },
//     },

//     Partner: {
//       title: { ua: "Стати партнером", en: "Become a Partner" },
//       h3: {
//         ua: "Співпраця з iHELP",
//         en: "Partner with iHELP",
//       },
//       intro1: {
//         ua: `Ми заохочуємо до співпраці з <em>iHELP</em> українські комерційні підприємства, організації, а також усіх суб’єктів громадянського суспільства, для яких важливість цільового та максимально ефективного використання коштів і ресурсів є першочерговим пріоритетом, як це є для нас у iHELP.`,
//         en: `We invite Ukrainian businesses, organisations, and civil society actors who value transparency, accountability, and mission-driven resource use - the same values we hold at iHELP - to partner with us.`,
//       },
//       intro2: {
//         ua: `<em>iHELP</em> гарантує найвищі стандарти ефективності, якості та прозорості в наданні гуманітарної допомоги. Ми заряджаємо кожну гривню нашого партнера працювати «на повну», забезпечуючи безпомилкове надходження допомоги тим, хто її потребує понад усе, навіть у найскладніших умовах.`,
//         en: `<em>iHELP</em> guarantees the highest standards of efficiency, quality, and transparency in delivering humanitarian aid. We make every hryvnia count - ensuring support reaches those who need it most, even in the most difficult conditions.`,
//       },
//       closing: {
//         ua: `Вам важливо, щоб кожен працівник організації працював із максимальною віддачею? Запрошуємо «найняти» команду iHELP для реалізації ВАШОЇ допомоги там, де це справді важливо!`,
//         en: `If you want every member of your organisation working with full impact, consider “hiring” the iHELP team to deliver your aid - right where it matters.`,
//       },
//       bullets: {
//         ua: [
//           "Спрямування допомоги з бездоганною точністю.",
//           "Реалізацію гуманітарних проєктів, що відповідають світовим стандартам управління процесами та найвищим етичним принципам гуманітарної допомоги, забезпечуючи взірцеву якість, прозорість і максимальну ефективність.",
//           "Майбутнє, де кожна донька чи син українця відчуває тепло підтримки, відновлення сил та віру в єдність і міць України.",
//         ],
//         en: [
//           "Precise targeting of humanitarian support.",
//           "Execution of projects to global standards, with ethical excellence and transparency.",
//           "A future where every Ukrainian child feels support, strength, and hope in unity.",
//         ],
//       },
//       contact: {
//         ua: `Напишіть нам на`,
//         en: `Reach out to us via`,
//       },
//       contactContinue: {
//         ua: `зателефонуйте за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповніть форму нижче, щоб разом творити добро ще потужніше!`,
//         en: `call <a href="tel:+380679832115">+38 067 983 2115</a>, or fill out the form below - and let’s make an even bigger impact, together.`,
//       },
//     },
//   };

//   // Build config using translations for picked language
//   const config = [
//     {
//       id: "FrontlinePeople",
//       title: TRANSLATIONS.FrontlinePeople.title[lang],
//       pages: ["FrontlinePeople"],
//       modalType: ["donate"],
//       blockStyle: "firstBlock",
//       data: {
//         bankUAH: {
//           beneficiary: TRANSLATIONS.FrontlinePeople.bankUAH_beneficiary[lang],
//           edrpou: BANK_UAH_BASE.edrpou,
//           iban: BANK_UAH_BASE.iban,
//           bank: TRANSLATIONS.FrontlinePeople.bankUAH_bank[lang],
//           purpose: TRANSLATIONS.FrontlinePeople.purpose[lang],
//           link: BANK_UAH_BASE.privat_link,
//         },

//         bankUSD: {
//           beneficiary: TRANSLATIONS.FrontlinePeople.bankUSD_beneficiary[lang],
//           iban: BANK_USD_BASE.iban,
//           bank: BANK_USD_BASE.bank_original,
//           swift: BANK_USD_BASE.swift,
//           correspondent: BANK_USD_BASE.correspondent,
//           correspondentSwift: BANK_USD_BASE.correspondentSwift,
//           account: BANK_USD_BASE.account,
//           purpose: TRANSLATIONS.FrontlinePeople.purpose[lang],
//         },

//         ...COMMON_PAYMENTS,
//       },
//     },

//     {
//       id: "SocialTaxi",
//       title: TRANSLATIONS.SocialTaxi.title[lang],
//       pages: ["SocialTaxi"],
//       modalType: ["donate"],
//       blockStyle: "secondBlock",
//       data: {
//         bankUAH: {
//           beneficiary: TRANSLATIONS.SocialTaxi.bankUAH_beneficiary[lang],
//           edrpou: BANK_UAH_BASE.edrpou,
//           iban: BANK_UAH_BASE.iban,
//           bank: TRANSLATIONS.SocialTaxi.bankUAH_bank[lang],
//           purpose: TRANSLATIONS.SocialTaxi.purpose[lang],
//           link: BANK_UAH_BASE.privat_link,
//         },

//         bankUSD: {
//           beneficiary: TRANSLATIONS.SocialTaxi.bankUSD_beneficiary[lang],
//           iban: BANK_USD_BASE.iban,
//           bank: BANK_USD_BASE.bank_original,
//           swift: BANK_USD_BASE.swift,
//           correspondent: BANK_USD_BASE.correspondent,
//           correspondentSwift: BANK_USD_BASE.correspondentSwift,
//           account: BANK_USD_BASE.account,
//           purpose: TRANSLATIONS.SocialTaxi.purpose[lang],
//         },

//         ...COMMON_PAYMENTS,
//       },
//     },

//     {
//       id: "KhersonChildren",
//       title: TRANSLATIONS.KhersonChildren.title[lang],
//       pages: ["KhersonChildren"],
//       modalType: ["donate"],
//       blockStyle: "thirdBlock",
//       data: {
//         bankUAH: {
//           beneficiary: TRANSLATIONS.KhersonChildren.bankUAH_beneficiary[lang],
//           edrpou: BANK_UAH_BASE.edrpou,
//           iban: BANK_UAH_BASE.iban,
//           bank: TRANSLATIONS.KhersonChildren.bankUAH_bank[lang],
//           purpose: TRANSLATIONS.KhersonChildren.purpose[lang],
//           link: BANK_UAH_BASE.privat_link,
//         },

//         bankUSD: {
//           beneficiary: TRANSLATIONS.KhersonChildren.bankUSD_beneficiary[lang],
//           iban: BANK_USD_BASE.iban,
//           bank: BANK_USD_BASE.bank_original,
//           swift: BANK_USD_BASE.swift,
//           correspondent: BANK_USD_BASE.correspondent,
//           correspondentSwift: BANK_USD_BASE.correspondentSwift,
//           account: BANK_USD_BASE.account,
//           purpose: TRANSLATIONS.KhersonChildren.purpose[lang],
//         },

//         ...COMMON_PAYMENTS,
//       },
//     },

//     {
//       id: "Volunteer",
//       title: TRANSLATIONS.Volunteer.title[lang],
//       pages: ["Default"],
//       modalType: ["volunteer"],
//       content: (
//         <div className={partnershipStyles.volunteerBlock}>
//           <section className={partnershipStyles.joinUs}>
//             <div className={partnershipStyles.container}>
//               {/* Title */}
//               <h3
//                 className={partnershipStyles.title}
//                 dangerouslySetInnerHTML={{
//                   __html: TRANSLATIONS.Volunteer.h3[lang],
//                 }}
//               />

//               {/* Intro */}
//               <p
//                 className={partnershipStyles.intro}
//                 dangerouslySetInnerHTML={{
//                   __html: TRANSLATIONS.Volunteer.intro[lang],
//                 }}
//               />

//               {/* Bullets */}
//               <div className={partnershipStyles.bullets}>
//                 <p>{TRANSLATIONS.Volunteer.bulletTitle[lang]}</p>
//                 <ul>
//                   {TRANSLATIONS.Volunteer.bullets[lang].map((text, i) => (
//                     <li key={i} dangerouslySetInnerHTML={{ __html: text }} />
//                   ))}
//                 </ul>
//               </div>

//               {/* Closing line */}
//               <p className={partnershipStyles.closing}>{TRANSLATIONS.Volunteer.closing[lang]}</p>

//               {/* Contact */}
//               <div className={partnershipStyles.contact}>
//                 <p>
//                   {TRANSLATIONS.Volunteer.contact[lang]}{" "}
//                   <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                     fb.com/AnatoliiDziubenko
//                   </a>
//                   ,{" "}
//                   <span
//                     dangerouslySetInnerHTML={{
//                       __html: TRANSLATIONS.Volunteer.contactContinue[lang],
//                     }}
//                   />
//                 </p>
//               </div>

//               {/* Legal note */}
//               <p className={partnershipStyles.note}>{TRANSLATIONS.Volunteer.note[lang]}</p>
//             </div>
//           </section>

//           {/* Form */}
//           <div className={partnershipStyles.formWrapperOutside}>
//             <ContactForm type={lang === "ua" ? "волонтерство" : "volunteering"} />
//           </div>
//         </div>
//       ),
//     },

//     {
//       id: "Partner",
//       title: TRANSLATIONS.Partner.title[lang],
//       pages: ["Default"],
//       modalType: ["partner"],
//       content: (
//         <div className={partnershipStyles.partnersBlock}>
//           <div className={partnershipStyles.container}>
//             {/* Title */}
//             <h3 className={partnershipStyles.title}>{TRANSLATIONS.Partner.h3[lang]}</h3>

//             {/* Intro paragraphs */}
//             <p
//               dangerouslySetInnerHTML={{
//                 __html: TRANSLATIONS.Partner.intro1[lang],
//               }}
//             />

//             <p
//               dangerouslySetInnerHTML={{
//                 __html: TRANSLATIONS.Partner.intro2[lang],
//               }}
//             />

//             {/* Closing paragraph */}
//             <p className={partnershipStyles.closing}>{TRANSLATIONS.Partner.closing[lang]}</p>

//             {/* Bullet list */}
//             <ul className={partnershipStyles.list}>
//               {TRANSLATIONS.Partner.bullets[lang].map((item, i) => (
//                 <li key={i}>{item}</li>
//               ))}
//             </ul>

//             {/* Contact */}
//             <div className={partnershipStyles.contact}>
//               <p>
//                 {TRANSLATIONS.Partner.contact[lang]}{" "}
//                 <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                   fb.com/AnatoliiDziubenko
//                 </a>
//                 ,{" "}
//                 <span
//                   dangerouslySetInnerHTML={{
//                     __html: TRANSLATIONS.Partner.contactContinue[lang],
//                   }}
//                 />
//               </p>
//             </div>
//           </div>

//           {/* Form */}
//           <div className={partnershipStyles.formWrapperOutside}>
//             <ContactForm type={lang === "ua" ? "партнерство" : "partnership"} />
//           </div>
//         </div>
//       ),
//     },
//   ];

//   return config;
// }

/* --------------------------------------- */
/* --------------------------------------- */
/* --------------------------------------- */

// export const FORM_CONFIG = [
//   {
//     id: "FrontlinePeople",
//     title: "Допомога людям на прифронтових територіях",
//     pages: ["FrontlinePeople"],
//     modalType: ["donate"],
//     blockStyle: "firstBlock",
//     data: {
//       bankUAH: {
//         beneficiary: 'БФ "Я допомагаю"',
//         edrpou: "44668404",
//         iban: "UA513052990000026005015029654",
//         bank: "АТ КБ «ПРИВАТБАНК»",
//         purpose: "Допомога людям на прифронтових територіях",
//       },

//       bankUSD: {
//         beneficiary: "DZIUBENKO ANATOLII",
//         iban: "UA623052990262066400932439100",
//         bank: "JSC CB PRIVATBANK, KYIV, UKRAINE",
//         swift: "PBANUA2X",
//         correspondent: "bank: J.P. MORGAN AG, FRANKFURT, GERMANY",
//         correspondentSwift: "CHASDEFX",
//         account: "623-160-5145",
//         purpose: "Helping people in frontline areas",
//       },

//       bankLink: "https://send.monobank.ua/jar/AeuW8NKc9H",
//       monobankCard: "5375 4112 1037 7656",
//       payPal: "cfihelp.ua@gmail.com",
//       crypto: [
//         { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
//         { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
//         { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
//       ],
//     },
//   },
//   {
//     id: "SocialTaxi",
//     title: "Соціальне таксі у Херсонській області",
//     pages: ["SocialTaxi"],
//     modalType: ["donate"],
//     blockStyle: "secondBlock",
//     data: {
//       bankUAH: {
//         beneficiary: 'БФ "Я допомагаю"',
//         edrpou: "44668404",
//         iban: "UA513052990000026005015029654",
//         bank: "АТ КБ «ПРИВАТБАНК»",
//         purpose: "Соціальне таксі у Херсонській області",
//       },

//       bankUSD: {
//         beneficiary: "DZIUBENKO ANATOLII",
//         iban: "UA623052990262066400932439100",
//         bank: "JSC CB PRIVATBANK, KYIV, UKRAINE",
//         swift: "PBANUA2X",
//         correspondent: "bank: J.P. MORGAN AG, FRANKFURT, GERMANY",
//         correspondentSwift: "CHASDEFX",
//         account: "623-160-5145",
//         purpose: "Social Taxi in Kherson Region",
//       },

//       bankLink: "https://send.monobank.ua/jar/AeuW8NKc9H",
//       monobankCard: "5375 4112 1037 7656",
//       payPal: "cfihelp.ua@gmail.com",
//       crypto: [
//         { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
//         { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
//         { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
//       ],
//     },
//   },
//   {
//     id: "KhersonChildren",
//     title: "Допомога дітям Херсонщини",
//     pages: ["KhersonChildren"],
//     modalType: ["donate"],
//     blockStyle: "thirdBlock",
//     data: {
//       bankUAH: {
//         beneficiary: 'БФ "Я допомагаю"',
//         edrpou: "44668404",
//         iban: "UA513052990000026005015029654",
//         bank: "АТ КБ «ПРИВАТБАНК»",
//         purpose: "Допомога дітям Херсонщини",
//       },

//       bankUSD: {
//         beneficiary: "DZIUBENKO ANATOLII",
//         iban: "UA623052990262066400932439100",
//         bank: "JSC CB PRIVATBANK, KYIV, UKRAINE",
//         swift: "PBANUA2X",
//         correspondent: "bank: J.P. MORGAN AG, FRANKFURT, GERMANY",
//         correspondentSwift: "CHASDEFX",
//         account: "623-160-5145",
//         purpose: "Help for children of Kherson region",
//       },

//       bankLink: "https://send.monobank.ua/jar/AeuW8NKc9H",
//       monobankCard: "5375 4112 1037 7656",
//       payPal: "cfihelp.ua@gmail.com",
//       crypto: [
//         { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
//         { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
//         { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
//       ],
//     },
//   },
//   {
//     id: "Стати волонтером",
//     title: "Стати волонтером",
//     pages: ["Default"],
//     modalType: ["volunteer"],
//     content: (
//       <div className={partnershipStyles.volunteerBlock}>
//         <section className={partnershipStyles.joinUs}>
//           <div className={partnershipStyles.container}>
//             <h3 className={partnershipStyles.title}>Кожна пара рук і кожна ідея важливі!</h3>
//             <p className={partnershipStyles.intro}>
//               Я, твій побратим <em>Анатолій Дзюбенко</em>, засновник <em>iHELP</em>, запрошую тебе стати пліч-о-пліч із
//               нашою командою - як фізичною працею, так і розумовою діяльністю. Разом ми здатні зробити більше!
//             </p>
//             <div className={partnershipStyles.bullets}>
//               <p>Твоя участь стане рушійною силою в iHELP:</p>
//               <ul>
//                 <li>
//                   Ти допомагатимеш Петрові, Олександру та Тетяні з організацією логістики для доставки гуманітарної
//                   допомоги.
//                 </li>
//                 <li>
//                   Візьмеш участь у налагодженні процесів та отримаєш практичні знання з управління проєктами iHELP
//                   відповідно до найкращих стандартів <em>Project Management Institute (USA)</em>.
//                 </li>
//                 <li>
//                   Долучишся до створення як творчих, так і стратегічних рішень, розширюючи діяльність Фонду для
//                   підтримки людей у прифронтових зонах.
//                 </li>
//               </ul>
//             </div>
//             <p className={partnershipStyles.closing}>
//               Твій талант, час і зусилля - це внесок, що дарує гідне життя і творить жадане майбутнє сильної України!
//             </p>
//             <div className={partnershipStyles.contact}>
//               <p>
//                 Напиши мені на{" "}
//                 <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                   fb.com/AnatoliiDziubenko
//                 </a>
//                 , зателефонуй за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповни форму нижче, щоб
//                 разом творити добро ще потужніше!
//               </p>
//             </div>
//             <p className={partnershipStyles.note}>
//               *Фонд iHELP залишає за собою право резервування ключових волонтерів від мобілізації до лав Збройних сил
//               України на весь термін часу війни для сприяння обороні України у волонтерському секторі відповідно до
//               чинного законодавства України.
//             </p>
//           </div>
//         </section>
//         <div className={partnershipStyles.formWrapperOutside}>
//           <ContactForm type="волонтерство" />
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: "Стати партнером",
//     title: "Стати партнером",
//     pages: ["Default"],
//     modalType: ["partner"],
//     content: (
//       <div className={partnershipStyles.partnersBlock}>
//         <div className={partnershipStyles.container}>
//           <h3 className={partnershipStyles.title}>Співпраця з iHELP</h3>
//           <p>
//             Ми заохочуємо до співпраці з <em>iHELP</em> українські комерційні підприємства, організації, а також усіх
//             суб’єктів громадянського суспільства, для яких важливість цільового та максимально ефективного використання
//             коштів і ресурсів є першочерговим пріоритетом, як це є для нас у iHELP.
//           </p>
//           <p>
//             <em>iHELP</em> гарантує найвищі стандарти ефективності, якості та прозорості в наданні гуманітарної
//             допомоги. Ми заряджаємо кожну гривню нашого партнера працювати «на повну», забезпечуючи безпомилкове
//             надходження допомоги тим, хто її потребує понад усе, навіть у найскладніших умовах.
//           </p>
//           <p className={partnershipStyles.closing}>
//             Вам важливо, щоб кожен працівник організації працював із максимальною віддачею? Запрошуємо «найняти» команду
//             iHELP для реалізації ВАШОЇ допомоги там, де це справді важливо!
//           </p>
//           <ul className={partnershipStyles.list}>
//             <li>Спрямування допомоги з бездоганною точністю.</li>
//             <li>
//               Реалізацію гуманітарних проєктів, що відповідають світовим стандартам управління процесами та найвищим
//               етичним принципам гуманітарної допомоги, забезпечуючи взірцеву якість, прозорість і максимальну
//               ефективність.
//             </li>
//             <li>
//               Майбутнє, де кожна донька чи син українця відчуває тепло підтримки, відновлення сил та віру в єдність і
//               міць України.
//             </li>
//           </ul>
//           <div className={partnershipStyles.contact}>
//             <p>
//               Напишіть нам на{" "}
//               <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
//                 fb.com/AnatoliiDziubenko
//               </a>
//               , зателефонуйте за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповніть форму нижче,
//               щоб разом творити добро ще потужніше!
//             </p>
//           </div>
//         </div>
//         <div className={partnershipStyles.formWrapperOutside}>
//           {" "}
//           <ContactForm type="партнерство" />
//         </div>
//       </div>
//     ),
//   },
// ];
