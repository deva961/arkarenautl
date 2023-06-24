import React, { Suspense, lazy } from "react";
import { sliders, smartways } from "../constants";
import { Link } from "react-router-dom";
import Car from "../components/car/Car";
import Footer from "../components/Footer/Footer";
import Loading from "../components/loading/Loading";
const Header = lazy(() => import("../components/Header/Header"));
const Slider = lazy(() => import("../components/slider/Slider"));
const Section = lazy(() => import("../components/section/Section"));
function Home() {
  return (
    <Suspense fallback={<Loading />}>
      <Header />
      <Slider sliders={sliders} />
      <LookingFor />
      <Drive />
      <div className="space-y-10 lg:space-y-2 mt-10 lg:mt-2">
        <Section
          heading={"THE SMARTER WAY TO EXPLORE RENAULT"}
          data={smartways}
        />

        {/* <LatestSection heading={"LATEST AT RENAULT"} data={latest_news} /> */}
      </div>
      <Footer />
    </Suspense>
  );
}

const LookingFor = () => {
  return (
    <>
      <p className="text-center uppercase font-bold text-gray-800 text-lg lg:text-2xl mt-3 xl:mt-14">
        WHAT ARE YOU LOOKING FOR?
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 max-w-4xl mx-auto my-6 xl:my-9 lg:px-0 px-5">
        <div className="col-span-1 border border-px py-3">
          <Link
            to={"/renault-car-test-drive"}
            className="flex items-center justify-center space-x-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              height={50}
            >
              <path
                fillRule="evenodd"
                d="M16.71 22.231c2.94-.66 4.561-2.1 5.43-4.86h-2.429a5.739 5.739 0 0 1-3 2.34v2.52zm-5.82-7.02c0 1.86 1.95 3.57 4.11 3.57s4.111-1.68 4.111-3.57c0-1.74-1.53-2.82-4.11-2.82-2.55 0-4.11 1.11-4.11 2.82zm2.4 7.05v-2.55a5.736 5.736 0 0 1-3-2.34H7.83c.87 2.76 2.49 4.23 5.46 4.89zm6.781-8.49h2.37c-.57-4.35-3.39-6.33-7.44-6.33-4.08 0-6.84 2.01-7.41 6.36H9.9c.66-1.62 2.46-2.61 5.1-2.61 2.61 0 4.44.96 5.07 2.58zm-4.53 9.78v-3.6c-.18.03-.36.03-.54.03-.18 0-.36 0-.54-.03v3.6c-4.59-.21-7.651-3.03-8.01-7.35h3.33c-.06-.33-.12-.66-.12-.99v-.27H6.39c0-5.31 3.36-8.7 8.61-8.7s8.611 3.39 8.611 8.7h-3.27v.27c0 .33-.03.66-.12.99h3.33c-.36 4.32-3.42 7.14-8.01 7.35zm-.54 1.41c6.09 0 10.02-3.9 10.02-9.99 0-6.12-3.87-9.991-10.02-9.991-6.12 0-10.021 3.9-10.021 9.99 0 6.061 3.93 9.991 10.02 9.991zm0 1.23c-6.84 0-11.25-4.44-11.25-11.22C3.75 8.16 8.13 3.75 15 3.75s11.251 4.38 11.251 11.22c0 6.81-4.41 11.22-11.251 11.22z"
              ></path>
            </svg>
            <p className="text-xs font-bold">Test Drive</p>
          </Link>
        </div>

        <div className="col-span-1 border border-px py-3">
          <Link
            to={"/renault-car-booking-online"}
            className="flex items-center justify-center space-x-3"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              height={50}
            >
              <path
                fillRule="evenodd"
                d="M20.396 13.006c0-.48-.36-.9-.9-.9-.48 0-.84.42-.84.9 0 .51.36.9.84.9.54 0 .9-.39.9-.9zm-9.99 0c0-.48-.361-.9-.9-.9-.48 0-.841.42-.841.9 0 .51.36.9.84.9.54 0 .9-.39.9-.9zm-2.76-.63c.269-.81 1.019-1.38 1.86-1.38a2 2 0 0 1 1.89 1.38h6.24c.27-.81 1.02-1.38 1.86-1.38a2 2 0 0 1 1.89 1.38h.48c.66 0 .81-.12.81-.63 0-.42-.27-1.26-.45-1.53s-.42-.48-.93-.6l-2.1-.54c-.78-.21-1.8-1.17-3.09-1.68-.99-.39-1.89-.54-3.93-.54-1.08 0-2.4.12-3.57.27l-1.14-.69-.03-.3c.03 0 2.94-.51 4.92-.51 2.01 0 3.15.21 4.26.63 1.41.54 2.25 1.47 2.85 1.65l2.04.57c.93.27 1.5.66 1.77 1.11.42.72.63 1.89.63 2.37 0 1.08-.93 1.65-2.16 1.65h-.36c-.24.96-1.08 1.44-1.89 1.44-.75 0-1.62-.48-1.86-1.44h-6.24c-.24.96-1.08 1.44-1.89 1.44-.75 0-1.621-.51-1.89-1.47h-.061c-1.17 0-2.4-.72-2.4-2.25v-1.5c0-.63.18-1.2 1.41-2.43l1.05.57c-1.08 1.17-1.29 1.41-1.29 2.01v1.23c0 .75.36 1.17 1.23 1.17h.09zm-1.261 11.61-1.26.93-.75-.93 1.26-.93c1.47-1.08 2.55-1.5 4.08-1.5 2.13 0 4.11.99 7.23 1.05l7.442-5.1c.3-.21.42-.39.42-.6 0-.39-.3-.69-.69-.69-.21 0-.33.06-.57.21l-3.33 2.22c-.27.69-.93 1.17-1.8 1.17h-4.352v-1.2h4.351c.51 0 .69-.21.69-.66 0-.45-.18-.66-.69-.66h-8.01c-2.04 0-2.881.27-4.291 1.38l-.99.78-.72-.96.99-.78c1.65-1.29 2.85-1.62 5.04-1.62h7.981c.81 0 1.47.45 1.77 1.11l2.85-1.89c.36-.24.63-.33 1.02-.33 1.26 0 1.95.99 1.95 1.95 0 .6-.33 1.11-1.2 1.71l-7.5 5.19c-3.24 0-5.31-1.08-7.53-1.08-1.38 0-2.13.3-3.391 1.23z"
              ></path>
            </svg>
            <p className="text-xs font-bold">Book a Car</p>
          </Link>
        </div>

        <div className="col-span-1 border border-px py-3">
          <Link to={"/"} className="flex items-center justify-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              height={50}
            >
              <path
                fillRule="evenodd"
                d="M22.82 24.427c0-.66-.39-1.71-1.261-3.6-.87 1.8-1.26 2.91-1.26 3.6 0 .9.6 1.29 1.26 1.29s1.26-.36 1.26-1.29zm-3.751.09c0-.96.72-2.88 1.95-5.13h1.08c1.2 2.34 1.95 4.2 1.95 5.13 0 1.32-1.17 2.37-2.49 2.37-1.35 0-2.49-1.05-2.49-2.37zm-5.52-13.681c-.75 0-1.17.42-1.17 1.2 0 .75.42 1.14 1.17 1.14.78 0 1.17-.39 1.17-1.14 0-.78-.39-1.2-1.17-1.2zm0 3.54c-1.29 0-2.37-1.05-2.37-2.34 0-1.05.69-1.92 1.65-2.22V3.125h1.23v6.63c1.08.21 1.86 1.14 1.86 2.28a2.35 2.35 0 0 1-2.37 2.341zm1.74-8.13 2.49-.99 4.26 11.28-.93.63h-4.02l-3.66 1.38c-3.3 1.32-5.19.39-6.481-3.18l-.15-.39c-1.26-3.3-.36-5.28 2.82-6.6l1.95-.81v1.32l-1.53.63c-2.49 1.02-3.03 2.34-2.1 5.07l.15.42c.93 2.73 2.4 3.45 4.98 2.4l3.63-1.41h3.9l-3.48-9.18-1.83.72v-1.29z"
              ></path>
            </svg>
            <p className="text-xs font-bold">Download Brochure</p>
          </Link>
        </div>

        <div className="col-span-1 border border-px py-3 flex items-center justify-center w-full">
          <Link to={"/"} className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 30 30"
              height={30}
            >
              <path d="M21.049 11.283H6.05c0 2.226-.798 2.982-3.027 2.982v4.494c2.228 0 3.027.714 3.027 2.94h14.999c0-2.226.8-2.94 3.027-2.94v-4.494c-2.227 0-3.027-.756-3.027-2.982zm1.514 5.964c-1.64.252-2.775 1.428-2.983 3.024H7.479c-.21-1.596-1.345-2.688-2.983-2.94v-1.638c1.639-.252 2.773-1.386 2.983-2.982H19.58c.209 1.596 1.343 2.814 2.983 3.066v1.47z"></path>
              <path d="M13.487 14.097c-1.471 0-2.563 1.134-2.563 2.52s1.092 2.52 2.563 2.52c1.472 0 2.562-1.134 2.562-2.52s-1.09-2.52-2.562-2.52zm0 3.654c-.714 0-1.134-.462-1.134-1.134s.42-1.134 1.134-1.134 1.134.462 1.134 1.134c0 .672-.419 1.134-1.134 1.134zM2.941 5.277v1.428h25.588v15.078H30V5.277z"></path>
              <path d="M0 24.723h26.976V8.259H0v16.464zM1.471 9.687h24.034v13.608H1.471V9.687z"></path>
              <path d="M21.049 11.283H6.05c0 2.226-.798 2.982-3.027 2.982v4.494c2.228 0 3.027.714 3.027 2.94h14.999c0-2.226.8-2.94 3.027-2.94v-4.494c-2.227 0-3.027-.756-3.027-2.982zm1.514 5.964c-1.64.252-2.775 1.428-2.983 3.024H7.479c-.21-1.596-1.345-2.688-2.983-2.94v-1.638c1.639-.252 2.773-1.386 2.983-2.982H19.58c.209 1.596 1.343 2.814 2.983 3.066v1.47z"></path>
              <path d="M13.487 14.097c-1.471 0-2.563 1.134-2.563 2.52s1.092 2.52 2.563 2.52c1.472 0 2.562-1.134 2.562-2.52s-1.09-2.52-2.562-2.52zm0 3.654c-.714 0-1.134-.462-1.134-1.134s.42-1.134 1.134-1.134 1.134.462 1.134 1.134c0 .672-.419 1.134-1.134 1.134zM2.941 5.277v1.428h25.588v15.078H30V5.277z"></path>
              <path d="M0 24.723h26.976V8.259H0v16.464zM1.471 9.687h24.034v13.608H1.471V9.687z"></path>
            </svg>
            <p className="text-xs font-bold">Calculate EMI</p>
          </Link>
        </div>
      </div>
    </>
  );
};

const Drive = () => {
  return (
    <div className="max-w-5xl mx-auto mt-10 xl:mt-20">
      <p className="text-center uppercase text-gray-800 font-bold text-lg lg:text-2xl mb-3 xl:my-14">
        Drive the suv-inspired range
      </p>
      <Car btn_title={"Discover"} url={`/listings`} />
    </div>
  );
};

export default Home;
