import React from "react";

import passwordStrength from "../utils/passwordStrength";

function Strength({ strength }) {
  const colors = { weak: "#ff9662", medium: "#fcae1e", strong: "#77dd76" };
  const result = passwordStrength(strength);

  return (
    <div style={{backgroundColor:colors[result]}} className={`${result} w-full absolute top-full rounded-md h-1`}></div>
  );
}

export default Strength;
