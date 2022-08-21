 function passwordStrength(strength) {
  switch (strength) {
    case strength < 22:
      return "weak";
    case strength < 30:
      return "medium";
    case strength < 45:
      return "strong";
    default:
      return "weak";
  }
}

console.log(passwordStrength(30))