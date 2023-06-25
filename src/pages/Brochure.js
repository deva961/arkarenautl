import React, { lazy } from "react";
const Header = lazy(() => import("../components/Header/Header"));
const Footer = lazy(() => import("../components/Footer/Footer"));
const Car = lazy(() => import("../components/car/Car"));
function Brochure() {
  return (
    <>
      <Header />
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-3xl">
          Cars - Brochure
        </p>
      </div>
      <div className="max-w-5xl mx-auto mt-10 xl:mt-20 xl:mb-10">
        <Car btn_title={"download brochure"} url={`/listings`} pdf />
      </div>
      <Footer />
    </>
  );
}

export default Brochure;
