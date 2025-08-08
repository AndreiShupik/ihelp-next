import * as partnershipStyles from "./PartnershipBlocks.module.scss";
import ContactForm from "../ContactForm/ContactForm";

export const FORM_CONFIG = [
  {
    id: "FrontlinePeople",
    title: "Допомога людям на прифронтових територіях",
    pages: ["FrontlinePeople"],
    modalType: ["donate"],
    blockStyle: "firstBlock",
    data: {
      edrpou: "XXXXXXXX",
      purpose: "Опис призначення платежу",
      accounts: [
        { label: "UAH", value: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
        { label: "Мультивалютний рахунок", value: "UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" },
      ],
      bankLink: { label: "Monobank (банка):", url: "https://send.monobank.ua/jar/7mP4ZFCree" },
      crypto: [
        { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
        { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
        { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
      ],
    },
  },
  {
    id: "Соціальне таксі у Херсонській області",
    title: "Соціальне таксі у Херсонській області",
    pages: ["SocialTaxi"],
    modalType: ["donate"],
    blockStyle: "secondBlock",
    data: {
      edrpou: "XXXXXXXX",
      purpose: "Опис призначення платежу",
      accounts: [
        { label: "UAH", value: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
        { label: "Мультивалютний рахунок", value: "UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" },
      ],
      bankLink: { label: "Monobank (банка):", url: "https://send.monobank.ua/jar/7mP4ZFCree" },
      crypto: [
        { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
        { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
        { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
      ],
    },
  },
  {
    id: "Допомога дітям Херсонщини",
    title: "Допомога дітям Херсонщини",
    pages: ["KhersonChildren"],
    modalType: ["donate"],
    blockStyle: "thirdBlock",
    data: {
      edrpou: "XXXXXXXX",
      purpose: "Опис призначення платежу",
      accounts: [
        { label: "UAH", value: "UAXXXXXXXXXXXXXXXXXXXXXXXXXXX" },
        { label: "Мультивалютний рахунок", value: "UAYYYYYYYYYYYYYYYYYYYYYYYYYYY" },
      ],
      bankLink: { label: "Monobank (банка):", url: "https://send.monobank.ua/jar/7mP4ZFCree" },
      crypto: [
        { label: "Bitcoin (BTC)", value: "bc1q8wx68f0v54s5whafyfcrc5hv6ad544v7csp03r" },
        { label: "Ethereum (ETH)", value: "0xfc0b52E020223c98a546F814cdA6d7872D74b386" },
        { label: "USDT (TRC20)", value: "TXWij58sQniqy2jtF8QE5xSX2zLQ5YMhUa" },
      ],
    },
  },
  {
    id: "Стати волонтером",
    title: "Стати волонтером",
    pages: ["Default"],
    modalType: ["volunteer"],
    content: (
      <div className={partnershipStyles.volunteerBlock}>
        <section className={partnershipStyles.joinUs}>
          <div className={partnershipStyles.container}>
            <h3 className={partnershipStyles.title}>Кожна пара рук і кожна ідея важливі!</h3>
            <p className={partnershipStyles.intro}>
              Я, твій побратим <em>Анатолій Дзюбенко</em>, засновник <em>iHELP</em>, запрошую тебе стати пліч-о-пліч із
              нашою командою — як фізичною працею, так і розумовою діяльністю. Разом ми здатні зробити більше!
            </p>
            <div className={partnershipStyles.bullets}>
              <p>Твоя участь стане рушійною силою в iHELP:</p>
              <ul>
                <li>
                  Ти допомагатимеш Петрові, Олександру та Тетяні з організацією логістики для доставки гуманітарної
                  допомоги.
                </li>
                <li>
                  Візьмеш участь у налагодженні процесів та отримаєш практичні знання з управління проєктами iHELP
                  відповідно до найкращих стандартів <em>Project Management Institute (USA)</em>.
                </li>
                <li>
                  Долучишся до створення як творчих, так і стратегічних рішень, розширюючи діяльність Фонду для
                  підтримки людей у прифронтових зонах.
                </li>
              </ul>
            </div>
            <p className={partnershipStyles.closing}>
              Твій талант, час і зусилля — це внесок, що дарує гідне життя і творить жадане майбутнє сильної України!
            </p>
            <div className={partnershipStyles.contact}>
              <p>
                Напиши мені на{" "}
                <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
                  fb.com/AnatoliiDziubenko
                </a>
                , зателефонуй за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповни форму нижче, щоб
                разом творити добро ще потужніше!
              </p>
            </div>
            <p className={partnershipStyles.note}>
              *Фонд iHELP залишає за собою право резервування ключових волонтерів від мобілізації до лав Збройних сил
              України на весь термін часу війни для сприяння обороні України у волонтерському секторі відповідно до
              чинного законодавства України.
            </p>
          </div>
        </section>
        <ContactForm type="волонтерство" />
      </div>
    ),
  },
  {
    id: "Стати партнером",
    title: "Стати партнером",
    pages: ["Default"],
    modalType: ["partner"],
    content: (
      <div className={partnershipStyles.partnersBlock}>
        <div className={partnershipStyles.container}>
          <h3 className={partnershipStyles.title}>Співпраця з iHELP</h3>
          <p>
            Ми заохочуємо до співпраці з <em>iHELP</em> українські комерційні підприємства, організації, а також усіх
            суб’єктів громадянського суспільства, для яких важливість цільового та максимально ефективного використання
            коштів і ресурсів є першочерговим пріоритетом, як це є для нас у iHELP.
          </p>
          <p>
            <em>iHELP</em> гарантує найвищі стандарти ефективності, якості та прозорості в наданні гуманітарної
            допомоги. Ми заряджаємо кожну гривню нашого партнера працювати «на повну», забезпечуючи безпомилкове
            надходження допомоги тим, хто її потребує понад усе, навіть у найскладніших умовах.
          </p>
          <p className={partnershipStyles.closing}>
            Вам важливо, щоб кожен працівник організації працював із максимальною віддачею? Запрошуємо «найняти» команду
            iHELP для реалізації ВАШОЇ допомоги там, де це справді важливо!
          </p>
          <ul className={partnershipStyles.list}>
            <li>Спрямування допомоги з бездоганною точністю.</li>
            <li>
              Реалізацію гуманітарних проєктів, що відповідають світовим стандартам управління процесами та найвищим
              етичним принципам гуманітарної допомоги, забезпечуючи взірцеву якість, прозорість і максимальну
              ефективність.
            </li>
            <li>
              Майбутнє, де кожна донька чи син українця відчуває тепло підтримки, відновлення сил та віру в єдність і
              міць України.
            </li>
          </ul>
          <div className={partnershipStyles.contact}>
            <p>
              Напишіть нам на{" "}
              <a href="https://fb.com/AnatoliiDziubenko" target="_blank" rel="noopener noreferrer">
                fb.com/AnatoliiDziubenko
              </a>
              , зателефонуйте за номером <a href="tel:+380679832115">+38 067 983 2115</a>, або заповніть форму нижче,
              щоб разом творити добро ще потужніше!
            </p>
          </div>
        </div>
        <ContactForm type="партнерство" />
      </div>
    ),
  },
];
