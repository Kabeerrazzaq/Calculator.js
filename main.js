import './style.css'
 
let firstOperand = "";
let operator = "";
let secondOperand = "";

// Append number to display
function appendNumber(number) {
    const display = document.getElementById('display');
    display.value += number;

    const clearButton = document.getElementById('Clearbtn');
    clearButton.innerText = 'C';
}

// Clear display and reset everything
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
    firstOperand = '';
    secondOperand = '';
    operator = '';

    const clearButton = document.getElementById('Clearbtn');
    clearButton.innerText = 'AC';
}

// Set the operator and store the first operand
function setOperator(op) {
    const display = document.getElementById('display');
    firstOperand = display.value;
    operator = op;
    display.value = ''; // Clear display for the next input
}

// Perform calculation based on the operator
function Calculate() {
    const display = document.getElementById('display');
    secondOperand = display.value;

    const num1 = parseFloat(firstOperand);
    const num2 = parseFloat(secondOperand);

    // Check if both numbers are valid
    if (isNaN(num1) || isNaN(num2)) {
        display.value = 'Error';
        return;
    }

    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : "Error"; // Prevent division by zero
            break;
        default:
            return;
    }

    display.value = result;
    firstOperand = ''; // Reset after calculation
    secondOperand = '';
    operator = '';
}

// Make functions accessible globally
window.appendNumber = appendNumber;
window.clearDisplay = clearDisplay;
window.setOperator = setOperator;
window.Calculate = Calculate;
