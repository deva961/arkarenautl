import React from "react";
import VehicleCard from "../card/VehicleCard";

function Engine({ car }) {
  return (
    <div className="px-5 md:px-0">
      <div className="text-center my-5">
        <h1 className="uppercase font-semibold text-2xl sm:text-4xl">
          {car?.name.split(" ")[1]} Engine
        </h1>
        <p className="font-medium text-base sm:text-lg uppercase">
          {car?.engine[0].title}
        </p>
      </div>

      {car?.name.split(" ")[1] !== "Kiger" && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-7xl mx-auto mb-14">
          <div className="col-span-1">
            <img
              src={require("../../assets/images/kwid/engine.webp")}
              loading="lazy"
              alt=""
            />
          </div>
          <div className="col-span-1 p-5 my-auto">
            <h1 className="uppercase font-semibold text-base sm:text-xl">
              {car?.engine[0]?.subtitle}
            </h1>
            <p className="text-xs sm:text-sm mt-5">{car?.engine[0].desc}</p>
          </div>
        </div>
      )}

      {/* table starts */}
      <div className="max-w-7xl mx-auto font-normal mb-10 overflow-x-auto">
        <table className="w-full table-auto ">
          <thead className="bg-black text-white tracking-wide">
            <tr>
              <th className="bg-white"></th>
              {car?.engine[0].variants?.map((variant) => (
                <th className="h-[94px] border-r-[1px] cap" colSpan={1}>
                  {variant}
                </th>
              ))}
            </tr>
            <tr>
              <th className="py-3 text-left px-5 uppercase" colSpan={1}>
                Petrol({car?.engine[0].variant_names?.length})
              </th>
              <th className="py-3" colSpan={5}></th>
            </tr>
          </thead>
          <tbody>
            {car?.engine[0].variant_names?.map((item) => (
              <tr className="h-10 border border-gray-400">
                <td className="border border-gray-400 text-sm py-6 px-4 text-center font-semibold uppercase">
                  {item.title}
                </td>
                {item.details.map((i) => (
                  <td className="border border-gray-400 text-sm py-6 px-4 text-center text-gray-600">
                    {i}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* table ends */}

      {car?.name.split(" ")[1] === "Kiger" && (
        <div className="max-w-xl mx-auto text-center space-y-3 mb-10">
          <p className="font-semibold text-2xl">{car?.engine[0]?.subtitle}</p>
          <p className="text-sm">{car?.engine[0].desc}</p>
        </div>
      )}

      <div className="max-w-6xl mx-auto px-5 md:px-0">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {car?.engine[0].engine_feautres?.map((item) => (
            <VehicleCard item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Engine;
