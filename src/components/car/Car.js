import React from "react";
import { Link } from "react-router-dom";
import { carSpecs } from "../../constants/specs";

function Car({btn_title, url}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-7 lg:px-0">
      {carSpecs?.map((item,index) => (
        <div className="col-span-1 w-full" key={index}>
          <Link to={`${url}/${item.id}`}>
            <img src={item.pic} className="mx-auto" loading="lazy" alt="" />
            <p className=" font-semibold text-sm uppercase">
              {item.name.split(" ")[1]}
            </p>  
            <button className="text-xs lowercase font-medium border-b-2 border-secondary">
              {btn_title}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Car;
