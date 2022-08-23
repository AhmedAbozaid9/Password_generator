import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Strength from "./Strength";


export default function Output({ password:[password,strength], showStrength }) {
  
  return (
    <div className="flex flex-col relative">
      <div className="flex rounded-t-md overflow-hidden">
        <div
          type="text"
          readOnly
          className="bg-clicked outline-none cursor-pointer w-full px-2 text-lg flex items-center"
        >
          {password}
        </div>
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
        {showStrength && <Strength strength={strength} />}
      </div>
    </div>
  );
}
