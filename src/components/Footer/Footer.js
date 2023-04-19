import React from "react";
import TestDriveSvg from "../../assets/images/svg/test_drive.svg";
import InterestSvg from "../../assets/images/svg/interest.svg";
import BrochureSvg from "../../assets/images/svg/brochure.svg";
import DealerSvg from "../../assets/images/svg/dealer.svg";

function Footer() {
  return (
    <>
      <div className="bg-black text-white py-10 px-5 md:px-0">
        <div className="max-w-container mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            <div className="flex items-center justify-center flex-col">
              <img src={InterestSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">
                register your interest
              </p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <img src={TestDriveSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">book a test drive</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <img src={DealerSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">find a dealer</p>
            </div>

            <div className="flex items-center justify-center flex-col">
              <img src={BrochureSvg} className="h-10 w-10" alt="" />
              <p className="font-semibold text-sm mt-2">downlaod brochure</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
