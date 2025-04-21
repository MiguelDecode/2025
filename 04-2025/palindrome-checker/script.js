// HTML References
const inputElement = document.getElementById("text-input");
const btnElement = document.getElementById("check-btn");
const resultElement = document.getElementById("result");

// Logical
const handleBtn = () => {
  const value = inputElement.value.trim().toLowerCase();

  const formatValue = value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]/g, "");

  const reverseValue = formatValue.split("").reverse().join("");

  if (value === "") {
    alert("Please input a value");
  }

  if (formatValue === reverseValue) {
    resultElement.textContent = `${inputElement.value} is a palindrome`;
  } else {
    resultElement.textContent = `${inputElement.value} is not a palindrome`;
  }
};

// Event Listeners
btnElement.addEventListener("click", handleBtn);
