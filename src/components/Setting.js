import React from "react";

export default function Setting({ label,length }) {
  const inputType =  () => {
    if(length) {
      return (
        <input
          type="range"
          min = "8"
          max= "20"
          defaultValue="14"
        />
      );
    }
    else {
      return <input type="checkbox" className="w-4 h-4 md:w-5 md:h-5" />;

    }
  }
  return (
      <label className="w-72 text-lg md:w-96 md:text-xl flex items-center justify-between m-2 cursor-pointer">
        <span>{label}</span>
        {inputType()}
      </label>
  );
}
