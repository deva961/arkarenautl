import React, { useState } from "react";
import "../../assets/css/form.css";
import {
  ArrowRightIcon,
  EnvelopeIcon,
  MapPinIcon,
  PhoneArrowUpRightIcon,
} from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

function Form({ veh }) {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [model, setModel] = useState();
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataCollectionRef = collection(db, "leads");
    setLoading(true);
    if (firstName && phone && model) {
      try {
        await addDoc(dataCollectionRef, {
          firstName,
          lastName,
          email,
          phone,
          model,
          timestamp: serverTimestamp(),
        });
        navigate("/thank-you");
      } catch (error) {
        toast.error("something went wrong");
      }
    } else {
      toast.error("Please fill all the fields");
    }
    setLoading(false);
  };
  return (
    <>
      <div className="flex lg:flex-row flex-col-reverse">
        <div className={`${veh ? "w-full" : "flex-grow lg:my-16 lg:ml-32 m-5"}`}>
          <p className="font-semibold text-lg mb-10 lg:mb-14">
            Enter your contact details
          </p>
          <form
            onSubmit={handleSubmit}
            className={`${
              veh
                ? "flex flex-row justify-between items-center space-x-4"
                : "space-y-10"
            }`}
          >
            <div className="flex flex-col relative">
              <input
                type="text"
                id="fname"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder=" "
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              />
              <label
                htmlFor="fname"
                className="label absolute flex items-center h-full transition duration-300"
              >
                First Name <span className="text-red-600">*</span>
              </label>
            </div>

            <div className={`${veh ? "hidden" : "flex flex-col relative"}`}>
              <input
                type="text"
                id="lname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder=" "
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              />
              <label
                htmlFor="lname"
                className="label absolute flex items-center h-full transition duration-300"
              >
                Last Name
              </label>
            </div>

            <div className="flex flex-col relative">
              <input
                type="text"
                id="email"
                placeholder=" "
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              />
              <label
                htmlFor="email"
                className="label absolute flex items-center h-full transition duration-300"
              >
                Email
              </label>
            </div>

            <div className="flex flex-col relative">
              <input
                type="text"
                id="phone"
                placeholder=" "
                value={phone}
                minLength={10}
                maxLength={10}
                onChange={(e) => setPhone(e.target.value)}
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              />
              <label
                htmlFor="phone"
                className="label absolute flex items-center h-full transition duration-300"
              >
                Mobile <span className="text-red-600">*</span>
              </label>
            </div>

            <div className="flex flex-col relative">
              <select
                onChange={(e) => setModel(e.target.value)}
                id="vehicle"
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              >
                <option disabled={false}>Select Vehicle</option>
                <option value="1">Kwid</option>
                <option value="2">Triber</option>
                <option value="3">Kiger</option>
              </select>
              <label
                htmlFor="vehicle"
                className="label absolute flex items-center h-full transition duration-300"
              ></label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="flex mx-auto bg-black outline-none focus:outline-none hover:bg-secondary hover:text-black font-semibold text-white px-5 py-2.5 rounded"
            >
              {loading ? (
                <div className="flex items-center justify-center font-normal">
                  <CgSpinner className="animate-spin h-5 mr-2 text-white w-5" />
                  Loading...
                </div>
              ) : (
                <>
                  Submit
                  <ArrowRightIcon aria-hidden="true" className="h-5 w-5 ml-5" />
                </>
              )}
            </button>
          </form>
        </div>
        <div className={`${veh ? "hidden" : "flex-1"} bg-gray-100 p-5`}>
          <div className="bg-white p-5 w-full mb-10">
            <p className="font-semibold text-xl">Arka Renault</p>

            <div className="mt-5 space-y-2">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 " />
                <p className="font-semibold">Hyderabad</p>
              </div>
              <div className="flex items-center space-x-7 text-sm">
                <div className="flex items-center space-x-2 underline">
                  <PhoneArrowUpRightIcon className="h-4 w-4" />
                  <a href="tel:8297431431">7832888999</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 " />
                <a href="mailto:renaulthyderabadarka@gmail.com">
                  renaulthyderabadarka@gmail.com
                </a>
              </div>
            </div>

            <div className="bg-gray-300 h-px my-5 opacity-50"></div>

            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <MapPinIcon className="h-5 w-5 " />
                <p className="font-semibold">Khammam</p>
              </div>
              <div className="flex items-center space-x-7 text-sm">
                <div className="flex items-center space-x-2 underline">
                  <PhoneArrowUpRightIcon className="h-4 w-4" />
                  <a href="tel:7832888999">7832888999</a>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 " />
                <a href="mailto:renaulthyderabadarka@gmail.com">renaulthyderabadarka@gmail.com</a>
              </div>
            </div>
          </div>
          {model === "1" && (
            <>
              <img
                src={require("../../assets/images/kwid/23.webp")}
                className="w-full object-cover rounded"
                loading="lazy"
                alt=""
              />
              <p className="font-semibold text-center">Kwid</p>
            </>
          )}
          {model === "2" && (
            <>
              <img
                src={require("../../assets/images/triber/13.webp")}
                className="w-full object-cover rounded"
                loading="lazy"
                alt=""
              />
              <p className="font-semibold text-center">Triber</p>
            </>
          )}

          {model === "3" && (
            <>
              <img
                src={require("../../assets/images/kiger/1.webp")}
                className="w-full object-cover rounded"
                loading="lazy"
                alt=""
              />
              <p className="font-semibold text-center">Kiger</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Form;