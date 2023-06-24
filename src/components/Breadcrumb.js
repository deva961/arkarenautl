import React from "react";
import { Link } from "react-router-dom";

function Breadcrumb({ title }) {
  return (
    <>
      <div className="bg-black w-full p-12 lg:p-20 text-center">
        <p className=" text-white my-auto uppercase font-semibold text-3xl">
          {title}
        </p>
      </div>
      <div className="shadow sm:px-0 px-4">
        <p className="mx-auto container py-4">
          <Link to="/">Home</Link> / {title}
        </p>
      </div>
    </>
  );
}

export default Breadcrumb;
