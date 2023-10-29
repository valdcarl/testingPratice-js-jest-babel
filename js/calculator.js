// calculator.js

function calculator(num1, op, num2) {
    switch (op) {
        case '+':       // add
            return num1 + num2;
        case '-':       // subtract
            return num1 - num2;
        case '*':       // multiply
            return num1 * num2;
        case '/':       // divide
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Cannot divide by 0!";
            }
        default:
            return "Invalid operator, please input + - * or / for the operator";
    }
}

module.exports = calculator;