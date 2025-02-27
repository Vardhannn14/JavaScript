// Question 13. Array Methods (slice and splice).
// Task: Use `splice()` to remove two elements from the middle of an array and `slice()` to 
// create a new array with a portion of it.
// Rubric: 3 points for `splice()`, 2 points for `slice()`.

let fruits = ["Apple","Pineapple","Litchi","Kiwi","mango","Orange"]

fruits.splice(2, 4);  
console.log("splice to remove elements:", fruits);

let slicedFruits = fruits.slice(1, 4);  
console.log("slice: ", slicedFruits);