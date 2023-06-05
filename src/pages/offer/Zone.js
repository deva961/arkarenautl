import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { carSpecs } from "../../constants/specs";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

function Zone() {
  return (
    <>
      <Header />
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-3xl">
          Offer zone
        </p>
      </div>
      <div className="max-w-6xl mx-auto my-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 lg:px-0">
          {carSpecs?.map((item) => (
            <div className="col-span-1 w-full" key={item.id}>
              <Link to={`/offers/${item.id}-offers`}>
                <img
                  src={item.pic}
                  className="mx-auto "
                  loading="lazy"
                  alt=""
                />
                <p className=" font-semibold text-sm lg:text-xl uppercase">
                  {item.name}
                </p>
                <div className="flex items-center justify-start text-sm font-semibold lowercase my-2">
                  <p>View Offers</p>
                  <ChevronRightIcon
                    aria-hidden="true"
                    className="h-4 w-4 text-secondary"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-center space-x-5 mb-10">
        <Link className="bg-black font-semibold text-white px-5 py-2 hover:bg-secondary transition hover:text-black">
          book a test drive
        </Link>
      </div>
      <Footer />
    </>
  );
}

export default Zone;
