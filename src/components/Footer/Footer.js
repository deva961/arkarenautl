import React from "react";
import TestDriveSvg from "../../assets/images/svg/test_drive.svg";
import InterestSvg from "../../assets/images/svg/interest.svg";
import BrochureSvg from "../../assets/images/svg/brochure.svg";
import DealerSvg from "../../assets/images/svg/dealer.svg";
import { Link } from "react-router-dom";
import { BsFacebook, BsTwitter, BsYoutube, BsLinkedin } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import {
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";

function Footer() {
  return (
    <>
      <div className="bg-black text-white py-10 px-5 md:px-0">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <Link
              to={"/renault-car-booking-online"}
              className="flex items-center justify-center flex-col"
            >
              <img src={InterestSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">
                register your interest
              </p>
            </Link>

            <Link
              to={"/renault-car-test-drive"}
              className="flex items-center justify-center flex-col"
            >
              <img src={TestDriveSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">book a test drive</p>
            </Link>

            <Link
              to={"/finance"}
              className="flex items-center justify-center flex-col"
            >
              <img src={DealerSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">finance</p>
            </Link>

            <Link
              to={"/renault-cars-hyderabad"}
              className="flex items-center justify-center flex-col"
            >
              <img src={BrochureSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">downlaod brochure</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 px-5 lg:px-0 py-7">
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <img
              src={require("../../assets/images/logo.png")}
              loading="lazy"
              className="h-12 w-auto"
              alt=""
            />
            <div className="flex items-center space-x-7 mt-5 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-5 w-5 " />
                  <p className="font-medium">Hyderabad / Khammam</p>
                </div>
                <div className="flex items-center space-x-7 text-xs">
                  <div className="flex items-center space-x-2 underline">
                    <PhoneArrowUpRightIcon className="h-4 w-4" />
                    <a href="tel:7832888999">7832888999</a>
                  </div>
                </div>
                <div className="sm:flex hidden  items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5" />
                  <a href="mailto:renaulthyderabadarka@gmail.com">
                    renaulthyderabadarka@gmail.com
                  </a>
                </div>
              </div>
              {/* <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <MapPinIcon className="h-5 w-5 " />
                  <p className="font-medium">Khammam</p>
                </div>
                <div className="flex items-center space-x-7 text-xs">
                  <div className="flex items-center space-x-2 underline">
                    <PhoneArrowUpRightIcon className="h-4 w-4" />
                    <a href="tel:7832888999">7832888999</a>
                  </div>
                </div>
                <div className="hidden sm:flex items-center space-x-2">
                  <EnvelopeIcon className="h-5 w-5 " />
                  <a href="mailto:renaultkmm@gmail.com">renaultkmm@gmail.com</a>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-semibold mb-5">Vehicles</p>
            <div className="flex text-sm space-y-2 flex-col">
              <Link to={"/listings/renault-kwid"}>Renault Kwid</Link>
              <Link to={"/listings/renault-triber"}>Renault Triber</Link>
              <Link to={"/listings/renault-kiger"}>Renault Kiger</Link>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-semibold mb-5">Customer Service</p>
            <div className="flex text-sm space-y-2 flex-col">
              <Link to={"/contact"}>Contact Us</Link>
              <Link to={"/renault-car-test-drive"}>Book a test drive</Link>
              <Link to={"/finance"}>Finance</Link>
              <Link to={"/register-a-complaint"}>Register a complaint</Link>
              <Link to={"/renault-car-service-near-me"}>Book a service</Link>
            </div>
          </div>
          <div className="col-span-1">
            <p className="text-sm font-semibold mb-5">Social</p>
            <div className="flex items-center justify-start space-x-5">
              <Link to={"/https://www.facebook.com/ArkaRenaultTs/"}>
                <BsFacebook className="text-blue-500 h-6 w-6" />
              </Link>
              <Link to={"/https://twitter.com/arka_renault"}>
                <BsTwitter className="text-cyan-500 h-6 w-6" />
              </Link>
              <Link to={"/https://www.instagram.com/arkarenault/"}>
                <FiInstagram className="text-rose-500 h-6 w-6" />
              </Link>
              <Link to={"/https://youtube.com/@arkarenault3883"}>
                <BsYoutube className="text-red-600 h-6 w-6" />
              </Link>
              <Link to={"/https://www.linkedin.com/company/arkarenault"}>
                <BsLinkedin className="text-sky-600 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 text-sm">
        <div className="container mx-auto">
          <div className="flex md:flex-row flex-col items-center justify-between p-3">
            <div className="flex items-center space-x-3">
              <Link to={"/privacy-and-legal"}>privacy & legal</Link>
              <div className="h-5 w-px bg-gray-400"></div>
              <Link to={"/privacy-and-legal"}>terms & conditions</Link>
            </div>

            <p>
              All rights reserved by{" "}
              <span className="font-semibold">Arka Renault</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
