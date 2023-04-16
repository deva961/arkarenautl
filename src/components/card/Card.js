import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  console.log(item.group);
  return (
    <div key={item.id}>
      <img src={item?.img} className="mb-3" alt={item?.id} />
      <p
        className={`${
          item.group === "smart" ? "text-normal" : "text-xl"
        } font-bold tracking-normal`}
      >
        {item?.title}
      </p>
      {item?.desc && (
        <>
          <div className="h-px bg-black w-14 my-4"></div>
          <p className="text-xs font-normal mb-7 tracking-wide">{item?.desc}</p>
        </>
      )}
      <div>
        <Link
          to={item?.link}
          className={`${
            item.group === "smart"
              ? "bg-black hover:bg-secondary duration-200 hover:text-black px-5 py-2 text-sm text-white  lowercase"
              : ""
          } font-semibold text-black`}
        >
          {item?.btn_txt}
        </Link>
      </div>
    </div>
  );
}

export default Card;
