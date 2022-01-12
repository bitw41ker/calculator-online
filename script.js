let total = 0;
let operand1 = 0;
let operand2 = 0;
let operation = "0";
let commands = new Map();

commands.set("C", clear);
commands.set("←", deleteOne);
commands.set("÷", divide);
commands.set("×", multiply);
commands.set("-", substract);
commands.set("+", add);
commands.set("=", calculate);

const buttonRows = document.querySelectorAll(".button-row");
const display = document.querySelector(".display");

for (let row of buttonRows) {
  row.addEventListener("click", buttonPressed);
}

function clear() {
  display.innerText = "0";
  operand1 = 0;
  operation = "0";
}

function deleteOne() {
  operand1 = Math.floor(operand1 / 10);
  display.innerText = operand1;
}

function divide() {
  operation = "divide";
  display.innerText = "0";
}

function multiply() {
  operation = "multiply";
  display.innerText = "0";
}

function substract() {
  operation = "substract";
  display.innerText = "0";
}

function add() {
  operation = "add";
  display.innerText = "0";
}

function calculate() {
  let result = 0;

  switch (operation) {
    case "divide":
      result = operand1 / operand2;
      break;
    case "multiply":
      result = operand1 * operand2;
      break;
    case "substract":
      result = operand1 - operand2;
      break;
    case "add":
      result = operand1 + operand2;
      break;
    default:
  }
  display.innerText = result;
  operand1 = result;
  operand2 = 0;
  operation = "0";
}

function buttonPressed(event) {
  let text = event.target.innerText
  let execute = commands.get(text);
  if (typeof execute != "undefined") {
    execute();
  } else {
    if(operation === "0") {
      operand1 = operand1 * 10 + parseInt(text);
      display.innerText = operand1;
    } else {
      operand2 = operand2 * 10 + parseInt(text);
      display.innerText = operand2;
    }
  }
  /* Debug 
  console.log("-----------");
  console.log(`Button: ${text}`);
  console.log(`Operand1: ${operand1}`);
  console.log(`Operand2: ${operand2}`);
  console.log(`Operation: ${operation}`);
  */
}