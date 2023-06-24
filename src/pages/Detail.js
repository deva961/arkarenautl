import React, { Suspense, lazy, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { carSpecs } from "../constants/specs";
import { Helmet } from "react-helmet";
import Loading from "../components/loading/Loading";
const Header = lazy(() => import("../components/Header/Header"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const MainSection = lazy(() => import("../components/detail/MainSection"));
const Design = lazy(() => import("../components/detail/Design"));
const Featured = lazy(() => import("../components/detail/Featured"));
const Safety = lazy(() => import("../components/detail/Safety"));
const Engine = lazy(() => import("../components/detail/Engine"));
const Specification = lazy(() => import("../components/detail/Specification"));
const Price = lazy(() => import("../components/detail/Price"));

function Detail() {
  const { pathname } = useLocation();

  const [car, setCar] = useState(null);
  const id = pathname.split("/")[2];
  useEffect(() => {
    document.title = `${car?.name} On Road Price in Hyderabad | ${
      car?.name.split(" ")[1]
    } Offers Hyderabad`;
    carSpecs?.forEach((item) => item.id === id && setCar(item));
  }, [id, car?.name]);

  const tabs = [
    car?.name.split(" ")[1],
    "safety",
    "features",
    "design",
    "engine",
    "price",
    // "specifications",
  ];
  const [activeTab, setActiveTab] = useState(0);
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Helmet>
        {car?.name === "Renault Kwid" && (
          <meta
            name="description"
            content="Renault Kwid on road price in Hyderabad. Arka Renault offers best deals on Kwid. Visit us today to know more offers on Kwid. Renault Kwid most selling Hatchback. Reanult Kwid test drive today."
          />
        )}
        {car?.name === "Renault Kiger" && (
          <meta
            name="description"
            content="Renault Kiger on road price in Hyderabad. Arka Renault offers best deals on Kiger. Visit us today to know more offers on Kiger. Renault Kiger most selling SUV. Reanult Kiger test drive today."
          />
        )}
        {car?.name === "Renault Triber" && (
          <meta
            name="description"
            content="Renault Triber on road price in Hyderabad. Arka Renault offers best deals on Triber. Visit us today to know more offers on Triber. Renault Triber most selling MUV. Reanult Triber test drive today."
          />
        )}
      </Helmet>
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
          <a
            href={car?.pdf}
            target={"_blank"}
            rel="noreferrer"
            className="px-4 py-2.5 bg-secondary text-black font-semibold"
          >
            download brochure
          </a>
          <Link
            to={"/renault-car-test-drive"}
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
      {activeTab === 1 && <Safety car={car} />}
      {activeTab === 2 && <Featured car={car} />}
      {activeTab === 3 && <Design car={car} />}
      {activeTab === 4 && <Engine car={car} />}
      {activeTab === 5 && <Price car={car} />}
      {activeTab === 6 && <Specification car={car} />}

      <Footer />
    </Suspense>
  );
}

export default Detail;
