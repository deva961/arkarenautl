import React from "react";
import Slider from "../slider/Slider";
import Variants from "./Variants";
import GridDesign from "../GridDesign";

function Design({ car }) {
  return (
    <div className="px-5 md:px-0">
      <div className="text-center my-5">
        <h1 className="uppercase font-semibold text-2xl sm:text-4xl">
          {car?.design[0]?.title}
        </h1>
        <p className="font-medium text-base sm:text-lg uppercase">
          {car?.name}
        </p>
      </div>

      <div className="flex items-center justify-center my-10">
        <a
          href={car?.pdf}
          target={"_blank"}
          className="bg-black px-5 py-2.5 font-semibold text-white hover:bg-secondary hover:text-black duration-150"
        >
          download brochure
        </a>
      </div>

      {/* {car?.name.split(" ")[1] === "Kwid" && ( */}
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
          <p className="font-bold text-2xl">{car?.design[0]?.subtitle}</p>
          <p className="text-sm text-gray-600 max-w-sm w-full ">
            {car?.design[0]?.desc}
          </p>
          {/* <div className="flex ">
              <Link
                to={"/"}
                className="bg-black font-semibold text-white px-4 py-2 flex items-center space-x-3 mx-auto md:ml-1"
              >
                explore gallery
              </Link>
            </div> */}
        </div>
      </div>
      {/* )} */}

      <GridDesign pics={car?.design[0]?.grid_images} />

      {car?.name.split(" ")[1] !== "Triber" && (
        <>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="uppercase font-semibold text-2xl">
              {car?.design[0]?.sec_title}
            </h1>
            <p className="text-sm text-gray-600 md:text-base mt-2 mb-10">
              {car?.design[0]?.sec_desc}
            </p>
          </div>
          <Slider sliders={car?.design[0]?.sliders} />
          <div className="text-center my-10 max-w-2xl mx-auto">
            <h1 className=" font-semibold text-2xl lg:text-4xl">
              {car?.design[0]?.third_title}
            </h1>
            <p className="text-sm md:text-base mt-2">
              {car?.design[0]?.third_desc}
            </p>
          </div>
        </>
      )}

      <div className="grid grid-cols-2 gap-2 mt-6 lg:hidden">
        {car?.gallery.map((item, index) => (
          <img src={item} alt={index} key={index} />
        ))}
      </div>

      <div className="max-w-5xl mx-auto">
        <Variants variant={car?.variants} />
      </div>

      {car?.name.split(" ")[1] !== "Kwid" && (
        <>
          <div className="text-center my-5 max-w-2xl mx-auto">
            <h1 className="uppercase font-semibold text-2xl">
              {car?.design[0]?.third_title}
            </h1>
            <p className="text-sm md:text-base mt-2">
              {car?.design[0]?.third_desc}
            </p>
          </div>
          <img src={car?.design[0]?.variants_img} className="mx-auto" alt="" />
        </>
      )}
    </div>
  );
}

export default Design;
