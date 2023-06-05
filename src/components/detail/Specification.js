import React from "react";

function Specification({ car }) {
  return (
    <div className="px-5 md:px-0">
      <div className="text-center my-10">
        <h1 className="uppercase font-semibold text-2xl sm:text-4xl">
          Specifications
        </h1>
        <p className="font-medium text-base sm:text-lg uppercase">
          explore more about {car?.name}
        </p>

        <h1 className="uppercase font-semibold text-xl sm:text-2xl mt-14">
          WILL {car?.name} FIT IN YOUR GARAGE?
        </h1>
        <p className="font-medium text-sm  uppercase">
          Learn about {car?.name} dimension in detail
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 gap-5">
          <img src={require("../../assets/images/kwid/spec_2.webp")} alt="" />
          <img src={require("../../assets/images/kwid/spec_1.webp")} alt="" />
          <img src={require("../../assets/images/kwid/spec_3.webp")} alt="" />
        </div>
        <button className="bg-black text-white font-semibold px-5 py-2.5 flex mx-auto my-5">
          compare
        </button>
      </div>
    </div>
  );
}

export default Specification;
