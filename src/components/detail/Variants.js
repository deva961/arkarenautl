import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { GrFormNext } from "react-icons/gr";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

function Variants({ variant }) {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <>
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        modules={[Navigation]}
        loop={false}
        className="mySwiper my-10"
      >
          <div
            ref={navigationPrevRef}
            className="absolute top-0 right-7  sm:right-12 z-10 bg-secondary rounded-lg p-1 sm:p-3 cursor-pointer"
          >
            <GrFormNext className="rotate-180" />
          </div>
          <div
            ref={navigationNextRef}
            className="absolute top-0  right-0 z-10 bg-secondary rounded-lg p-1 sm:p-3 cursor-pointer"
          >
            <GrFormNext />
          </div>
        {variant?.map((item) => (
          <SwiperSlide key={item.id}>
            <img
              src={item.img}
              className="h-auto w-auto"
              loading="lazy"
              alt=""
            />
            <p className="text-center font-semibold text-sm">{item.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Variants;
