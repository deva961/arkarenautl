import React, { Suspense, lazy, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MainSection from "../components/detail/MainSection";
import Safety from "../components/detail/Safety";
import Engine from "../components/detail/Engine";
import { carSpecs } from "../constants/specs";
const Header = lazy(() => import("../components/Header/Header"));
const Footer = lazy(() => import("../components/Footer/Footer"));

function Detail() {
  const { pathname } = useLocation();
  const [car, setCar] = useState();
  const id = pathname.split("/")[1];
  useEffect(() => {
    carSpecs?.forEach((item) => item.id === id && setCar(item));
  }, [id]);

  const tabs = [
    "Kwid",
    "safety",
    "features",
    "desgin",
    "engine",
    "price",
    "specifications",
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <div className="flex items-center justify-between px-4">
        <div className="section-1 flex flex-row space-x-5 bg-white overflow-y-auto">
          {tabs.map((item, index) => (
            <p
              key={index}
              className={`${
                activeTab === index
                  ? "border-b-4 border-secondary font-bold"
                  : "text-gray-600"
              } py-4 uppercase text-xs md:text-sm hover:cursor-pointer hover:border-b-4 hover:border-secondary`}
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
        src={car?.banner}
        className="md:h-[600px] object-cover w-full max-w-full"
        loading="lazy"
        alt=""
      />
      {activeTab === 0 && <MainSection car={car} />}
      {activeTab === 1 && <Safety />}
      {activeTab === 4 && <Engine />}

      <Footer />
    </Suspense>
  );
}

export default Detail;
