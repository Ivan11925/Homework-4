const text1 = "Hello";
const text2 = "World";
const textFieldsMessage = document.createElement("div");
if (text1 !== "" && text2 !== "") {
  textFieldsMessage.textContent = "Обидва поля заповнені";
} else {
  textFieldsMessage.textContent = "Не всі поля заповнені";
}
document.body.appendChild(textFieldsMessage);
console.log(text1);
console.log(text2);
console.log(textFieldsMessage);

const num1 = 7;
const num2 = 5;
const sum = num1 + num2;
const sumMessage = document.createElement("div");
if (sum > 10) {
  sumMessage.textContent = "Сума більша за 10";
} else {
  sumMessage.textContent = "Сума менша або дорівнює 10";
}
document.body.appendChild(sumMessage);
console.log(num1);
console.log(num2);
console.log(sum);
console.log(sumMessage);

const text = "I love JavaScript programming";
const containsJSMessage = document.createElement("div");
if (text.includes("JavaScript")) {
  containsJSMessage.textContent = "Текст містить слово JavaScript";
} else {
  containsJSMessage.textContent = "Текст не містить слово JavaScript";
}
document.body.appendChild(containsJSMessage);
console.log(text);
console.log(containsJSMessage);

const number = 15;
const numberRangeMessage = document.createElement("div");
if (number > 10 && number < 20) {
  numberRangeMessage.textContent = "Число входить в діапазон від 10 до 20";
} else {
  numberRangeMessage.textContent = "Число не входить в діапазон від 10 до 20";
}
document.body.appendChild(numberRangeMessage);
console.log(number);
console.log(numberRangeMessage);

const myName = "ivan";
const myEmail = "vistakivan11@gmail.com";
const password = "secret123";
const validationMessage = document.createElement("div");
const isNameValid = name.length >= 3;
const isEmailValid =
  myEmail.includes("@") && myEmail.indexOf(".") > myEmail.indexOf("@");
console.log(myName);
console.log(myEmail);
console.log(password);
console.log(validationMessage);
console.log(isNameValid);
console.log(isEmailValid);

const isPasswordValid = password.length >= 6;
if (isNameValid && isEmailValid && isPasswordValid) {
  validationMessage.textContent = "Перенаправлення на іншу сторінку";
} else {
  validationMessage.textContent = "Помилка: неправильне заповнення";
}
document.body.appendChild(validationMessage);
console.log(isPasswordValid);
