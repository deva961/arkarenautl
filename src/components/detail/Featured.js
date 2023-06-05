import React from "react";
import { Link } from "react-router-dom";
import Slider from "../slider/Slider";
import { feature_kwid_slider } from "../../constants";
import VehicleCard from "../card/VehicleCard";
function Featured({ car }) {
  return (
    <div className="px-5 md:px-0">
      <div className="px-5 md:px-0">
        <div className="text-center my-5">
          <h1 className="uppercase font-semibold text-2xl sm:text-4xl">
            {car?.featured_main_title}
          </h1>
          <p className="font-medium text-base sm:text-lg uppercase">
            {car?.name}
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center my-10">
        <Link
          to={"/"}
          className="bg-black px-5 py-2.5 font-semibold text-white hover:bg-secondary hover:text-black duration-150"
        >
          download brochure
        </Link>
      </div>

      <div className="text-center my-5 max-w-2xl mx-auto">
        <h1 className="uppercase font-semibold text-2xl">
          {car?.featured_title}
        </h1>
        <p className="text-sm md:text-base mt-2">{car?.featured_desc}</p>
      </div>

      <Slider sliders={feature_kwid_slider} />

      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {car?.feature.map((item) => (
            <VehicleCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Featured;
