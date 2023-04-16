import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  XMarkIcon,
  ChevronRightIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { cars } from "../../constants";

function MobileHeader({ open, setOpen, veh, setVeh, car, setCar }) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-40 lg:hidden" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="transition-opacity ease-linear duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-70" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-500"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-500"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                      <button
                        type="button"
                        className="rounded-md text-gray-100 hover:text-white focus:outline-none outline-none"
                        onClick={() => setOpen(false)}
                      >
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-7 w-7" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex h-full flex-col overflow-y-scroll bg-black pt-4 shadow-xl">
                    <div className="px-4 sm:px-6 border-b border-gray-50 border-px pb-4">
                      <Dialog.Title className="text-base font-semibold leading-6 text-gray-50">
                        Arka Renault
                      </Dialog.Title>
                    </div>
                    <div className="relative flex-1 mt-4 sm:px-6 text-gray-50">
                      {veh === false && (
                        <div className="px-4">
                          <div
                            onClick={(e) => setVeh(!veh)}
                            className="flex items-center justify-between focus:outline-none outline-none uppercase mb-6 text-sm font-semibold tracking-wide"
                          >
                            <p>Vehicles</p>
                            <p>
                              <ChevronRightIcon className="h-4 w-4" />
                            </p>
                          </div>

                          <Link
                            to={"/"}
                            className="flex items-center justify-between focus:outline-none outline-none uppercase mb-7 text-sm font-semibold tracking-wide"
                          >
                            <p>Finance</p>
                            <p>
                              <ChevronRightIcon className="h-4 w-4" />
                            </p>
                          </Link>

                          <Link
                            to={"/"}
                            className="flex items-center justify-between focus:outline-none outline-none uppercase mb-7 text-sm font-semibold tracking-wide"
                          >
                            <p>Offers</p>
                            <p>
                              <ChevronRightIcon className="h-4 w-4" />
                            </p>
                          </Link>

                          <Link
                            to={"/"}
                            className="flex items-center justify-between focus:outline-none outline-none uppercase mb-7 text-sm font-semibold tracking-wide"
                          >
                            <p>Contact us</p>
                            <p>
                              <ChevronRightIcon className="h-4 w-4" />
                            </p>
                          </Link>
                        </div>
                      )}

                      {veh === true && (
                        <>
                          <div className="flex flex-col h-full">
                            <button
                              onClick={(e) => setVeh(!veh)}
                              className="outline-none focus:outline-none flex space-x-4 flex-none items-center uppercase px-4 pb-4 text-sm font-semibold tracking-wide"
                            >
                              <p>
                                <ChevronRightIcon
                                  className="h-5 w-5 font-semibold rotate-180"
                                  aria-hidden="true"
                                />
                              </p>
                              <p>Vehicles</p>
                            </button>
                            <div className="bg-white grow w-full text-black">
                              <button
                                onClick={(e) => setCar(!car)}
                                className="flex items-center justify-between w-full px-4 py-4  text-sm tracking-wide mb-7 "
                              >
                                <p>Cars</p>
                                <p>
                                  <ChevronDownIcon
                                    className={`h-4 w-4 ${car && "rotate-180"}`}
                                  />
                                </p>
                              </button>
                              {car === true &&
                                cars?.map((item) => (
                                  <Link
                                    to={item.link}
                                    className="flex items-center w-full px-4 mb-1"
                                    key={item.id}
                                  >
                                    <img
                                      src={item.img}
                                      alt={item.id}
                                      className="h-24"
                                    />
                                    <p className=" font-light text-sm uppercase">
                                      {item.name}
                                    </p>
                                  </Link>
                                ))}

                              <div className="bg-gray-300 opacity-25 h-px w-full my-6"></div>

                              <Link
                                to={"/"}
                                className="flex items-center justify-start w-full px-4 mb-4 text-gray-600 text-xs font-semibold tracking-wide"
                              >
                                <p>
                                  <ChevronRightIcon
                                    className="h-3 w-3 mr-1"
                                    aria-hidden="true"
                                  />
                                </p>
                                <p>Register your interest</p>
                              </Link>

                              <Link
                                to={"/"}
                                className="flex items-center justify-start w-full px-4 mb-4 text-gray-600 text-xs font-semibold tracking-wide"
                              >
                                <p>
                                  <ChevronRightIcon
                                    className="h-3 w-3 mr-1"
                                    aria-hidden="true"
                                  />
                                </p>
                                <p>Book a test drive</p>
                              </Link>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default MobileHeader;
