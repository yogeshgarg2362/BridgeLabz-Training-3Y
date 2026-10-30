"use strict";

/* ==========================================
   ASSIGNMENT 3 - JAVASCRIPT ES6 FEATURES
   Name: Yogesh Garg
   ========================================== */


/* ==========================================
   Q1 - DYNAMIC DATA PARSER
   ========================================== */

console.log("\n========== Q1: DYNAMIC DATA PARSER ==========");

const apiData = ["25", "true", "false", "NaN", "                     ",
    "100px", "3.14", null, undefined];

let validNumbers = [];
let invalidNumbers = [];

for (let value of apiData) {
    let numberValue = Number(value);
    let booleanValue = Boolean(value);
    let stringValue = String(value);

    console.log(`Original: ${value} | Number: ${numberValue} | Boolean: ${booleanValue} | String: ${stringValue}`);

    if (value === null || value === undefined ||
        String(value).trim() === "" || !Number.isFinite(numberValue)) {
        invalidNumbers.push(value);
        console.log("Status: INVALID");
    } else {
        validNumbers.push(numberValue);
        console.log("Status: VALID");
    }
}

console.log("Valid Numbers:", validNumbers);
console.log("Invalid Values:", invalidNumbers);


/* ==========================================
   Q2 - EMPLOYEE BONUS CALCULATOR
   ========================================== */

console.log("\n========== Q2: EMPLOYEE BONUS CALCULATOR ==========");

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

for (let employee of employees) {
    try {
        if (!employee.name || employee.salary === undefined ||
            employee.years === undefined) {
            throw new Error("Missing employee information");
        }

        let salary = Number(employee.salary);
        let years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new Error("Invalid salary or experience");
        }

        let bonus = years > 3 ? salary * 0.10 : salary * 0.05;

        console.log(`
Employee Name: ${employee.name}
Salary: Rs. ${salary}
Experience: ${years} years
Bonus: Rs. ${bonus}
Total Salary: Rs. ${salary + bonus}
        `);

    } catch (error) {
        console.log("Employee Error:", error.message);
    }
}


/* ==========================================
   Q3 - TRANSACTION VALIDATOR
   ========================================== */

console.log("\n========== Q3: TRANSACTION VALIDATOR ==========");

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let validTransactions = [];
let invalidTransactions = [];

class TransactionError extends Error {
    constructor(message, type) {
        super(message);
        this.name = type;
    }
}

for (let transaction of transactions) {
    try {
        if (transaction === null) {
            throw new TransactionError("Null transaction", "NullError");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new TransactionError("Missing ID or amount", "MissingDataError");
        }

        if (transaction.amount < 0) {
            throw new TransactionError("Negative transaction amount", "NegativeAmountError");
        }

        validTransactions.push(transaction);
        console.log("Valid Transaction:", transaction);

    } catch (error) {
        invalidTransactions.push({
            transaction: transaction,
            error: error.name,
            message: error.message
        });

        console.log("Invalid Transaction:", error.name, error.message);
    }
}

console.log("Valid Transactions:", validTransactions);
console.log("Invalid Transactions:", invalidTransactions);
console.log("Successful Count:", validTransactions.length);
console.log("Failed Count:", invalidTransactions.length);

// Debug: Set a breakpoint inside the try block to inspect transaction values.


/* ==========================================
   Q4 - DEBUGGING MYSTERY
   ========================================== */

console.log("\n========== Q4: DEBUGGING MYSTERY ==========");

// Original code throws ReferenceError in strict mode
function showMessageFixed() {
    let greeting = "Welcome";
    console.log(greeting);
}

showMessageFixed();

/*
Explanation:
In strict mode, assigning a value to an undeclared variable
throws a ReferenceError.

Using let declares the variable locally and fixes the problem.

Debugging:
Set a breakpoint on the greeting declaration.
Add greeting to the Watch panel and inspect the Call Stack.
*/


/* ==========================================
   Q5 - HOISTING LAB: THE SEQUENCE TRAP
   ========================================== */

console.log("\n========== Q5: HOISTING LAB ==========");

// Original var and function hoisting demonstration
console.log("Score before declaration:", score);

announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";

startGame();

function startGame() {
    console.log("Status:", status);
}

/*
Explanation:
1. var score is hoisted and initialized with undefined.
2. Function declarations are hoisted completely.
3. let status is hoisted but remains in the Temporal Dead Zone
   until its declaration is executed.
4. startGame is called after status initialization.
*/

// Fixed version using declarations before execution
console.log("\nFixed Hoisting Version:");

let fixedScore = 50;
let fixedStatus = "ready";

const announceFixed = () => {
    console.log("Game started");
};

const startGameFixed = () => {
    console.log("Status:", fixedStatus);
};

console.log("Score:", fixedScore);
announceFixed();
startGameFixed();

// Arrow functions are not hoisted like function declarations.
// They must be initialized before being called.


/* ==========================================
   Q6 - PYRAMID PATTERN GENERATOR
   ========================================== */

console.log("\n========== Q6: PYRAMID PATTERN ==========");

let rows = 5;

