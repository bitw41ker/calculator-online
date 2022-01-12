let total = 0;
let buffer = 0;
let commands = new Map();

commands.set("C", clear);
commands.set("←", deleteOne);

const buttonRows = document.querySelectorAll(".button-row");
const display = document.querySelector(".display");

function clear() {
  display.innerText = "0";
  buffer = 0;
}

function deleteOne() {
  buffer = Math.floor(buffer / 10);
  display.innerText = buffer;
}

function buttonPressed(event) {
  let text = event.target.innerText
  let execute = commands.get(text);
  if(typeof execute != "undefined") {
    execute();
  } else {
    buffer = buffer * 10 + parseInt(text);
    display.innerText = buffer;
  }
  console.log(text);
  console.log(buffer);
}

for (let row of buttonRows) {
  row.addEventListener("click", buttonPressed);
}

console.log("test2");