import React, { useState, useEffect } from "react";
import Output from "./Output";
import Slider from "./Slider";
import Setting from "./Setting";
import { generatePassword } from "../utils/Helper";

export default function PasswordGenerator() {
  const [length, setLength] = useState(14);
  const [uppercase, setUppercase] = useState(false);
  const [lowercase, setLowercase] = useState(true);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col w-fit mx-auto my-5 md:my-10 p-2 md:p-6 rounded-md bg-blue-300 text-stone-900 shadow-md">
      <h1 className="text-3xl text-stone-900 m-5 text-center font-semibold">
        Password Generator
      </h1>
      <Output password={password} />
      <button
        className="bg-blue-600 p-3 my-5 text-white hover:bg-blue-500 rounded-md text-lg"
        onClick={() => {
          setPassword(
            generatePassword({ uppercase, lowercase, numbers, symbols }, length)
          );
        }}
      >
        Generate Password
      </button>

      <Slider label={"Length"} value={length} setLength={setLength} />
      <Setting
        label={"include Uppercase letters"}
        checked={uppercase}
        setProp={setUppercase}
      />
      <Setting
        label={"include Lowercase letters"}
        checked={lowercase}
        setProp={setLowercase}
      />
      <Setting
        label={"include Numbers"}
        checked={numbers}
        setProp={setNumbers}
      />
      <Setting
        label={"include Symbols"}
        checked={symbols}
        setProp={setSymbols}
      />
    </div>
  );
}
