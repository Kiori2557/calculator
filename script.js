function add(num1, num2) {
  return parseFloat(num1) + parseFloat(num2);
}
function subtract(num1, num2) {
  return parseFloat(num1) - parseFloat(num2);
}
function multiply(num1, num2) {
  return parseFloat(num1) * parseFloat(num2);
}
function divide(num1, num2) {
  return parseFloat(num1) / parseFloat(num2);
}

const numBtns = document.querySelectorAll(".numBtn");
const operatorBtns = document.querySelectorAll(".operatorBtn");
const btns = document.querySelectorAll("button");
const display = document.querySelector(".display");
const inputNum = document.querySelector(".input");
const result = document.querySelector(".result");
let arrayOp = [];
let num1;
let num2;
let resultNum;
let array = [];
let a = "0";
let b = "";
let isLastInputOperator = false;

// if the input is number store it in variable num1.if num1 already exist then store the input in num2 and call operate function
numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    isLastInputOperator = false;
    inputNum.textContent += numBtn.value;
    if (!num1) {
      a += numBtn.value;
    } else if (num1) {
      b += numBtn.value;
      num2 = b;
      console.log(num2);
      array[1] = num2;
      operate();
    }
  });
});
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    arrayOp[0] = operatorBtn.value;
    if (isLastInputOperator == true) {
      let inputNumArray = inputNum.textContent.split("");
      inputNumArray[inputNumArray.length - 1] = operatorBtn.value;
      inputNum.textContent = inputNumArray.join("");
    } else if (inputNum.textContent.length != 0 && operatorBtn.value != "=") {
      inputNum.textContent += operatorBtn.value;
    } else if (inputNum.textContent.length == 0 && operatorBtn.value != "=") {
      inputNum.textContent = "0";
      inputNum.textContent += operatorBtn.value;
    } else if (inputNum.textContent.length == 0 && operatorBtn.value == "=")
      return;
    isLastInputOperator = true;
    if (!num1) {
      num1 = a;
      console.log(num1);
      array[0] = num1;
    }
    if (result.textContent) {
      num1 = result.textContent;
      b = "";
      num2 = null;
      array = [num1];
      console.log(num1);
    }
    console.log(arrayOp);
    if (operatorBtn.value == "=") {
      a = "0";
      b = "";
      num1 = null;
      num2 = null;
      array = [];
      arrayOp = [];
      inputNum.textContent = ``;
    }
    if (operatorBtn.value == "clear") {
      isLastInputOperator = false;
      a = "0";
      b = "";
      num1 = null;
      num2 = null;
      array = [];
      arrayOp = [];
      result.textContent = "";
      inputNum.textContent = "";
    }
  });
});

function operate() {
  switch (arrayOp[0]) {
    case "+":
      result.textContent = Math.round(add(num1, num2) * 1000) / 1000;
      break;
    case "-":
      result.textContent = Math.round(subtract(num1, num2) * 1000) / 1000;
      break;
    case "*":
      result.textContent = Math.round(multiply(num1, num2) * 1000) / 1000;
      break;
    case "/":
      result.textContent = Math.round(divide(num1, num2) * 1000) / 1000;
      break;
  }
}
