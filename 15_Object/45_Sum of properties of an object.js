// We have an object that stores the salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}

alert(sum); // 390

// Write the code to add all the salaries and store the result in the variable sum. In the example above it should give us 390.

// If salariesit is empty then the result will be 0.