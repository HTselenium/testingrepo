// Calculator object
const calculator = {
    // Addition
    add: function (num1, num2) {
        return num1 + num2;
    },
    // Subtraction
    subtract: function (num1, num2) {
        return num1 - num2;
    },
    // Multiplication
    multiply: function (num1, num2) {
        return num1 * num2;
    }
};

// Example usage:
let result;

// Performing addition
result = calculator.add(5, 3);
console.log('Addition result: ' + result); // Output: Addition result: 8

// Performing subtraction
result = calculator.subtract(5, 3);
console.log('Subtraction result: ' + result); // Output: Subtraction result: 2

// Performing multiplication
result = calculator.multiply(5, 3);
console.log('Multiplication result: ' + result); // Output: Multiplication result: 15
