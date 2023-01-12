
// window.addEventListener("load", function() {
//   const form = document.querySelector("form#calculator");
// //   form.addEventListener("submit", eventHandleCalculationSubmit); 
// // });

// function eventHandleCalculationSubmit(event){
//   event.preventDefault();
//   const number1 = parseInt(document.getElementById("number-1-id").value);
//   const number2 = parseInt(document.getElementById("number-2-id").value);


// console.log("Num1&num2: ", number1, number2);

//   // result
// let nums = "Display numbers" +  number1 + " and " + number2;

// document.getElementById("#result)").innerText = nums;

// }

// User Interface Logic
function handleCalculation(event) {
  event.preventDefault();
  // the code to get and process form values will go here!

  const number1 = parseInt(document.getElementById("number-1-id").value);
  const number2 = parseInt(document.getElementById("number-2-id").value);
  const operator = document.getElementById("operator").value;


console.log("Num1&num2: ", number1, number2);

  // result
let nums = "Display numbers: " +  number1 + " " + operator + " " + number2;

document.getElementById("result").innerText = nums;

}

window.addEventListener("load", function() {
  const form = document.getElementById("form");
  form.addEventListener("submit", handleCalculation);
});