// // IMPORT THE MODULE
import calc from './calculator.js'; 

// COLLECT NUMBER 1, NUMBER 2, AND OPERATION FROM THE USER
let number1 = parseFloat(prompt('Enter first number'));
let operator = prompt('Enter an operator (add, subtract, multiply, or divide)');
let number2 = parseFloat(prompt('Enter second number'));

// CHECK TO SEE WHAT OPERATION THEY'RE USING
if (operator != add || subtract || multiply || divide) {
    alert( "Invalid operator. Please choose add, subtract, multiply, or divide.");
    let number1 = parseFloat(prompt('Enter first number'));
    let operator = prompt('Enter an operator (add, subtract, multiply, or divide)');
    let number2 = parseFloat(prompt('Enter second number'));
} else {
    switch(operator) {
        case 'plus':
            calculation = number1 + number2;
            console.log(`${number1} + ${number2} = ${calculation}`);
            break;

        case 'minus':
            calculation = number1 - number2;
            console.log(`${number1} - ${number2} = ${calculation}`);
            break;

        case 'multiply':
            calculation = number1 * number2;
            console.log(`${number1} * ${number2} = ${calculation}`);
            break;

        case 'divide':
            calculation = number1 / number2;
            console.log(`${number1} / ${number2} = ${calculation}`);
            break;

        default:
        console.log('Invalid operator');
        break;
    }
}

// CALL THE APPROPRIATE FUNCTION
calculation();