const prompt = require('prompt-sync')();

let calculationHistory = [];

const validSymbols = ["x", "+", "-", "/"];
const symbolsString = validSymbols.join(' ');

function performCalculation(symbolInput, numberInput1, numberInput2) {

  switch (symbolInput) {
    case "x":
      return numberInput1 * numberInput2;

    case "+":
      return numberInput1 + numberInput2;

    case "-":
      return numberInput1 - numberInput2;

    case "/":
      if (numberInput2 === 0) {

        throw new Error("Division by zero is not allowed.");
      }
      return numberInput1 / numberInput2;

    default:
      throw new Error("Invalid symbol");
  }
}

let reset = prompt('Would you like to do a calculation? (y/n):');
console.log(symbolsString);

while (reset === 'y') {

  const symbolInput = prompt('Enter one of the symbols above:');

  let numberInput1 = Number(prompt("Enter the first number: "));
  let numberInput2 = Number(prompt("Enter the second number: "));

  try {

    let result = performCalculation(symbolInput, numberInput1, numberInput2);

    console.log(result);
    calculationHistory.push(`${numberInput1} ${symbolInput} ${numberInput2} = ${result}`);

    const viewHistory = prompt('Do you want to view calculation history? (y/n)');

    if (viewHistory.toLowerCase() === 'y') {

      console.log('Calculation History:', calculationHistory.join('\n'));
    }
  } catch (err) {
    console.log("oopsie", err.message);
  }

  reset = prompt('Would you like to do another calculation? (y/n)');
}

console.log('Calculation ended, thank you for using the calculator!');