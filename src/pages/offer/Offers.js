import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import { carSpecs } from "../../constants/specs";

function Offers() {
  const { pathname } = useLocation();
  const [car, setCar] = useState();
  const uid = pathname.split("/")[2];
  const aid = uid.split("-")[0];
  const bid = uid.split("-")[1];
  const id = `${aid}-${bid}`;
  const d = new Date().getMonth();
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  useEffect(() => {
    document.title = `${car?.name} On Road Price in Hyderabad | ${
      car?.name.split(" ")[1]
    } Offers Hyderabad`;
    carSpecs?.forEach((item) => item.id === id && setCar(item));
  }, [id, car]);

  return (
    <>
      <Header />
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-xl lg:text-3xl">
          {car?.name} - {monthNames[d]} offers
        </p>
      </div>
      <div className="max-w-6xl mx-auto my-10 space-y-10">
        {car?.offers?.map((item) => (
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
            key={item.name}
          >
            <div className="col-span-1">
              <img
                src={item.img}
                className="h-full w-full object-cover"
                alt=""
              />
            </div>
            <div className="col-span-1 px-5">
              <p className="font-semibold text-base uppercase">{item.name}</p>
              <p className="font-semibold text-2xl">
                Price starts at ₹ {item.price} lakh*
              </p>

              <div className="my-3 text-sm ">
                {item.year_benefits.map((i) => (
                  <div className="mt-5">
                    <p className="font-semibold">VIN {i.year}:</p>
                    <ul className=" list-disc px-5 ">
                      <li>{i.benefits[0]}</li>
                      <li>{i.benefits[1]}</li>
                    </ul>
                  </div>
                ))}
                <p className="font-semibold my-3">
                  EMI starting at ₹ {item.emi}*{" "}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Offers;
