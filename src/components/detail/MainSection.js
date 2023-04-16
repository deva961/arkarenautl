import React from "react";
import { Link } from "react-router-dom";

function MainSection() {
  return (
    <div className="p-5 max-w-6xl mx-auto">
      {/* title section */}
      <div className="flex items-center justify-between">
        <div className="sec_1">
          <p className="uppercase font-bold text-3xl">Renault KWid</p>
          <p className="text-gray-600 font-normal mt-3">live for more</p>
        </div>
        <div className="sec_2">
          <Link
            to={"/"}
            className="bg-black text-white px-5 py-2 flex items-center space-x-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              height={30}
              fill="#fff"
            >
              <path d="M21.049 11.283H6.05c0 2.226-.798 2.982-3.027 2.982v4.494c2.228 0 3.027.714 3.027 2.94h14.999c0-2.226.8-2.94 3.027-2.94v-4.494c-2.227 0-3.027-.756-3.027-2.982zm1.514 5.964c-1.64.252-2.775 1.428-2.983 3.024H7.479c-.21-1.596-1.345-2.688-2.983-2.94v-1.638c1.639-.252 2.773-1.386 2.983-2.982H19.58c.209 1.596 1.343 2.814 2.983 3.066v1.47z"></path>
              <path d="M13.487 14.097c-1.471 0-2.563 1.134-2.563 2.52s1.092 2.52 2.563 2.52c1.472 0 2.562-1.134 2.562-2.52s-1.09-2.52-2.562-2.52zm0 3.654c-.714 0-1.134-.462-1.134-1.134s.42-1.134 1.134-1.134 1.134.462 1.134 1.134c0 .672-.419 1.134-1.134 1.134zM2.941 5.277v1.428h25.588v15.078H30V5.277z"></path>
              <path d="M0 24.723h26.976V8.259H0v16.464zM1.471 9.687h24.034v13.608H1.471V9.687z"></path>
              <path d="M21.049 11.283H6.05c0 2.226-.798 2.982-3.027 2.982v4.494c2.228 0 3.027.714 3.027 2.94h14.999c0-2.226.8-2.94 3.027-2.94v-4.494c-2.227 0-3.027-.756-3.027-2.982zm1.514 5.964c-1.64.252-2.775 1.428-2.983 3.024H7.479c-.21-1.596-1.345-2.688-2.983-2.94v-1.638c1.639-.252 2.773-1.386 2.983-2.982H19.58c.209 1.596 1.343 2.814 2.983 3.066v1.47z"></path>
              <path d="M13.487 14.097c-1.471 0-2.563 1.134-2.563 2.52s1.092 2.52 2.563 2.52c1.472 0 2.562-1.134 2.562-2.52s-1.09-2.52-2.562-2.52zm0 3.654c-.714 0-1.134-.462-1.134-1.134s.42-1.134 1.134-1.134 1.134.462 1.134 1.134c0 .672-.419 1.134-1.134 1.134zM2.941 5.277v1.428h25.588v15.078H30V5.277z"></path>
              <path d="M0 24.723h26.976V8.259H0v16.464zM1.471 9.687h24.034v13.608H1.471V9.687z"></path>
            </svg>
            <p>calculate emi</p>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-14 px-5 lg:px-0 max-w-4xl mx-auto mt-20">
        <div className="col-span-1">
          <img
            src={require("../../assets/images/kwid/2.webp")}
            className="w-full object-cover h-full"
            loading="lazy"
            alt=""
          />
        </div>
        <div className="col-span-2 space-y-5">
          <p className="font-bold text-2xl">LET THE WORLD TAKE NOTICE</p>
          <p className="text-sm font-light text-gray-600">
            Be it the SUV-inspired details or a dual tone look, Kwid never fails
            to impress. The interiors redefine superlative comfort and
            futuristic technology without missing out on a line-up of advanced
            safety features. No wonder, it’s the favourite hatchback of the
            generation.
          </p>
          <div className="flex">
            <Link
              to={"/"}
              className="bg-black text-white px-5 py-2 flex items-center space-x-3"
            >
              <p>explore gallery</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
