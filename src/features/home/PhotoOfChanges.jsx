import React, { useEffect } from "react";
import { useTranslation } from "next-i18next";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";

function PhotoOfChanges() {
  const { t } = useTranslation("home");
  const [isResizing, setIsResizing] = React.useState(false);
  // const [activeIndex, setActiveIndex] = React.useState(0);

  const slides = [
    {
      // title: "Jellyfish",
      description: t("photoOfChanges.firstPhoto"),
      // link: "https://en.wikipedia.org/wiki/Jellyfish",
      className: "swiper-slide--one",
    },
    {
      // title: "Seahorse",
      description: t("photoOfChanges.secondPhoto"),
      // link: "https://en.wikipedia.org/wiki/Seahorse",
      className: "swiper-slide--two",
    },
    {
      // title: "Octopus",
      description: t("photoOfChanges.thirdPhoto"),
      // link: "https://en.wikipedia.org/wiki/Octopus",
      className: "swiper-slide--three",
    },
    {
      // title: "Shark",
      description: t("photoOfChanges.fourthPhoto"),
      // link: "https://en.wikipedia.org/wiki/Shark",
      className: "swiper-slide--four",
    },
    {
      // title: "Dolphin",
      description: t("photoOfChanges.fifthPhoto"),
      // link: "https://en.wikipedia.org/wiki/Dolphin",
      className: "swiper-slide--five",
    },
    {
      // title: "Dolphin",
      description: t("photoOfChanges.sixthPhoto"),
      // link: "https://en.wikipedia.org/wiki/Dolphin",
      className: "swiper-slide--six",
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsResizing(true);
      clearTimeout(window.resizeTimeout);
      window.resizeTimeout = setTimeout(() => setIsResizing(false), 300);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="photo-of-changes">
      <div className="text-block">
        {/* <span>Приєднуйся</span> */}
        <h3>{t("photoOfChanges.title")}</h3>
        <hr />
        <p>{t("photoOfChanges.subtitle")}</p>
        {/* <p>{slides[activeIndex].description}</p> */}
        {/* <Button>Download App</Button> */}
      </div>

      <Swiper
        loop={!isResizing}
        className="swiper"
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        pagination={{ clickable: true }}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        coverflowEffect={{ rotate: 0, stretch: 0, depth: 100, modifier: 3, slideShadows: true }}
        // breakpoints={{
        //   640: { slidesPerView: 2 },
        //   768: { slidesPerView: 2 },
        //   1024: { slidesPerView: 3 },
        //   1560: { slidesPerView: 3 },
        // }}
        breakpoints={{
          0: { slidesPerView: 1 },
          575: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        modules={[EffectCoverflow, Pagination, Keyboard, Mousewheel]}
        // onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Track active slide
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.className} className={slide.className}>
            <div>
              {/* <h2>{slide.title}</h2> */}
              <p>{slide.description}</p>
              {/* <a href={slide.link} target="_blank" rel="noopener noreferrer">
                explore
              </a> */}
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-pagination" />
      </Swiper>
    </section>
  );
}

export default PhotoOfChanges;