for (let i = 1; i <= rows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// Using var instead of let
console.log("\nPyramid using var:");

for (var i = 1; i <= rows; i++) {
    var pattern = "";

    for (var j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

// User input through prompt when running in a browser
// Default value is 5 if input is empty or invalid.
let userRows = 5;

if (typeof prompt === "function") {
    let input = prompt("Enter pyramid height (default 5):");

    if (input !== null && input.trim() !== "") {
        let parsedRows = Number(input);

        if (Number.isInteger(parsedRows) && parsedRows > 0) {
            userRows = parsedRows;
        }
    }
}

console.log("\nUser Input Pyramid:");

for (let i = 1; i <= userRows; i++) {
    let pattern = "";

    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }

    console.log(pattern);
}

/*
Explanation:
let creates block-scoped variables.
var creates function-scoped variables.
With var, loop variables can be reused outside the loop.

Debugging:
Place breakpoints inside both loops and observe i and j.
*/


/* ==========================================
   Q7 - SMART CALCULATOR
   ========================================== */

console.log("\n========== Q7: SMART CALCULATOR ==========");

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

function calculate(operation, a, b) {
    switch (operation) {
        case "add":
            return a + b;

        case "divide":
            if (b === 0) {
                throw new Error("Cannot divide by zero");
            }
            return a / b;

        case "power":
            return Math.pow(a, b);

        case "root":
            if (a < 0) {
                throw new Error("Cannot calculate square root of negative number");
            }
            return Math.sqrt(a);

        case "subtract":
            return a - b;

        default:
            throw new InvalidOperationError("Invalid operation: " + operation);
    }
}

for (let operation of operations) {
    try {
        let result = calculate(operation, num1, num2);

        console.log(`
Operation: ${operation}
Number 1: ${num1}
Number 2: ${num2}
Result: ${result}
        `);

    } catch (error) {
        console.log(`
Operation: ${operation}
Error Type: ${error.name}
Error Message: ${error.message}
        `);
    }
}


/* ==========================================
   Q8 - STRICT MODE SHOWDOWN
   ========================================== */

console.log("\n========== Q8: STRICT MODE SHOWDOWN ==========");

// Non-strict behavior demonstration
// Strict mode is disabled inside this function.
function nonStrictDemo(a, a) {
    total = 10;
    console.log("Non-strict total:", total);
    console.log("Duplicate parameters:", a);
    delete globalThis.total;
}

// Run only in a non-module, non-strict browser script.
nonStrictDemo(5, 10);

// Correct version using ES6 and strict mode
function strictDemo(a, b) {
    "use strict";

    let total = 10;

    console.log("Strict mode total:", total);
    console.log("First parameter:", a);
    console.log("Second parameter:", b);
}

strictDemo(5, 10);

/*
Explanation:
1. Duplicate parameter names are not allowed in strict mode.
2. Assigning to an undeclared variable causes ReferenceError.
3. Deleting an ordinary variable causes SyntaxError.
4. let and const provide block scope and prevent accidental globals.

The original function would fail to parse if placed in strict mode.
*/


/* ==========================================
   Q9 - JSON AUDIT
   ========================================== */

console.log("\n========== Q9: JSON AUDIT ==========");

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

let cleanData = [];
let jsonErrors = [];
let under18Users = [];

for (let i = 0; i < rawData.length; i++) {
    try {
        let parsedData = JSON.parse(rawData[i]);

        if (!parsedData.user || parsedData.age === undefined) {
            throw new Error("Missing user or age key");
        }

        let age = Number(parsedData.age);

        if (!Number.isFinite(age)) {
            throw new Error("Invalid age value");
        }

        parsedData.age = age;

        cleanData.push(parsedData);

        if (age < 18) {
            under18Users.push(parsedData);
        }

        console.log(`Line ${i + 1}: Valid JSON`, parsedData);

    } catch (error) {
        jsonErrors.push({
            line: i + 1,
            error: error.message
        });

        console.log(`Line ${i + 1}: Error - ${error.message}`);
    }
}

console.log("Clean Data:", cleanData);
console.log("JSON Errors:", jsonErrors);
console.log("Users Under 18:", under18Users);
console.log("Valid Records:", cleanData.length);
console.log("Invalid Records:", jsonErrors.length);

// Debug: Set a breakpoint inside catch to observe error handling.


/* ==========================================
   Q10 - NESTED HOISTING AND CLOSURES
   ========================================== */

console.log("\n========== Q10: NESTED HOISTING AND CLOSURES ==========");

// Original nested function
function outer() {
    console.log("Outer count before declaration:", count);

    var count = 5;

    function inner() {
        console.log("Inner count before declaration:", count);

        var count = 10;

        console.log("Inner count after declaration:", count);
    }

    inner();

    console.log("Outer count after inner:", count);
}

outer();

/*
Expected Output:
Outer count before declaration: undefined
Inner count before declaration: undefined
Inner count after declaration: 10
Outer count after inner: 5

Explanation:
The outer and inner functions have separate execution contexts.

The outer count is initialized to undefined during outer()
because its var declaration is hoisted.

The inner count is also initialized to undefined during inner()
because its own local var declaration is hoisted.

The inner variable shadows the outer variable.
*/

// Arrow function version
console.log("\nArrow Function Version:");

function outerArrow() {
    var count = 5;

    const innerArrow = () => {
        console.log("Arrow function accesses outer count:", count);
        var innerCount = 10;
        console.log("Inner count:", innerCount);
    };

    innerArrow();

    console.log("Outer count:", count);
}

outerArrow();

/*
Explanation:
The arrow function does not create its own this, arguments,
super or new.target.

However, it does create its own local variable scope.
The innerCount variable is separate from the outer count.

Debugging:
1. Set a breakpoint inside outer().
2. Step into inner().
3. Inspect the Local and Closure scopes.
4. Observe the Call Stack.
5. Step out to return to outer().
*/


/* ==========================================
   ASSIGNMENT COMPLETED
   ========================================== */

console.log("\n========== ASSIGNMENT 3 COMPLETED ==========");
console.log("All 10 JavaScript questions executed successfully.");