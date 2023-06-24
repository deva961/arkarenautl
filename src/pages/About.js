import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { FaAngleRight } from "react-icons/fa";

function About() {
  return (
    <>
      <Header />
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-3xl">
          About Us
        </p>
      </div>
      {/* <div className="container mx-auto py-5">
        <div className="flex items-center">
          <p>Arka Renault</p>
          <FaAngleRight />
          <p>About Us</p>
        </div>
      </div> */}

      <div className="max-w-5xl mx-auto my-10">
        <h2 className="uppercase font-bold text-xl text-center xl:text-4xl">
          Welcome to <span className="text-secondary">Arka Renault</span>
        </h2>
        <div className="grid grid-cols-2 my-10 gap-10">
          <div className="col-span-1">
            <img
              src={require("../assets/images/about-1.png")}
              className="w-full object-fill rounded"
              loading="lazy"
              alt=""
            />
          </div>
          <div className="col-span-1 space-y-2 text-sm my-auto text-gray-700">
            <p>
              Arka Renault is one of the trustable Renault Dealers with a
              network of 15 showrooms and 5 service center’s spread across
              Telangana. Started in 2017, it has its initial showroom
              established at Khammam, followed by a Bharat Piaggio and Bharat
              Hyundai showroom with Ace Autos in Kothagudem and the latest
              showrooms in Hyderabad.
            </p>
            <p>
              Since 2017, we have delivered thousands of new Renault cars to
              happy customers across Telangana, which made us expand our
              coverage with a new branch. Every month, we deliver a new Renault
              to hundreds of customers that entirely rely on us. We are known
              for our qualitative service and extended customer satisfaction,
              which enables the customers to form personal relationships with
              us. We work fast in the procedure that starts with pre-sales
              advice to paperwork to swift delivery. Post the purchase, we cater
              to the customers with the utmost attention and enriched support.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 my-10 gap-10">
          <div className="col-span-1 space-y-2 text-sm my-auto text-gray-700">
            <h2 className="uppercase font-bold text-xl text-start xl:text-4xl">
              Why <span className="text-secondary">Arka Renault?</span>
            </h2>
            <p>
              The focus of Arka Renault is to provide the customers with a wide
              range of cars and services. As an organization, we aim to regale
              the customers and help them achieve their satisfaction. At Arka
              Renault, you will find us as the biggest testimony for success
              whenever you step out of the home. We assure you of the steadfast
              performance, the pre-eminent experience, and the fuel coherence.
            </p>
            <p>
              ​Our capacious showrooms are equipped with state of the art
              infrastructure and opulent display of world-class Renault cars and
              fully automated workshop for efficient service and maintenance. To
              deliver the promise of the best sales, our staff is extremely
              oriented to excel in the automobile industry.
            </p>
          </div>
          <div className="col-span-1">
            <img
              src={require("../assets/images/about-2.webp")}
              className="w-full object-fill rounded"
              loading="lazy"
              alt=""
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default About;
