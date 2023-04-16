import React from "react";
import { cars } from "../../constants";
import { Link } from "react-router-dom";

function Car() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 lg:px-0">
      {cars?.map((item) => (
        <div className="col-span-1 w-full" key={item.id}>
          <Link to={item.link}>
            <img src={item.img} className="mx-auto" loading="lazy" alt="" />
            <p className=" font-semibold text-sm uppercase">{item.name}</p>
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
