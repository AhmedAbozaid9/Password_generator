import { charactersList } from "./charactersList";

let characters = "";
let passwordLength = 0;
let strength;

const setUpperCase = (isUpperCase) => {
  if (isUpperCase) {
    characters += charactersList.upperCase;
    strength += 5;
  }
  return "";
};

const setLowerCase = (isLowerCase) => {
  if (isLowerCase) {
    characters += charactersList.lowerCase;
    strength += 3;
  }
  return "";
};

const setSymbols = (isSymbol) => {
  if (isSymbol) {
    characters += charactersList.symbol;
    strength += 10;
  }
  return "";
};

const setNumber = (isNumeric) => {
  if (isNumeric) {
    characters += charactersList.numeric;
    strength += 7;
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
  strength += parseInt(passwordLength);
  return passwordLength;
};

export const generatePassword = (passwordProps, pwdLength) => {
  const { uppercase, lowercase, numbers, symbols } = passwordProps;
  //check if the user haven't chose anything
  const notEmpty = !!Object.values(passwordProps).filter(
    (value) => value === true
  ).length;
  strength = 0;
  setPasswordLength(pwdLength);
  setUpperCase(uppercase);
  setLowerCase(lowercase);
  setSymbols(symbols);
  setNumber(numbers);
  const password = notEmpty ? passwordCharacters() : "Your Mom";
  return [password, strength];
};
