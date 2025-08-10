// ===========================
// Part 1: Variables & Conditionals
// ===========================

const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = Number(ageInput.value);

  // Basic validation
  if (isNaN(age) || age < 0) {
    ageResult.textContent = "Please enter a valid age.";
    ageResult.style.color = "red";
    return;
  }

  // Conditional logic
  if (age >= 18) {
    ageResult.textContent = "You are an adult.";
    ageResult.style.color = "green";
  } else {
    ageResult.textContent = "You are a minor.";
    ageResult.style.color = "orange";
  }
});

// ===========================
// Part 2: Functions
// ===========================

// Function 1: Calculate total price with tax
function calculateTotalPrice(price, taxRate) {
  return price + price * taxRate;
}

// Function 2: Toggle visibility of an element
function toggleVisibility(element) {
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

const calcTotalBtn = document.getElementById("calcTotalBtn");
const totalPriceResult = document.getElementById("totalPriceResult");
const toggleTextBtn = document.getElementById("toggleTextBtn");
const toggleText = document.getElementById("toggleText");

calcTotalBtn.addEventListener("click", () => {
  // Example: item price $50, tax rate 8%
  const total = calculateTotalPrice(50, 0.08);
  totalPriceResult.textContent = `Total price (including tax): $${total.toFixed(2)}`;
});

toggleTextBtn.addEventListener("click", () => {
  toggleVisibility(toggleText);
});

// ===========================
// Part 3: Loops
// ===========================

const printNumbersBtn = document.getElementById("printNumbersBtn");
const numbersOutput = document.getElementById("numbersOutput");
const countdownBtn = document.getElementById("countdownBtn");
const countdownOutput = document.getElementById("countdownOutput");

printNumbersBtn.addEventListener("click", () => {
  let output = "";
  // For loop from 1 to 5
  for (let i = 1; i <= 5; i++) {
    output += i + " ";
  }
  numbersOutput.textContent = output.trim();
});

countdownBtn.addEventListener("click", () => {
  let count = 5;
  countdownOutput.textContent = "";
  
  // While loop for countdown
  while (count > 0) {
    countdownOutput.textContent += count + " ";
    count--;
  }
});

// ===========================
// Part 4: DOM Manipulation
// ===========================

const changeColorBtn = document.getElementById("changeColorBtn");
const addItemBtn = document.getElementById("addItemBtn");
const itemList = document.getElementById("itemList");

changeColorBtn.addEventListener("click", () => {
  // Change background color of body randomly
  const colors = ["#ffb3b3", "#b3d9ff", "#b3ffb3", "#fff0b3", "#d1b3ff"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
});

addItemBtn.addEventListener("click", () => {
  // Create new list item and append to list
  const newItem = document.createElement("li");
  newItem.textContent = `Item ${itemList.children.length + 1}`;
  itemList.appendChild(newItem);
});
