const prompt = require('prompt-sync')();
const symbols = "x + - /";

console.log("Calculator initialized, Symbols are:", symbols);

let reset = prompt('Would you like to do a calculation? (yes / no)');

while (reset === 'yes') {
  const promptt = prompt('Enter one of the symbols above:');

  let num1 = Number(prompt("Enter the first number: "));
  let num2 = Number(prompt("Enter the second number: "));

  try {
    let result; 

    if (promptt === "x") {
      result = num1 * num2; 
      
    } else if (promptt === "+") {
      result = num1 + num2; 
      
    } else if (promptt === "-") {
      result = num1 - num2; 
      
    } else if (promptt === "/") {
      result = num1 / num2; 
      
    } else {
      console.log("Invalid symbol");
    }

    if (result !== undefined) { 
      console.log(result); 
    }
    reset = prompt('Would you like to do another calculation? (yes / no)');
  } catch(err) {
    console.log("oopsie", err);
    reset = prompt('Would you like to do another calculation? (yes / no)');
  }
}
console.log('Goodbye!');