import React from "react";

export default function Output({ password }) {
  return (
    <div className="flex mb-5">
      <input
        type="text"
        readOnly
        className="bg-gray-200 outline-none cursor-pointer w-full px-2 text-lg"
        value={password}
      />
      <button
        className="bg-gray-100 active:bg-green-500 px-4 py-2 font-medium"
        onClick={() => {
          navigator.clipboard.writeText(password);

        }}
      >
        Copy
      </button>
    </div>
  );
}
