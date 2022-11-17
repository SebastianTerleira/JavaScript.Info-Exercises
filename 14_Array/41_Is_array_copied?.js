// What is this code going to show?

// let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
alert( fruits.length ); // ?

// The result is 4:

// let fruits = ["Apples", "Pear", "Orange"];

// let shoppingCart = fruits;

// shoppingCart.push("Banana");

alert( fruits.length ); // 4
// That’s because arrays are objects. So both shoppingCart and fruits are the references to the same array.