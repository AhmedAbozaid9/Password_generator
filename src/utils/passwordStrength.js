 export default function passwordStrength(strength) {
  if(strength < 22) return "weak"
  if(strength < 30) return "medium"
  if(strength < 50) return "strong"

  return "weak"
}

