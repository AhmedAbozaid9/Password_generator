let characters = "";
let passwordLength = 0;

const setUpperCase = (isUpperCase) => {
  if (isUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  return "";
};

const setLowerCase = (isLowerCase) => {
  if (isLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  return "";
};

const setSymbols = (isSymbol) => {
  if (isSymbol) {
    characters += "!@#$%^&*()<>,.?/[]{}-=_+|/";
  }
  return "";
};

const setNumber = (isNumeric) => {
  if (isNumeric) {
    characters += "0123456789";
  }
  return "";
};

const getRandomCharacter = (characters) => {
  return characters[Math.floor(Math.random() * characters.length)];
};

const passwordCharacters = () => {
  let password = "";
  for (let i = 0; i < passwordLength; i++) {
    password += getRandomCharacter(characters);
  }
  characters = "";
  passwordLength = 0;
  return password;
};

// the functions that will actually be imported
export const setPasswordLength = (length) => {
  passwordLength = length;
  return passwordLength;
};

export const generatePassword = (passwordProps, pwdLength) => {
  const { uppercase, lowercase, numbers, symbols } = passwordProps;
  //check if the user haven't chose anything
  const notEmpty = !!Object.values(passwordProps).filter(
    (value) => value === true
  ).length;
  setPasswordLength(pwdLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);
  const password = notEmpty ? passwordCharacters() : "Your Mom";
  return password;
};
