import React, { useState } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Breadcrumb from "../../components/Breadcrumb";
import "../../assets/css/form.css";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import { toast } from "react-hot-toast";
import { db } from "../../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { CgSpinner } from "react-icons/cg";

function Complaint() {
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dep, setDep] = useState("");
  const [desc, setDesc] = useState("");
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const dataCollectionRef = collection(db, "complaints");
    setLoading(true);
    if (firstName && phone) {
      try {
        await addDoc(dataCollectionRef, {
          firstName,
          lastName,
          email,
          phone,
          dep,
          desc,
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
      <Header />
      <Breadcrumb title={"Register a complaint"} />
      <div className="container mx-auto">
        <div className="m-5">
          <p className="font-semibold text-lg mb-10 lg:mb-20">
            Enter your contact details
          </p>
          <form onSubmit={handleSubmit} className="space-y-10">
            <div className="flex flex-col relative">
              <input
                type="text"
                id="fname"
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

            <div className="flex flex-col relative">
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
                onChange={(e) => setDep(e.target.value)}
                id="complaint"
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              >
                <option disabled={false}>Select Department</option>
                <option value="1">Sales</option>
                <option value="2">Service</option>
                <option value="3">Management</option>
              </select>
              <label
                htmlFor="complaint"
                className="label absolute flex items-center h-full transition duration-300"
              ></label>
            </div>

            <div className="flex flex-col relative">
              <textarea
                type="text"
                id="desc"
                placeholder=" "
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                maxLength={250}
                className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
              ></textarea>
              <label
                htmlFor="desc"
                className="label absolute flex items-center h-full transition duration-300"
              >
                Description
              </label>
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
      </div>
      <Footer />
    </>
  );
}

export default Complaint;
