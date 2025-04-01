const firstDiv = document.getElementById("main");
console.log("hello world");
const contentHolder = document.createElement("div");
contentHolder.classList.add("content");
contentHolder.id = "content";
console.log("hello world");
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

const generate = document.createElement("input");
generate.setAttribute("type", "number");
generate.id = "generate";
generate.classList.add("generate");
generate.placeholder = "Number of password";

contentHolder.appendChild(upperCase);
contentHolder.appendChild(lowerCase);
contentHolder.appendChild(number);
contentHolder.appendChild(specialChar);
contentHolder.appendChild(generate);

firstDiv.appendChild(contentHolder);
