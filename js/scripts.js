function add(number1, number2){ 
  return number1 + number2;
};

function subtract(number1, number2){
  return number1 - number2;
}

function multiply(number1, number2){
  return number1 * number2;
}

function divide(number1, number2){
  return number1 / number2;
}

function calculator(number1, number2, operator){
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-"){
    return subtract(number1, number2);
  } else if (operator === "*") {
    return multiply(number1, number2);
  } else if (operator === "/") {
    return divide(number1, number2);
  }
}
function errorMessage(){
 return  "Enter #s/make selections."
}
// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  // the code to get and process form values will go here!

  const number1 = parseInt(document.getElementById("number-1-id").value);
  const number2 = parseInt(document.getElementById("number-2-id").value);
  const operator = document.getElementById("operator").value;

  const answer = calculator(number1, number2, operator);
  
  const nums = "Display numbers: " +  number1 + " " + operator + " " + number2 + " = " + answer;
  
  if (Number.isInteger(number1) || Number.isInteger(number2)){
    document.getElementById("result").innerText = nums;
    // document.getElementById("error-message").removeAttribute("hidden");
    // document.getElementById("error-message").removeAtttribute("error-message")
  } else {
    // document.getElementById("error-message").removeAttribute("hidden");
    document.getElementById("result").innerText = errorMessage();
  }
}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleCalculation);
})