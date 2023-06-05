import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

function Variants({ variant }) {
  return (
    <>
      <Swiper className="mySwiper">
        {variant?.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.img} loading="lazy" alt="" />
            <p className="text-center font-semibold text-sm">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Variants;
