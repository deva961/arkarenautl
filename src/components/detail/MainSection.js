import React from "react";
import { Link } from "react-router-dom";
import EmiSvg from "../../assets/images/svg/emi.svg";
import VehicleCard from "../card/VehicleCard";
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

      <div className="grid grid-cols-2 gap-2 mt-6 lg:hidden">
        {car?.gallery.map((item, index) => (
          <img src={item} alt={index} key={index} />
        ))}
      </div>

      <div className="flex items-center justify-center flex-col lg:flex-row space-y-2 lg:space-x-2 lg:space-y-0 mt-5">
        <Link
          to={"/"}
          className="bg-black font-semibold text-white px-5 py-2 text-sm"
        >
          <p>downlaod brochure</p>
        </Link>

        <Link
          to={"/"}
          className="border-black text-sm border font-semibold text-black px-8 py-2"
        >
          <p>register interest</p>
        </Link>
      </div>

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
      {/* <div className="mx-auto container">
        <div className="grid grid-cols-4">
          <div className="col-span-3 bg-black p-8">
            <p className="text-white text-2xl">
              Want to own a <span className="font-semibold">{car?.name}?</span>
            </p>
            <form onSubmit={() => {}}>
              <div className="grid grid-cols-2 gap-5">
                <div className="flex flex-col relative">
                  <input
                    type="text"
                    id="fname"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Name"
                    className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
                  />
                </div>

                <div className="flex flex-col relative">
                  <input
                    type="text"
                    id="fname"
                    // value={firstName}
                    // onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Mobiel"
                    className="max-w-96 w-full p-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="col-span-1">
            <img src={car?.form_pic} className="object-cover" alt={car?.name} />
          </div>
        </div>
      </div> */}

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
