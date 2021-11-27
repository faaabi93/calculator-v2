const display = document.querySelector(".display");
const deleteButton = document.querySelector(".delete")
const numberButtons = document.querySelectorAll(".num");

let displayValue = 0;

/*--------------- Event Listeners -------------*/
function addNumListeners(nodeList) {
    nodeList.forEach(element => element.addEventListener("click", updateDisplay))
}

function addDeleteListener(btn) {
    btn.addEventListener("click", clearDisplay);
}

/*--------------- Display Function -------------*/
function clearDisplay() {
    display.textContent = "0";
}

function updateDisplay(e) {
    if(display.textContent === "0") {
        display.textContent = this.dataset.calc;
    } else if (display.textContent.length < 9) {
        addToDisplay(this.dataset.calc);
    }
    displayValue = display.textContent;
    console.log(displayValue);
}

function addToDisplay(num) {
    display.textContent += num;
}

/*--------------- Math Function -------------*/
function add(n, m) {
    return n + m;
}

function subtract(n, m) {
    return n - m;
}

function multiply(n, m) {
    return n * m;
}

function divide(n, m) {
    return n / m;
}

function operate(op, n, m) {
    if(op === "+") return add(n, m);
    if(op === "-") return subtract(n, m);
    if(op === "*") return multiply(n, m);
    if(op === "/") return divide(n, m);
}

/*--------------- Startup -------------*/
addNumListeners(numberButtons);
addDeleteListener(deleteButton);