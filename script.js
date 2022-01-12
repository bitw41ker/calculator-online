const CLEAR = "C";
const DELETE = "←";
const DIVIDE = "÷";
const MULTIPLY = "×";
const SUBSTRACT = "-";
const ADD = "+";
const CALCULATE = "=";

const buttons = document.querySelector(".calc-buttons");
const display = document.querySelector(".display");

let total = 0;
let buffer = "0";
let prevOperator = "0";

buttons.addEventListener("click", function (event) {
  buttonPressed(event.target.innerText);
});

function buttonPressed(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  }
  else {
    handleNumber(value);
  }

  console.log("-----------");
  console.log(`Button: ${value}`);
  console.log(`Total: ${total}`);
  console.log(`Buffer: ${buffer}`);
  console.log(`Operator: ${prevOperator}`);
}

function handleNumber(value) {
  if(buffer === "0") {
    buffer = value;
  }
  else {
    buffer += value;
  }
  display.innerText = buffer;
}

function handleSymbol(value) {
  switch (value) {
    case CLEAR:
      clear();
      break;
    case DELETE:
      deleteOne();
      break;
    default:
      calculate();
      prevOperator = value;
  }
  
}

function calculate() {
  switch (prevOperator) {
    case DIVIDE:
      total /= parseInt(buffer);
      break;
    case MULTIPLY:
      total *= parseInt(buffer);
      break;
    case SUBSTRACT:
      total -= parseInt(buffer);
      break;
    case ADD:
      total += parseInt(buffer);
      break;
    case CALCULATE:
      return;
    default:
      total = parseInt(buffer);
  }
  buffer = "0";
  display.innerText = total;
}

function clear() {
  buffer = "0";
  prevOperator = "0";
  total = 0;
  display.innerText = buffer;
}

function deleteOne() {
  if (buffer.length === 1) {
    buffer = "0";
  }
  else {
    buffer = buffer.substring(0, buffer.length - 1);
  }
  display.innerText = buffer;
}