const display = document.getElementById("display");
let expression = "";


function appendNumber(number) {
if (display.innerText === "0") {
expression = number;
} else {
expression += number;
}
display.innerText = expression;
}


function appendOperator(operator) {
if (expression === "") return;
const lastChar = expression.slice(-1);
if (["+", "-", "*", "/"].includes(lastChar)) return;


expression += operator;
display.innerText = expression;
}


function clearDisplay() {
expression = "";
display.innerText = "0";
} 


function calculate() {
try {
const result = eval(expression);
display.innerText = result;
expression = result.toString();
} catch (error) {
display.innerText = "Error";
expression = "";
}
}