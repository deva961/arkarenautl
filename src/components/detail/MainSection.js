import React from "react";
import { Link } from "react-router-dom";
import VehicleCard from "../card/VehicleCard";
import GridDesign from "../GridDesign";
import Form from "../form/Form";

function MainSection({ car }) {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      {/* title section */}
      <div className="sm:flex items-center justify-between">
        <div className="sec_1">
          <p className="uppercase font-bold text-3xl">{car?.name}</p>
          <p className="text-gray-600 font-normal mt-3">{car?.caption}</p>
        </div>
        <div className="sec_2 mt-10 sm:mt-0">
          <p className="font-semibold text-md">starting from ₹4,69,500.00</p>
          <a
            href={car?.pdf}
            target={"_blank"}
            rel="noreferrer"
            className="text-sm border-b-2 border-secondary"
          >
            download brochure
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 lg:px-0 max-w-4xl mx-auto mt-10 sm:mt-20">
        <div className="col-span-1 hidden lg:block">
          <img
            src={car?.gallery[0]}
            className="w-full object-cover h-full"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="col-span-2 space-y-5">
          <p className="font-bold text-2xl">{car?.ptitle}</p>
          <p className="text-sm font-light max-w-sm w-full ">{car?.pdesc}</p>
          <div className="flex ">
            <Link
              to={"/"}
              className="bg-black font-semibold text-white px-4 py-2 flex items-center space-x-3 mx-auto md:ml-1"
            >
              explore gallery
            </Link>
          </div>
        </div>
      </div>

      {car?.design[0] && <GridDesign pics={car?.design[0]?.grid_images} />}

      <div className="grid grid-cols-2 gap-2 mt-6 lg:hidden">
        {car?.gallery.map((item, index) => (
          <img src={item} alt={index} key={index} />
        ))}
      </div>

      <Form veh />

      {/* discover section starts */}
      {car?.name === "Renault Triber" && (
        <>
          <div className="discover__section mt-3 xl:mt-14">
            <p className="text-center text-gray-500 mb-2">
              spacious and modular
            </p>
            <p className="text-center uppercase mb-10 font-bold text-gray-800 text-lg lg:text-2xl ">
              DISCOVER SPACE LIKE NEVER BEFORE
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {car?.discover.map((item) => (
              <VehicleCard item={item} key={item.id} />
            ))}
          </div>
        </>
      )}
      {/* discover section ends */}

      {/* About section starts */}
      <div className="about__section mt-3 xl:mt-14">
        <p className="text-center uppercase mb-10 font-bold text-gray-800 text-lg lg:text-2xl ">
          All about {car?.name}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {car?.about.map((item) => (
          <VehicleCard item={item} key={item.id} />
        ))}
      </div>
      {/* About section ends */}

      {/* accessories section starts */}
      <div className="about__section mt-3 xl:mt-8">
        <p className="text-center text-gray-500 mb-2">accessories</p>
        <p className="text-center uppercase mb-10 font-bold text-gray-800 text-lg lg:text-2xl ">
          Personalise your {car?.name}
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {car?.acce.map((item) => (
          <VehicleCard item={item} key={item.id} />
        ))}
      </div>
    </div>
    // {/* accessories section starts */}
  );
}

export default MainSection;
