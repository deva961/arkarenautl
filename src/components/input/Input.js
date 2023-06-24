import React from "react";

function Input({ type, onChange, label, id, required }) {
  return (
    <div className="flex flex-col relative">
      <input
        type={type}
        id={id}
        onChange={onChange}
        placeholder=" "
        className="max-w-96 w-full py-2 border-b transition ease-linear duration-300 focus:outline-none focus:border-secondary"
      />
      <label
        htmlFor={id}
        className="label absolute flex items-center h-full transition duration-300"
      >
        {label} <span className={required ? "text-red-600" : "hidden"}>*</span>
      </label>
    </div>
  );
}

export default Input;
