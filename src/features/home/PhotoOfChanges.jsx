import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Keyboard, Mousewheel } from "swiper/modules";

const slides = [
  {
    // title: "Jellyfish",
    description:
      '"Волонтери принесли їжу до нашого укриття, коли ми втратили надію. Дякуємо iHELP!" – Анна, Київська область.',
    // link: "https://en.wikipedia.org/wiki/Jellyfish",
    className: "swiper-slide--one",
  },
  {
    // title: "Seahorse",
    description:
      '"Волонтери принесли їжу до нашого укриття, коли ми втратили надію. Дякуємо iHELP!" – Анна, Київська область.',
    // link: "https://en.wikipedia.org/wiki/Seahorse",
    className: "swiper-slide--two",
  },
  {
    // title: "Octopus",
    description:
      '"Волонтери принесли їжу до нашого укриття, коли ми втратили надію. Дякуємо iHELP!" – Анна, Київська область.',
    // link: "https://en.wikipedia.org/wiki/Octopus",
    className: "swiper-slide--three",
  },
  {
    // title: "Shark",
    description:
      '"Волонтери принесли їжу до нашого укриття, коли ми втратили надію. Дякуємо iHELP!" – Анна, Київська область.',
    // link: "https://en.wikipedia.org/wiki/Shark",
    className: "swiper-slide--four",
  },
  {
    // title: "Dolphin",
    description:
      '"Волонтери принесли їжу до нашого укриття, коли ми втратили надію. Дякуємо iHELP!" – Анна, Київська область.',
    // link: "https://en.wikipedia.org/wiki/Dolphin",
    className: "swiper-slide--five",
  },
  {
    // title: "Dolphin",
    description:
      '"Волонтери принесли їжу до нашого укриття, коли ми втратили надію. Дякуємо iHELP!" – Анна, Київська область.',
    // link: "https://en.wikipedia.org/wiki/Dolphin",
    className: "swiper-slide--six",
  },
];

function PhotoOfChanges() {
  const [isResizing, setIsResizing] = React.useState(false);
  // const [activeIndex, setActiveIndex] = React.useState(0);

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
        <h3>Голос змін</h3>
        <hr />
        <p>Ми віримо, що маленькі вчинки створюють великі зміни. Разом ми допомагаємо творити майбутнє.</p>
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
