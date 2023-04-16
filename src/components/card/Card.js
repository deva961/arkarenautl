import React from "react";
import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div key={item.id}>
      <img src={item?.img} className="mb-3" alt={item?.id} />
      <p className="font-semibold tracking-normal">{item?.title}</p>
      <div className="h-px bg-black w-14 my-4"></div>
      <p className="text-xs font-normal mb-7 tracking-wide">{item?.desc}</p>
      <div>
        <Link
          to={item?.link}
          className="bg-black hover:bg-secondary duration-200 hover:text-black px-5 py-2 text-sm text-white font-semibold lowercase"
        >
          {item?.btn_txt}
        </Link>
      </div>
    </div>
  );
}

export default Card;
