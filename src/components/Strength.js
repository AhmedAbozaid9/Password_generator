import React from 'react'

import passwordStrength from "../utils/passwordStrength";


function Strength({strength}) {
  const result = passwordStrength(strength)
 console.log(result)
  return (
    <div className={`bg-${result} w-full bottom-5 h-1`}></div>
  )
}

export default Strength