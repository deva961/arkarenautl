import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Legal() {
  return (
    <>
      <Header />
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-3xl">
          Privacy & Legal
        </p>
      </div>

      <div className="container mx-auto m-5">
        <h2 className="font-semibold text-center text-3xl">
          We value your Privacy
        </h2>
        <div className="my-10 text-sm space-y-2">
          <p>
            ARKA RENAULT collects information from our users at several
            different points on our website. Arka Renault is the sole owner of
            the information collected on this site. We will not sell or rent
            this information to others. We will only share this information with
            our affiliates and dealers, and marketing partners contracted to do
            business on our behalf (e.g. brochure fulfilment).
          </p>
          <p>
            Arka Renault uses two types of user information: anonymous
            information gathered from cookies and log files and personal
            information you provide us with for certain services. See below for
            definitions of each of these methods.
          </p>

          <h4 className="font-semibold">Public Notice</h4>
          <p>
            TO WHOMSOEVER IT MAY CONCERN <br />
            This is to inform the general public that new Renault brand vehicles
            are sold only through its authorised dealer network. E-commerce
            websites like Snapdeal.com, Flipkart.com, Amazon.in, OLX.com, etc.
            or any other person operating through these websites are not part of
            our authorised dealer network and they are not authorised to sell
            new Renault brand vehicles. New Renault brand vehicles sold through
            these websites do not carry any warranties from Renault. <br />
            We request the general public to check the warranty entitlements,
            when you purchase any Renault brand vehicle from such websites or
            persons operating through such websites. <br />
            Any such deals made by any person(s) through such websites shall
            purely be at their own risk.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Legal;
