import React from "react";
import Card from "../card/Card";
import { smartways } from "../../constants";

function Section({ heading }) {
  return (
    <div className="max-w-6xl mx-auto px-5 lg:px-0">
      <p className="text-center uppercase text-gray-800 font-bold text-lg lg:text-2xl mb-3 xl:my-16">
        {heading}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {smartways.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Section;
