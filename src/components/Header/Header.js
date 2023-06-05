import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import InterestSvg from "../../assets/images/svg/interest.svg";
import { Bars3CenterLeftIcon } from "@heroicons/react/24/outline";
import { HiChevronRight } from "react-icons/hi";
import MobileHeader from "./MobileHeader";
import { Link } from "react-router-dom";
import Car from "../car/Car";
import { carSpecs } from "../../constants/specs";
const navigation = {
  categories: [
    {
      name: "Vehicles",
    },
  ],
  pages: [
    { name: "About Us", href: "#" },
    { name: "Finance", href: "#" },
    { name: "Offers", href: "/car-offers" },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function Header() {
  const [open, setOpen] = useState(false);
  const [veh, setVeh] = useState(false);
  const [car, setCar] = useState(true);
  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <MobileHeader
        open={open}
        setOpen={setOpen}
        veh={veh}
        setVeh={setVeh}
        car={car}
        setCar={setCar}
      />

      <header className="relative bg-black">
        <nav aria-label="Top" className="mx-10 px-4 py-5 sm:px-6 lg:px-8">
          <>
            <div className="flex h-16 items-center">
              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <Link to={"/"}>
                  <span className="sr-only">Arka Renault</span>
                  <img
                    className="h-8 w-auto"
                    src={require("../../assets/images/logo.png")}
                    loading="lazy"
                    alt="logo"
                  />
                </Link>
              </div>

              {/* Flyout menus */}
              <Popover.Group className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open }) => (
                        <>
                          <div className="relative flex">
                            <Popover.Button
                              className={classNames(
                                open
                                  ? "border-secondary text-secondary"
                                  : "border-transparent text-gray-300 hover:text-gray-100",
                                "relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out focus:outline-none outline-none"
                              )}
                            >
                              {category.name}
                            </Popover.Button>
                          </div>

                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0"
                            enterTo="opacity-100"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100"
                            leaveTo="opacity-0"
                          >
                            <Popover.Panel className="absolute inset-x-0 top-full text-sm z-50">
                              <div
                                className="absolute inset-0 top-1/2 bg-white shadow"
                                aria-hidden="true"
                              />

                              <div className="relative bg-white p-10">
                                <div className="flex items-center justify-start">
                                  <div className="flex-2 space-y-3">
                                    <div className="flex flex-col">
                                      <div className="flex items-center">
                                        <HiChevronRight className="w-5 h-5" />
                                        <Link to={"/"} className="font-semibold">Book a test drive</Link>
                                      </div>
                                    </div>
                                    <div className="flex items-center">
                                      <HiChevronRight className="w-5 h-5" />
                                      <Link to={"/"} className="font-semibold">Register a complaint</Link>
                                    </div>
                                    <div className="flex items-center">
                                      <HiChevronRight className="w-5 h-5" />
                                      <Link to={"/"} className="font-semibold">Faq</Link>
                                    </div>
                                  </div>
                                  <div className="flex-grow flex space-x-5 ml-12">
                                    <div className="h-48 bg-gray-100 w-px"></div>
                                    <div className="flex items-center space-x-5 px-7 lg:px-0">
                                      {carSpecs?.map((item) => (
                                        <Link
                                          to={`/listings/${item.id}`}
                                          key={item.id}
                                        >
                                          <img
                                            src={item.pic}
                                            className="h-44"
                                            loading="lazy"
                                            alt=""
                                          />
                                          <p className="text-sm uppercase ml-12">
                                            {item.name.split(" ")[1]}
                                          </p>
                                        </Link>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </Popover.Panel>
                          </Transition>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-300 hover:text-gray-200"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </Popover.Group>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:ml-8 lg:flex">
                  <Link
                    to={"/"}
                    className="flex items-center flex-col text-gray-100"
                  >
                    <img src={InterestSvg} alt="" />
                    <p className="text-xs">contact us</p>
                  </Link>
                </div>

                <button
                  type="button"
                  className="rounded-md focus:outline-none outline-none p-2 text-gray-400 lg:hidden"
                  onClick={() => setOpen(true)}
                >
                  <span className="sr-only">Open menu</span>
                  <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
            </div>
          </>
        </nav>
      </header>
    </div>
  );
}

export default Header;
