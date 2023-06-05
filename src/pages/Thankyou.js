import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { TiTick } from "react-icons/ti";

function Thankyou() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center py-64">
        <TiTick className="text-9xl text-green-500" />
        <div className="text-center">
          <h1 className="text-3xl font-bold">Thank you for your interest!</h1>
          <p className="text-lg">
            We will get back to you as soon as possible.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Thankyou;
