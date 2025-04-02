const firstDiv = document.getElementById("main");
const contentHolder = document.createElement("div");
contentHolder.classList.add("content");
contentHolder.id = "content";
// create uppercase
const upperCase = document.createElement("div");
upperCase.classList.add("upperCase");
upperCase.id = "uppercase";
const upperCaseCheckBox = document.createElement("input");
upperCaseCheckBox.type = "checkbox";
upperCaseCheckBox.id = "include-upperCase";
upperCase.appendChild(upperCaseCheckBox);
const upperCaseText = document.createElement("p");
upperCaseText.innerHTML = "Uppercase";
upperCase.appendChild(upperCaseText);
// create lowercase
const lowerCase = document.createElement("div");
lowerCase.classList.add("lowerCase");
lowerCase.id = "lowercase";
const lowerCaseCheckBox = document.createElement("input");
lowerCaseCheckBox.type = "checkbox";
lowerCaseCheckBox.id = "include-lowerCase";
lowerCase.appendChild(lowerCaseCheckBox);
const lowerCaseText = document.createElement("p");
lowerCaseText.innerHTML = "Lowercase";
lowerCase.appendChild(lowerCaseText);
// create number
const number = document.createElement("div");
number.classList.add("number");
number.id = "number";
const numberCheckBox = document.createElement("input");
numberCheckBox.type = "checkbox";
numberCheckBox.id = "include-number";
number.appendChild(numberCheckBox);
const numberText = document.createElement("p");
numberText.innerHTML = "Number";
number.appendChild(numberText);
// create special character
const specialChar = document.createElement("div");
specialChar.classList.add("specialChar");
specialChar.id = "specialChar";
const specialCharCheckBox = document.createElement("input");
specialCharCheckBox.type = "checkbox";
specialCharCheckBox.id = "include-specialChar";
specialChar.appendChild(specialCharCheckBox);
const specialCharText = document.createElement("p");
specialCharText.innerHTML = "Special Character";
specialChar.appendChild(specialCharText);

const passwordNumber = document.createElement("input");
passwordNumber.setAttribute("type", "number");
passwordNumber.id = "passwordNumber";
passwordNumber.classList.add("passwordNumber");
passwordNumber.placeholder = "Number of password";

contentHolder.appendChild(upperCase);
contentHolder.appendChild(lowerCase);
contentHolder.appendChild(number);
contentHolder.appendChild(specialChar);
contentHolder.appendChild(passwordNumber);

const password = document.createElement("input");
password.id = "password";
password.classList.add("password");

const nextDiv = document.createElement("div");
const textbox = document.createElement("h4");
textbox.innerHTML = "Password";
nextDiv.appendChild(textbox);
const generate = document.createElement("button");
generate.type = "button";
generate.classList.add("generate");
generate.id = "generate";
generate.innerHTML = "Generate Password";

generate.addEventListener("click", () => {
  const length = parseInt(passwordNumber.value);
  console.log("value" + passwordNumber.value);

  const addUpperCase = upperCaseCheckBox.checked;
  const addLowerCase = lowerCaseCheckBox.checked;
  const addNumber = numberCheckBox.checked;
  const addSymbol = specialCharCheckBox.checked;
  password.value = generatePassword(
    length,
    addUpperCase,
    addLowerCase,
    addNumber,
    addSymbol
  );
});

function generatePassword(
  length,
  addUpperCase,
  addLowerCase,
  addNumber,
  addSymbol
) {
  const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+[]{}|;:,.<>?";

  let password = "";
  // debugger;
  for (let i = 0; i < length; i++) {
    console.log(i);
    if (addUpperCase) {
      password +=
        upperCaseChar[Math.floor(Math.random() * upperCaseChar.length)];
    }
    if (addLowerCase) {
      password +=
        lowercaseChar[Math.floor(Math.random() * lowercaseChar.length)];
    }
    if (addNumber) {
      password += numberChar[Math.floor(Math.random() * numberChar.length)];
    }
    if (addSymbol) {
      password += symbolChar[Math.floor(Math.random() * symbolChar.length)];
    }
    if (password.length == 0 || length == 0) {
      alert("ENTER A NUMBER PLEASE!!!");
      return " ";
    }
    console.log(i);
    console.log(password);
    // return password;
  }
  return password;
}
contentHolder.appendChild(generate);
nextDiv.appendChild(password);
firstDiv.appendChild(contentHolder);
firstDiv.appendChild(nextDiv);
