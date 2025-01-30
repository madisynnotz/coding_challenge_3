// Task 1: Product Price Management

let prices = [11, 15.49, 9.38, 11.50, 15.99]; // Declare an array with at least five numerical values

prices.push(16); // Add a new price to the array

prices.shift(); // Remove the first price from the array

console.log(prices); // Log the updated price list to the console

// Task 2: Modifying Customer Orders

let orders = [3, 7, 2, 10, 5]; // Declare an array with at least five numerical values representing quantities

orders[2] += 5; //Increase the third order quantity by 5

let totalOrders = orders.reduce((sum, quantity) => sum + quantity, 0); // Calculate the total number of all orders

console.log("Updated orders:", orders);
console.log("Total order count:", totalOrders); // Log the updated array and total order count to the console

// Task 3: Employee Performance Tracking

// Declare an object employee with properties: name, role, performanceScore, and isActive
let employee = {
    name: "Kenzie Miller",
    role: "Cyber Security",
    performanceScore: 85,
    isActive: true
};

employee.performanceScore = 90; // Update the performanceScore property

employee.promotionEligible = true; // Add a new property promotionEligible with a boolean value

console.log("Updated employee:", employee); // Log the updated employee object to the console

// Task 4: Customer Feedback Records

// Declare an array containing at least three feedback objects
let feedback = [
    { customerName: "Kate", feedbackText: "Wonderful service!", rating: 5 },
    { customerName: "Cameron", feedbackText: "Good quality, but a bit expensive.", rating: 4 },
    { customerName: "John", feedbackText: "Average experience.", rating: 3 }
];

// Add a new feedback object to the array
feedback.push({ customerName: "Emily", feedbackText: "Fast delivery, very satisfied!", rating: 5 });

// Log the entire feedback list to the console
console.log("Customer Feedback Records:", feedback);

// Task 5: Inventory Management System

// Declare an object inventory with properties: itemName, stockCount, and price
let inventory = {
    itemName: "Desk",
    stockCount: 73,
    price: 175.98,
    
    // Method to calculate total inventory value
    calculateTotalValue: function() {
        return this.stockCount * this.price;
    }
};

// Log the inventory details and total value to the console
console.log("Inventory Details:", inventory);
console.log("Total Inventory Value:", inventory.calculateTotalValue());
