import React from "react";

function VehicleCard({ item }) {
  return (
    <div key={item.id}>
      <img src={item?.img} className="mb-3" alt={item?.id} />
      <p className={` font-bold tracking-normal uppercase`}>{item?.title}</p>
      {item?.desc && (
        <>
          <div className="h-px bg-black w-14 my-4"></div>
          <p className="text-xs font-normal mb-7 tracking-wide">{item?.desc}</p>
        </>
      )}
    </div>
  );
}

export default VehicleCard;
