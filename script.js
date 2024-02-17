document.addEventListener("DOMContentLoaded", function() {
  let inputField = document.getElementById("heading-input");
  let para1 = document.getElementById("length");
  let para2 = document.getElementById("volume");
  let para3 = document.getElementById("mass");
  let button = document.getElementById("heading-btn");

  let inputValue

  function conversion() {
    inputValue = parseFloat(inputField.value);
    localStorage.setItem('inputStored', JSON.stringify(inputValue));

    if(isNaN(inputValue)) {
      alert("Please enter a valid number") 
      return;
    }

    para1.textContent = `${inputValue} Meters: ${((inputValue)*3.28084).toFixed(2)} Feet | ${inputValue} Feet: ${((inputValue)*0.3048).toFixed(2)} Meters`;
    para2.textContent = `${inputValue} Liters: ${((inputValue)*0.264172).toFixed(2)} Gallon | ${inputValue} Gallon: ${((inputValue)*3.78541).toFixed(2)} Liters`;
    para3.textContent = `${inputValue} Kilograms: ${((inputValue)*2.20462).toFixed(2)} Pounds | ${inputValue} Pounds: ${((inputValue)*0.453592).toFixed(2)} Kilograms`;
  }

  let valueRetrive = localStorage.getItem('inputStored');
  if (valueRetrive !== null) {
    inputValue = JSON.parse(valueRetrive);
    inputField.value = inputValue; // Setting input field its value
    conversion();
  }

  inputField.addEventListener("dblclick",function() {
    inputField.value = ""
  })

  button.addEventListener("click", conversion);
});
