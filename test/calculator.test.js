// calculator.test.js

const calculator = require("../js/calculator");

//add
test("Adds 2 + 2 to = 4", () => {
    expect(calculator(2,"+",2)).toBe(4);
});

//subtract
test("Subtracts 5 - 2 to = 3", () => {
    expect(calculator(5,"-",2)).toBe(3);
});

//multiply
test("Multiplies 4 * 4 to = 16", () => {
    expect(calculator(4,"*",4)).toBe(16);
});

//divide
test("Divides 16 / 4 to = 4", () => {
    expect(calculator(16,"/",4)).toBe(4);
});
