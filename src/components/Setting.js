import React from "react";

export default function Setting({ label, checked, setProp }) {
  return (
    <label className="w-72 text-lg md:w-96 md:text-xl flex items-center justify-between m-2 cursor-pointer">
      <span>{label}</span>
      <input
        type="checkbox"
        className="w-4 h-4 md:w-5 md:h-5 cursor-pointer"
        checked={checked}
        onChange={() => {
          setProp(!checked);
        }}
      />
    </label>
  );
}
