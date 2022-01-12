let total = 0;
let buffer = 0;
let operator = "0";
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

function buttonPressed(event) {
  let buttonText = event.target.innerText;
  let execute = commands.get(buttonText);
  if (typeof execute != "undefined") {
    execute();
  } 
  else {
    buffer = buffer * 10 + parseInt(buttonText);
    display.innerText = buffer;
    }
    console.log("-----------");
    console.log(`Button: ${buttonText}`);
    console.log(`Total: ${total}`);
    console.log(`Buffer: ${buffer}`);
    console.log(`Operator: ${operator}`);
  }

function clear() {
  display.innerText = "0";
  buffer = 0;
  operator = "0";
  total = 0;
}

function deleteOne() {
  if(buffer != 0) {
    buffer = Math.floor(buffer / 10);
    display.innerText = buffer;
  }
}

function newTotal() {
  calculate();
  buffer = 0;
  display.innerText = total;
}

function divide() {
  calculate();
  operator = "divide";
}

function multiply() {
  calculate();
  operator = "multiply";
}

function substract() {
  calculate();
  operator = "substract";
}

function add() {
  calculate();
  operator = "add";
}

function calculate() {
  switch (operator) {
    case "divide":
      total = total / buffer;
      break;
    case "multiply":
      total = total * buffer;
      break;
    case "substract":
      total = total - buffer;
      break;
    case "add":
      total = total + buffer;
      break;
    default:
      total = buffer;
  }
  display.innerText = total;
  buffer = 0;
}