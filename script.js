const display = document.querySelector(".display");
const opButtons = document.querySelectorAll(".control2");
const deleteButton = document.querySelector(".delete");
const numberButtons = document.querySelectorAll(".num");
const plusMinusButton = document.querySelector(".plusminus");
const errorField = document.querySelector(".error");

let displayVal = 0;
let currentOp = undefined;
let firstVal = undefined;


/*--------------- Event Listeners -------------*/
plusMinusButton.addEventListener("click", changePrefix);

function addNumListeners(nodeList) {
    nodeList.forEach(element => element.addEventListener("click", updateDisplay))
}

function addDeleteListener(btn) {
    btn.addEventListener("click", clearDisplayAndVals);
}

function addOpListeners(nodeList) {
    nodeList.forEach(element => element.addEventListener("click", setOperator))
}

function changePrefix() {
    displayVal = displayVal * -1;
    setDisplay(displayVal);
}
/*--------------- Op Function ---------------*/

function setOperator(e) {
    operator = this.dataset.calc;
    if(operator !== "=") {
        currentOp = operator
        firstVal = displayVal;
        clearDisplay();
    }
    if(operator === "=") {
        asdf()
        setDisplay(operate(currentOp, firstVal, displayVal));
        firstVal = displayVal
        currentOp = undefined;
    }
    asdf();
}

/*--------------- Display Function -------------*/
function clearDisplayAndVals() {
    clearDisplay()
    firstVal = undefined;
    currentOp = undefined;
    errorField.textContent = "";
}

function clearDisplay() {
    display.textContent = "0";
    displayVal = 0;
}

function updateDisplay(e) {
    if(display.textContent.toString().includes(".") && this.dataset.calc === ".") {
        return;
    }
    if(display.textContent === "0") {
        if(this.dataset.calc === ".") {
            display.textContent = "0."
        } else {
            display.textContent = this.dataset.calc;
        }
    } else if (display.textContent.length < 9) {
        addToDisplay(this.dataset.calc);
    }
    displayVal = display.textContent;
    console.log(displayVal);
}

function addToDisplay(num) {
    display.textContent += num;
    displayVal = display.textContent;
}

function setDisplay(num) {
    if(num.toString().length > 10) {
        errorField.textContent = "sdfölasdfja"
    }
    display.textContent = num.toString().slice(0, 9);
    displayVal = display.textContent;
}

/*--------------- Math Function -------------*/
function operate(op, n, m) {
    if(op === "+") return add(n, m);
    if(op === "-") return subtract(n, m);
    if(op === "*") return multiply(n, m);
    if(op === "/") return divide(n, m);
}

function add(n, m) {
    return n*1 + m*1;
}

function subtract(n, m) {
    return n*1 - m*1;
}

function multiply(n, m) {
    return n*1 * m*1;
}

function divide(n, m) {
    return n*1 / m*1;
}
/*--------------- Helper --------------*/
function asdf() {
    console.log(`DisplayVal ${displayVal}`)
    console.log(`First ${firstVal}`)
    console.log(`Op: ${currentOp}`)
}
/*--------------- Startup -------------*/
addNumListeners(numberButtons); 
addDeleteListener(deleteButton);
addOpListeners(opButtons)