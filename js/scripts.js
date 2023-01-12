function add(number1, number2){ 
  return number1 + number2;
};

function subtract(number1, number2){
  return number1 - number2;
}

function calculator(number1, number2, operator){
  if (operator === "+") {
    return add(number1, number2);
  } else if (operator === "-"){
    return subtract(number1, number2);
  }
};


// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  // the code to get and process form values will go here!

  const number1 = parseInt(document.getElementById("number-1-id").value);
  const number2 = parseInt(document.getElementById("number-2-id").value);
  const operator = document.getElementById("operator").value;

  const answer = calculator(number1, number2, operator);

  // result
  let nums = "Display numbers: " +  number1 + " " + operator + " " + number2 + " = " + answer;

  document.getElementById("result").innerText = nums;

}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleCalculation);
});