import React from "react";
import Output from "./Output";
import Setting from "./Setting";

export default function PasswordGenerator(){
  return (
    <div className="flex flex-col w-fit mx-auto my-5 md:my-10 p-2 md:p-6 rounded-md bg-blue-300 text-stone-900 shadow-md">
      <h1 className="text-3xl text-stone-900 m-5 text-center font-semibold">Password Generator</h1>
      <Output />
      <Setting label = {"Length"} length = {true}/>
      <Setting label={"include Uppercase letters"} />
      <Setting label={"include Lowercase letters"} />
      <Setting label={"include Numbers"} />
      <Setting label={"include Symbols"} />
    </div>
  );
}