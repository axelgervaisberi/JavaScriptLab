function performOperation() {
  // Get user input from input fields
  let num1 = parseInt(document.getElementById("input1").value);
  let num2 = parseInt(document.getElementById("input2").value);
  // Check if inputs are valid numbers
  if (!isNaN(num1) && !isNaN(num2)) {
    // Perform the operation
    let result1 = multiply(num1, num2);
    let result2 = add(num1, num2);
    let result3 = divide(num1, num2);

    // Display the result
    displayResult(result1, result2, result3);
  } else {
    displayResult("Please enter valid numbers");
  }
}

function multiply(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a * b;
}
function add(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a + b;
}
function divide(a, b) {
  // Introduce a debugger statement to pause execution
  debugger;

  // Multiply the numbers
  return a / b;
}

function displayResult(result1, result2, result3) {
  // Display the result in the paragraph element
  const resultElement = document.getElementById("result");
  resultElement.textContent = `The result for multiplication is: ${result1}\nThe result for addition is: ${result2}\nThe result for division is: ${result3}`;
}
