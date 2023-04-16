import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";

function Slider({ sliders }) {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        modules={[Autoplay, Pagination]}
        className="mySwiper slider-home"
      >
        {sliders.map((item, i) => (
          <SwiperSlide key={i}>
            <img
              src={item.desktop}
              loading="lazy"
              className="max-w-full max-h-[700px] w-full object-cover"
              alt={i}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;
