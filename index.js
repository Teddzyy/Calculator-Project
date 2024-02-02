const prompt = require('prompt-sync')();

let calculationHistory = [];

const validSymbols = ["x", "+", "-", "/"];
const symbolsString = validSymbols.join(' ');

let reset = prompt('Would you like to do a calculation? (y/n):');
console.log(symbolsString);



while (reset === 'y') {
  const symbolInput = prompt('Enter one of the symbols above:');

  let numberInput1 = Number(prompt("Enter the first number: "));
  let numberInput2 = Number(prompt("Enter the second number: "));

  try {
    let result; 

    if (!validSymbols.includes(symbolInput)) {
        console.log("Invalid symbol");
        reset = prompt('Would you like to do another calculation? (y/n)');
        continue; 
      }

    if (symbolInput === "x") {
      result = numberInput1 * numberInput2; 
      
    } else if (symbolInput === "+") {
      result = numberInput1 + numberInput2; 
      
    } else if (symbolInput === "-") {
      result = numberInput1 - numberInput2; 
      
    } else if (symbolInput === "/") {
        
        if (numberInput2 === 0) {

            console.log("Error: Division by zero end up with the same number.");
            reset = prompt('Would you like to do another calculation? (y/n)');
            continue; 
          }

      result = numberInput1 / numberInput2; 
      
    } 

    if (result !== undefined) { 
      console.log(result); 

      calculationHistory.push(`${numberInput1} ${symbolInput} ${numberInput2} = ${result}`);
    }

    const viewHistory = prompt('Do you want to view calculation history? (y/n)');

    if (viewHistory.toLowerCase() === 'y') {

      console.log('Calculation History:', calculationHistory.join('\n'));
    }
    
  } catch(err) {

    console.log("oopsie", err);
  }
}
console.log('Calculation ended, thank you for using the calculator!');