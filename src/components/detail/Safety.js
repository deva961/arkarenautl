import React from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../card/VehicleCard";

function Safety({ car }) {
  return (
    <div className="px-5 md:px-0">
      <div className="text-center my-5">
        <h1 className="uppercase font-semibold text-2xl sm:text-4xl">
          safety in the spot light
        </h1>
        <p className="font-medium text-base sm:text-lg uppercase">
          {car?.name}
        </p>
      </div>

      <div className="flex items-center flex-col sm:flex-row justify-center my-10 space-y-4 sm:space-y-0 sm:space-x-4">
        <a
          href={car?.pdf}
          target={'_blank'}
          rel="noreferrer"
          className="bg-black px-5 py-2.5 font-semibold text-white hover:bg-secondary hover:text-black duration-150"
        >
          download brochure
        </a>
        <Link
          to={"/"}
          className="bg-white px-12 sm:px-5 py-2 font-semibold border border-black hover:bg-black hover:text-white duration-150"
        >
          check price
        </Link>
      </div>

      <div className="text-center my-5 max-w-2xl mx-auto">
        <h1 className="uppercase font-semibold text-2xl">
          {car?.safety_title}
        </h1>
        <p className="text-sm mt-2">{car?.safety_desc}</p>
      </div>
      <div className="max-w-7xl mx-auto mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {car?.safety.map((item) => (
            <VehicleCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Safety;
