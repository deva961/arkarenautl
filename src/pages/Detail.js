import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import MainSection from "../components/detail/MainSection";
import Safety from "../components/detail/Safety";
import Engine from "../components/detail/Engine";
const Header = lazy(() => import("../components/Header/Header"));

const tabs = [
  "KWID",
  "safety",
  "features",
  "desgin",
  "engine",
  "price",
  "specifications",
];

function Detail() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="flex items-center justify-between px-4">
        <div className="section-1 flex flex-row space-x-5 bg-white overflow-y-auto">
          {tabs.map((item, index) => (
            <p
              className={`${
                activeTab === index
                  ? "border-b-2 border-secondary font-bold"
                  : "text-gray-600"
              } py-4 uppercase text-xs md:text-sm hover:cursor-pointer`}
              onClick={(e) => setActiveTab(index)}
            >
              {item}
            </p>
          ))}
        </div>
        <div className="section-2 space-x-2 hidden lg:flex lg:items-center">
          <Link
            to={"/"}
            className="px-4 py-2.5 bg-secondary text-black font-semibold"
          >
            download brochure
          </Link>
          <Link
            to={"/"}
            className="px-4 py-2.5 border border-gray-700 font-semibold"
          >
            book a test drive
          </Link>
        </div>
      </div>
      <img
        src={require("../assets/images/kwid/1.webp")}
        className="md:h-[600px] object-cover w-full max-w-full"
        loading="lazy"
        alt=""
      />
      {activeTab === 0 && <MainSection />}
      {activeTab === 1 && <Safety />}
      {activeTab === 4 && <Engine />}
    </Suspense>
  );
}

export default Detail;
