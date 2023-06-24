import React from "react";
import '../../assets/css/table.css'
import { formatter } from "../Formatter";


function Price({ car }) {
  return (
    <>
      <p className="text-center font-semibold text-3xl my-6">
        {car?.name} Price
      </p>
      <div className="max-w-4xl mx-auto my-10">
        <table className="border-collapse border-slate-500 w-full mt-5">
          <thead>
            <tr>
              <th className="border-b px-5 py-2.5 text-start">Variant</th>
              <th className="border-b px-5 py-2.5 text-start">Price</th>
            </tr>
          </thead>
          <tbody>
            {car?.prices.map((item) => (
              <tr key={item.title} className="bgh">
                <td className="border-b px-5 py-2.5">
                  {item.title}
                </td>
                <td className="border-b px-5 py-2.5">{formatter.format(item.price)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Price;
