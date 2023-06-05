import React, { useState, Fragment } from "react";
import { Transition, Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import toast from 'react-hot-toast'
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../firebase";

function Popup({ open, setOpen }) {
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async(e) => {
    e.preventDefault();
    const dataCollectionRef = collection(db, "leads");
    setLoading(true);
    try {
      await addDoc(dataCollectionRef, {
        phone,
        timestamp: serverTimestamp()
      })
    } catch (error) {
      toast.error('something went wrong')
    }
    setOpen(false)
    setLoading(false);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        onClose={setOpen}
      >
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="text-left">
                  <button
                    className="outline-none absolute right-2 top-2"
                    onClick={() => setOpen(false)}
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </button>
                  <div className="mt-2 space-y-3">
                    <form onSubmit={handleSubmit}>
                      <img
                        src={require("../../assets/images/logo.png")}
                        alt="logo"
                        className="mx-auto h-16"
                      />
                      <div className="space-y-3 my-7">
                        <input
                          className="border h-10 outline-none px-3 rounded-md w-full"
                          type="text"
                          id="Phone"
                          name="Phone"
                          minLength="10"
                          maxLength="10"
                          value={phone}
                          autoComplete="off"
                          onChange={(e) =>
                            setPhone(
                              e.target.value.replace(/[^1-9 ]/g, "") &&
                                e.target.value.replace(/ /g, "")
                            )
                          }
                          required
                          placeholder="Mobile"
                        />
                      </div>

                      <div className="flex items-center space-x-2 mb-5">
                        <input
                          id="comments"
                          name="comments"
                          type="checkbox"
                          className=" h-4 w-4 border-gray-300 rounded"
                          required
                        />
                        <label
                          htmlFor="comments"
                          className="text-gray-700 text-sm"
                        >
                          I agree to the Privacy Policy and Terms of Service .
                        </label>
                      </div>

                      <button
                        type="submit"
                        className="w-full rounded-md border shadow-sm py-2 mb-3 bg-black font-medium text-white hover:bg-secondary text-sm"
                      >
                        SUBMIT
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Popup;
