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