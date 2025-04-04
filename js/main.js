const nextDiv = document.createElement("div");
nextDiv.classList.add("passwordHolder");
//password display
const password = document.createElement("input");
password.id = "password";
password.classList.add("password");
password.setAttribute("readonly", "readonly");
//generate button
const generate = document.createElement("button");
generate.type = "button";
generate.classList.add("generate");
generate.id = "generate";
const img = document.createElement("img");
img.classList.add("img");
img.src = "img/regenerate.png";
generate.appendChild(img);

nextDiv.appendChild(password);
nextDiv.appendChild(generate);

const firstDiv = document.getElementById("main");
const contentHolder = document.createElement("div");
contentHolder.classList.add("content");
contentHolder.id = "content";

//option div
const options = document.createElement("div");
options.classList.add("options");
// create uppercase
const upperCase = document.createElement("label");
// upperCase.for = "uppercase";
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
const lowerCase = document.createElement("label");
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
const number = document.createElement("label");
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
const specialChar = document.createElement("label");
specialChar.classList.add("specialChar");
specialChar.id = "specialChar";
const specialCharCheckBox = document.createElement("input");
specialCharCheckBox.type = "checkbox";
specialCharCheckBox.id = "include-specialChar";
specialChar.appendChild(specialCharCheckBox);
const specialCharText = document.createElement("p");
specialCharText.innerHTML = "Special Character";
specialChar.appendChild(specialCharText);

const custome = document.createElement("h3");
custome.innerHTML = "Customize your password";
options.appendChild(custome);
options.appendChild(upperCase);
options.appendChild(lowerCase);
options.appendChild(number);
options.appendChild(specialChar);

//length div
const lengthbox = document.createElement("div");
lengthbox.classList.add("length");
const textbox = document.createElement("h4");
textbox.innerHTML = "Enter the length of Password you want.";
lengthbox.appendChild(textbox);

const passwordNumber = document.createElement("input");
passwordNumber.setAttribute("type", "number");
passwordNumber.id = "passwordNumber";
passwordNumber.classList.add("passwordNumber");
passwordNumber.placeholder = "Number of password";
lengthbox.appendChild(passwordNumber);

generate.addEventListener("click", () => {
  const length = parseInt(passwordNumber.value);
  console.log("length " + passwordNumber.value);

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
  if (length <= 0) {
    alert("Please enter number greater than 0");
  }

  const upperCaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
  const numberChar = "0123456789";
  const symbolChar = "!@#$%^&*()_+[]{}|;:,.<>?";
  const optionListWithoutShuffle = [
    addUpperCase ? upperCaseChar : null,
    addLowerCase ? lowercaseChar : null,
    addNumber ? numberChar : null,
    addSymbol ? symbolChar : null,
  ].filter(Boolean);
  if (optionListWithoutShuffle == 0) {
    alert("ENTER ANY ONE OPTION!!");
  }
  const optionList = shuffle(optionListWithoutShuffle);
  let password = "";
  console.log(optionList.length + " optionList checked ");
  for (let i = 0; i < length; i++) {
    console.log(i + " i");
    // debugger;
    let optionIndex;
    optionIndex = i % optionList.length;
    const characterList = optionList[optionIndex];
    console.log(optionIndex, characterList, " optionIndex");
    const passwordCharacter =
      characterList[Math.floor(Math.random() * characterList.length)];
    console.log("password: ", passwordCharacter);

    password += passwordCharacter;
  }
  return password;
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const shuffling = Math.floor(Math.random() * (i + 1));
      let j = array[i];
      array[i] = array[shuffling];
      array[shuffling] = j;
    }
    return array;
  }
  //
}
contentHolder.appendChild(options);
contentHolder.appendChild(lengthbox);

firstDiv.appendChild(nextDiv);
firstDiv.appendChild(contentHolder);
