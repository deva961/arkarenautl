import React from "react";

function GridDesign({ pics }) {
  return (
    <div className="hidden lg:grid grid-cols-3 gap-3 mt-4 mb-96 max-w-5xl mx-auto">
      <div className="col-span-1">
        <img
          src={pics[0]}
          className="h-80 w-full object-cover object-center"
          alt=""
        />
      </div>
      <div className="col-span-1 relative">
        <img
          src={pics[1]}
          className="w-full object-contain absolute bottom-0"
          alt=""
        />
      </div>
      <div className="col-span-1 relative">
        <img
          src={[pics[2]]}
          className="absolute -bottom-16 h-64 object-cover object-center"
          alt=""
        />
      </div>
      <div className="col-span-2 relative">
        <img
          src={pics[3]}
          className="absolute right-0 -bottom-25 h-80  object-cover object-center"
          alt=""
        />
      </div>
      {pics[4] && (
        <div className="col-span-1 relative">
          <img
            src={pics[4]}
            className="absolute right-0 top-14 h-64  object-cover object-center"
            alt=""
          />
        </div>
      )}
    </div>
  );
}

export default GridDesign;
