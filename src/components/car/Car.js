import React from "react";
import { Link } from "react-router-dom";
import { carSpecs } from "../../constants/specs";

function Car() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 lg:px-0">
      {carSpecs?.map((item) => (
        <div className="col-span-1 w-full" key={item.id}>
          <Link to={`/listings/${item.id}`}>
            <img src={item.pic} className="mx-auto" loading="lazy" alt="" />
            <p className=" font-semibold text-sm uppercase">
              {item.name.split(" ")[1]}
            </p>
            <button className="text-xs lowercase font-medium border-b-2 border-secondary">
              Discover
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Car;
