"use strict";

/* ==========================================
   ASSIGNMENT 2 - JAVASCRIPT OPERATORS
   Name: Yogesh Garg
   ========================================== */


/* ==========================================
   Q1. SCOPE CONFLICT RESOLVER
   ========================================== */

console.log("\n========== Q1: SCOPE CONFLICT RESOLVER ==========");

let bonus = 5000;

function calculateSalary(isPermanent) {
    let salary = 40000;

    if (isPermanent === true) {
        salary += bonus;
    }

    console.log("Permanent Employee:", isPermanent);
    console.log("Total Salary: Rs.", salary);
}

calculateSalary(true);
calculateSalary(false);

console.log("Global Bonus:", bonus);

/*
Explanation:
bonus is a global variable.
salary is a local variable.
isPermanent is a function parameter.
Changing isPermanent does not modify the global bonus.
*/


/* ==========================================
   Q2. STRING MANIPULATION REPORT
   ========================================== */

console.log("\n========== Q2: STRING MANIPULATION REPORT ==========");

let productName = " wireless headphones PRO ";

// Remove extra spaces
let cleanedName = productName.trim();

// Convert to lowercase
cleanedName = cleanedName.toLowerCase();

// Capitalize first letter of every word
cleanedName = cleanedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace Pro with Pro Edition
cleanedName = cleanedName.replace("Pro", "Pro Edition");

console.log("Original Name:", productName);
console.log("Cleaned Title:", cleanedName);
console.log("Title Length:", cleanedName.length);


/* ==========================================
   Q3. MATH UTILITY DASHBOARD
   ========================================== */

console.log("\n========== Q3: MATH UTILITY DASHBOARD ==========");

let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let cube = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log(`
Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot}
Cube: ${cube}
Random Number (10-50): ${randomNumber}
`);


/* ==========================================
   Q4. ARRAY PERFORMANCE ANALYZER
   ========================================== */

console.log("\n========== Q4: ARRAY PERFORMANCE ANALYZER ==========");

// Generate 8 random scores between 30 and 100
let scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Highest and lowest scores
let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

// Calculate average using reduce
let totalScore = scores.reduce((sum, score) => sum + score, 0);
let averageScore = totalScore / scores.length;

// Filter passed students
let passedStudents = scores.filter(score => score >= 50);

// Display summary
console.log("Student Scores:", scores);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", averageScore.toFixed(2));
console.log("Passed Students:", passedStudents.length);
console.log("Failed Students:", scores.length - passedStudents.length);

// Map to display student results
let studentResults = scores.map((score, index) => ({
    student: index + 1,
    score: score,
    result: score >= 50 ? "Pass" : "Fail"
}));

console.log("Student Performance:", studentResults);


/* ==========================================
   Q5. BOOLEAN LOGIC ACCESS SYSTEM
   ========================================== */

console.log("\n========== Q5: BOOLEAN LOGIC ACCESS SYSTEM ==========");

let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

// Check security conditions
if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Test another situation
isDoorLocked = false;

if (isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside) {
    console.log("Secure");
} else {
    console.log("Unsafe");
}

// Demonstrate OR and NOT operators
console.log("Any Security Failure:",
    !isDoorLocked || !isWindowClosed || !isAlarmOn);


/* ==========================================
   Q6. EVENT-BASED COUNTER SIMULATION
   ========================================== */

console.log("\n========== Q6: EVENT-BASED COUNTER SIMULATION ==========");

let count = 0;

function increment() {
    count++;
    console.log("After Increment:", count);

    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}

function decrement() {
    count--;
    console.log("After Decrement:", count);
}

console.log("Initial Count:", count);

// Simulate button clicks
increment();
increment();
increment();
decrement();
decrement();

console.log("Final Count:", count);


/* ==========================================
   Q7. CUSTOMER FEEDBACK PROCESSOR
   ========================================== */

console.log("\n========== Q7: CUSTOMER FEEDBACK PROCESSOR ==========");

let feedback = "Great product! Fast delivery and amazing sound quality!";

let words = feedback.trim().split(/\s+/);
let wordCount = words.length;

let lowerFeedback = feedback.toLowerCase();

let containsBad = lowerFeedback.includes("bad");
let containsPoor = lowerFeedback.includes("poor");

console.log("Customer Feedback:", feedback);
console.log("Total Words:", wordCount);

if (containsBad || containsPoor) {
    console.log("Result: Needs Improvement");
} else {
    console.log("Result: Positive Feedback");
}


/* ==========================================
   Q8. DYNAMIC DISCOUNT EVALUATOR
   ========================================== */

console.log("\n========== Q8: DYNAMIC DISCOUNT EVALUATOR ==========");

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

let discountedItems = [];

for (let product of cart) {
    let discount = 0;

    if (product.category === "electronics") {
        discount = 0.10;
    } else if (product.category === "fashion") {
        discount = 0.05;
    }

    let discountAmount = product.price * discount;
    let finalPrice = product.price - discountAmount;

    discountedItems.push({
        item: product.item,
        originalPrice: product.price,
        discount: discount * 100 + "%",
        finalPrice: finalPrice
    });

    console.log(`
Item: ${product.item}
Original Price: Rs. ${product.price}
Discount: ${discount * 100}%
Final Price: Rs. ${finalPrice}
    `);
}

// Calculate discounted cart total
let cartTotal = discountedItems.reduce(
    (total, product) => total + product.finalPrice, 0
);

// Apply additional discount if total exceeds 50000
let extraDiscount = 0;

if (cartTotal > 50000) {
    extraDiscount = cartTotal * 0.05;
}

let finalCartTotal = cartTotal - extraDiscount;

console.log("Original Cart Total:",
    cart.reduce((total, product) => total + product.price, 0));

console.log("Total After Item Discounts:", cartTotal);
console.log("Extra Discount:", extraDiscount);
console.log("Final Cart Total:", finalCartTotal);


/* ==========================================
   Q9. ODD-EVEN NUMBER ANALYZER
   ========================================== */

console.log("\n========== Q9: ODD-EVEN NUMBER ANALYZER ==========");

let numbers = [];
let results = [];

for (let i = 1; i <= 30; i++) {
    numbers.push(i);
}

for (let number of numbers) {
    let result;

    if (number % 3 === 0 && number % 5 === 0) {
        result = "FizzBuzz";
    } else if (number % 2 === 0) {
        result = "Even";
    } else {
        result = "Odd";
    }

    results.push({
        number: number,
        classification: result
    });

    console.log(number + " = " + result);
}

console.log("Final Results Array:", results);


/* ==========================================
   Q10. DEPARTMENTAL EMPLOYEE EVALUATOR
   ========================================== */

console.log("\n========== Q10: DEPARTMENTAL EMPLOYEE EVALUATOR ==========");

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

for (let department of departments) {
    let departmentName = department[0];
    let score = department[1];
    let performance;

    if (score >= 90) {
        performance = "Excellent";
    } else if (score >= 75) {
        performance = "Good";
    } else if (score >= 60) {
        performance = "Average";
    } else {
        performance = "Needs Improvement";
    }

    console.log(`
Department: ${departmentName}
Performance Score: ${score}
Evaluation: ${performance}
    `);
}


/* ==========================================
   ASSIGNMENT COMPLETED
   ========================================== */

console.log("\n==================================");
console.log("ALL 10 QUESTIONS COMPLETED SUCCESSFULLY");
console.log("==================================");