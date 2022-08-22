import React from 'react'

import passwordStrength from "../utils/passwordStrength";


function Strength({strength}) {
 const result = `bg-${passwordStrength(strength)}`;


 return (
   <div className={`${result} w-full absolute top-full rounded-md h-1`}>{result}</div>
 );
}

export default Strength