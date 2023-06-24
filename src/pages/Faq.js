import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Faq() {
  return (
    <>
      <Header />
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-3xl">
          Faq
        </p>
        <p className="text-center text-white text-xl mt-5">
          Your most frequently asked questions, answered.
        </p>
      </div>

      {/* tab section */}
      <div className="container mx-auto my-10">
        <div className="flex">
            <div className=" bg-red-500 h-96">
                deva
            </div>
            <div className="flex-grow bg-black h-96"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Faq;
