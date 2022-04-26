import React from "react";

export default function Slider({ label, value, setLength }) {
  return (
    <label className="w-72 text-lg md:w-96 md:text-xl flex items-center justify-between m-2 cursor-pointer">
      <span>{label}</span>
      <input
        type="range"
        min="8"
        max="20"
        defaultValue={value}
        onChange={(e) => setLength(e.target.value)}
      />
    </label>
  );
}
