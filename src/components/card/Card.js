import { ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div key={item.id}>
      <img src={item?.img} className="mb-3" alt={item?.id} />
      <p
        className={`${
          item.group === "smart" ? "text-normal" : "text-lg"
        } font-bold tracking-normal uppercase`}
      >
        {item?.title}
      </p>
      {item?.desc && (
        <>
          <div className="h-px bg-black w-14 my-4"></div>
          <p className="text-xs font-normal mb-7 tracking-wide">{item?.desc}</p>
        </>
      )}
      {item?.group === "smart" && (
        <div>
          <Link
            to={item?.link}
            className="font-semiboldlowercase bg-black hover:text-black px-5 py-2 text-sm hover:bg-secondary duration-200  text-white"
          >
            {item?.btn_txt}
          </Link>
        </div>
      )}

      {item?.group === "latest" && (
        <div>
          <Link to={item?.link} className="font-semibold text-black">
            <div className="flex items-center justify-start">
              {item?.btn_txt}
              <ChevronRightIcon className="h-4 w-6 font-semibold text-secondary" />
            </div>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Card;
