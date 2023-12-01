var num = document.getElementById("number");
var increase = document.getElementById("increase-button");
var resetNumber = document.getElementById("reset-button");
var decreaseNumber = document.getElementById("decrease-button");

let newNum = 100;
let currentNum = 0;
let resetNum = 0;

function handleClick() {
  if (currentNum < newNum) {
    currentNum++;
    value = num.innerHTML = currentNum;
  }
}

function reset() {
  if (currentNum <= newNum) {
    currentNum = num.innerHTML = 0;
  }
}
function decrease() {
  if (currentNum < newNum && currentNum >= 1) {
    value = --currentNum;
    num.innerHTML = value;
  }
}
increase.addEventListener("click", handleClick);
resetNumber.addEventListener("click", reset);
decreaseNumber.addEventListener("click", decrease);
