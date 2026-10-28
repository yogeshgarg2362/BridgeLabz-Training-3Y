
/*
   ASSIGNMENT 1: JavaScript (Questions 1–10)
   Combined solution using core JavaScript
*/

// ==================================================
// Q1. Personalized Login Greeting
// ==================================================

console.log("\n========== Q1: Login Greeting ==========");

let userName = "Yogesh";
let currentHour = new Date().getHours();

if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}


// ==================================================
// Q2. Multi-Type Data Summary
// ==================================================

console.log("\n========== Q2: Data Type Summary ==========");

let stringValue = "JavaScript";
let numberValue = 100;
let booleanValue = true;
let arrayValue = [10, 20, 30];
let objectValue = { name: "Yogesh", age: 20 };
let nullValue = null;
let undefinedValue;

let dataReport = [
    { Label: "String", Value: stringValue, Type: typeof stringValue },
    { Label: "Number", Value: numberValue, Type: typeof numberValue },
    { Label: "Boolean", Value: booleanValue, Type: typeof booleanValue },
    { Label: "Array", Value: arrayValue, Type: Array.isArray(arrayValue) ? "array" : typeof arrayValue },
    { Label: "Object", Value: objectValue, Type: typeof objectValue },
    { Label: "Null", Value: nullValue, Type: nullValue === null ? "null" : typeof nullValue },
    { Label: "Undefined", Value: undefinedValue, Type: typeof undefinedValue }
];

console.table(dataReport);


// ==================================================
// Q3. Monthly Expense Tracker
// ==================================================

console.log("\n========== Q3: Expense Tracker ==========");

let expenses = {
    food: 4000,
    travel: 1500,
    rent: 6000,
    bills: 1000,
    leisure: 500
};

let totalExpense = 0;

for (let category in expenses) {
    totalExpense += expenses[category];
}

let averageExpense = totalExpense / Object.keys(expenses).length;

// Add 10% tax using assignment operator.
let tax = totalExpense * 0.10;
let finalExpense = totalExpense;
finalExpense += tax;

console.log("Total Expense: Rs." + totalExpense.toFixed(2));
console.log("Average Expense: Rs." + averageExpense.toFixed(2));
console.log("Tax (10%): Rs." + tax.toFixed(2));
console.log("Final Amount: Rs." + finalExpense.toFixed(2));


// ==================================================
// Q4. Academic Performance Evaluator
// ==================================================

console.log("\n========== Q4: Academic Performance ==========");

let marks = [90, 85, 78, 88, 92];
let totalMarks = 0;

for (let mark of marks) {
    totalMarks += mark;
}

let averageMarks = totalMarks / marks.length;
let percentage = (totalMarks / (marks.length * 100)) * 100;

console.log("Total Marks: " + totalMarks);
console.log("Average Marks: " + averageMarks.toFixed(2));
console.log("Percentage: " + percentage.toFixed(2) + "%");

if (marks.some(mark => mark < 35)) {
    console.log("Detained");
} else if (percentage >= 85) {
    console.log("Promoted with Distinction");
} else if (percentage >= 50) {
    console.log("Promoted");
} else {
    console.log("Detained");
}


// ==================================================
// Q5. Weather Activity Planner
// ==================================================

console.log("\n========== Q5: Weather Planner ==========");

let temperature = 28;
let isRaining = false;
let windSpeed = 10;

if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else if (temperature >= 15 && temperature <= 35 && !isRaining) {
    console.log("Perfect day for a walk.");
} else {
    console.log("Stay safe and choose a suitable activity.");
}


// ==================================================
// Q6. Progressive Discount System
// ==================================================

console.log("\n========== Q6: Discount System ==========");

let purchaseTotal = 6500; // Change this test value.
let discountPercentage;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

let discountAmount = purchaseTotal * discountPercentage / 100;
let finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("Original Total: Rs." + purchaseTotal);
console.log("Discount: " + discountPercentage + "%");
console.log("Discount Amount: Rs." + discountAmount.toFixed(2));
console.log("Final Price: Rs." + finalPrice);


// ==================================================
// Q7. Smart Guessing Game
// ==================================================

console.log("\n========== Q7: Guessing Game ==========");

let secretNumber = Math.floor(Math.random() * 50) + 1;
let userGuess = 25; // Change this test value.

console.log("Your Guess: " + userGuess);

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

console.log("Secret Number: " + secretNumber);


// ==================================================
// Q8. Employee Salary Projection
// ==================================================

console.log("\n========== Q8: Salary Projection ==========");

let currentSalary = 30000;
let annualIncrementRate = 10;
let projectedSalary = currentSalary;
let salaryReport = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary *= (1 + annualIncrementRate / 100);

    salaryReport.push({
        Year: year,
        Salary: Math.round(projectedSalary)
    });
}

console.table(salaryReport);


// ==================================================
// Q9. Random Math Quiz Generator
// ==================================================

console.log("\n========== Q9: Random Math Quiz ==========");

let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ["+", "-", "*", "/"];
let randomOperator = operators[
    Math.floor(Math.random() * operators.length)
];

let correctAnswer;

switch (randomOperator) {
    case "+":
        correctAnswer = num1 + num2;
        break;

    case "-":
        correctAnswer = num1 - num2;
        break;

    case "*":
        correctAnswer = num1 * num2;
        break;

    case "/":
        correctAnswer = num1 / num2;
        break;
}

console.log(`Question: ${num1} ${randomOperator} ${num2} = ?`);

if (randomOperator === "/") {
    console.log("Correct Answer: " + correctAnswer.toFixed(2));
} else {
    console.log("Correct Answer: " + correctAnswer);
}


// ==================================================
// Q10. Citizen Eligibility Validator
// ==================================================

console.log("\n========== Q10: Citizen Eligibility ==========");

let age = 20; // Change this test value.
let isCitizen = true; // Change to false to test.

if (isCitizen && age >= 21) {
    console.log("Eligible for all services.");
} else if (isCitizen && age >= 18 && age <= 20) {
    console.log("Eligible to vote only.");
} else if (!isCitizen && age >= 18) {
    console.log("Only age criteria met.");
} else {
    console.log("Not eligible yet.");
}

console.log("\n========== Assignment Completed ==========");
