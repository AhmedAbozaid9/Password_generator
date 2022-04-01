import React from "react";

export default function Output() {
  return (
    <div className="flex mb-5">
      <input type="text" readOnly className="bg-gray-200 outline-none cursor-pointer w-full"/>
      <button className="bg-gray-100 px-4 py-2 font-medium">Copy</button>
    </div>
  )
}