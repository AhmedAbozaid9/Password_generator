import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import passwordStrength from "../utils/passwordStrength";

export default function Output({ password:[password,strength] }) {

  return (
    <div className="flex mb-5 rounded-md overflow-hidden">
      <input
        type="text"
        readOnly
        className="bg-clicked outline-none cursor-pointer w-full px-2 text-lg"
        value={password}
      />
      <button
        className="bg-secondary active:bg-clicked px-4 py-2 font-medium"
        onClick={() => {
          navigator.clipboard.writeText(password);
          toast.success("Password has been copied to your clipboard!", {
            position: toast.POSITION.BOTTOM_CENTER,
            autoClose: 2000,
          });
        }}
      >
        Copy
      </button>
      <ToastContainer />
      <div>{strength}</div>
    </div>
  );
}
