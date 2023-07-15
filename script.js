function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
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
let a = "";
let b = "";
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (btn.value != "=") {
      inputNum.textContent += btn.value;
    }
  });
});
window.addEventListener("keydown", (e) => {
  const key = document.querySelector(`.key[data-key=${e.code}]`);
  const keyOp = document.querySelector(`.keyOp[data-key=${e.code}]`);
  console.log(keyOp);
  if (key && key.value != "=") {
    inputNum.textContent += key.value;
  }
  if (!num1 && key) {
    a += key.value;
  } else if (num1 && !num2 && key) {
    b += key.value;
  }
  if (array.length < 2 && inputNum.textContent) {
    if (num1 && !num2) {
      num2 = parseInt(b);
      array[1] = num2;
    } else if (!num1) {
      num1 = parseInt(a);
      array[0] = num1;
    }
  }
  if (keyOp) {
    arrayOp.push(keyOp.value);
  }

  console.log(array.length);
  if (array.length > 1) {
    operate();
    num1 = parseInt(result.textContent);
    num2 = null;
    b = "";
    array = [num1];
    arrayOp = [];
    console.log(array);
  }
  if (keyOp && keyOp.value == "=" && inputNum.textContent) {
    inputNum.textContent = "";
    a = "";
    b = "";
    num1 = null;
    num2 = null;
    array = [];
    arrayOp = [];

    key.addEventListener("click", () => {
      result.textContent = "";
    });
  }
  if (keyOp && keyOp.value == "clear") {
    a = "";
    b = "";
    num1 = null;
    num2 = null;
    array = [];
    arrayOp = [];
    result.textContent = "";
    inputNum.textContent = "";
  }
});
// operatorBtns.forEach((operatorBtn) => {
//   operatorBtn.addEventListener("click", () => {
//     if (operatorBtn.value != "=") {
//       operator.push(operatorBtn.value);
//       console.log(operator);
//       arrayNum = inputNum.textContent.split(/[+*/-]/g);
//       arrayOp = operator.split("");
//       console.log(arrayNum.length);
//     }
//     if (arrayNum.length > 2) {
//       num1 = parseInt(arrayNum[0]);
//       num2 = parseInt(arrayNum[1]);
//       operate();
//       resultNum = parseInt(result.textContent);
//     }
//     console.log(arrayNum);
//   });
// });

numBtns.forEach((numBtn) => {
  numBtn.addEventListener("click", () => {
    if (!num1) {
      a += numBtn.value;
    } else if (num1 && !num2) {
      b += numBtn.value;
    }
  });
});
operatorBtns.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", () => {
    if (array.length < 2 && inputNum.textContent) {
      if (num1 && !num2) {
        num2 = parseInt(b);
        array[1] = num2;
      } else if (!num1) {
        num1 = parseInt(a);
        array[0] = num1;
      }
    }
    arrayOp.push(operatorBtn.value);
    console.log(array.length);
    if (array.length > 1) {
      operate();
      num1 = parseInt(result.textContent);
      num2 = null;
      b = "";
      array = [num1];
      arrayOp = [];
      console.log(array);
    }
    if (operatorBtn.value == "=" && inputNum.textContent) {
      inputNum.textContent = "";
      a = "";
      b = "";
      num1 = null;
      num2 = null;
      array = [];
      arrayOp = [];
      numBtns.forEach((numBtn) => {
        numBtn.addEventListener("click", () => {
          result.textContent = "";
        });
      });
    }
    if (operatorBtn.value == "clear") {
      a = "";
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
      result.textContent = add(num1, num2);
      break;
    case "-":
      result.textContent = subtract(num1, num2);
      break;
    case "*":
      result.textContent = multiply(num1, num2);
      break;
    case "/":
      result.textContent = divide(num1, num2);
      break;
  }
}
