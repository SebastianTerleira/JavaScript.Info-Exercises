// Create a constructor function Accumulator(startingValue).

// The object you create should:

// Store the "current value" in the value. The initial value is set in the constructor argument startingValue.
// The method read()you should use promptto read a new number and add it to value.
// In other words, the property valueis the sum of all the values ​​entered by the user with the initial value startingValue.

// Here is the code demo:


// =================================================

function Accumulator(startingValue) {
    this.read = function() {
        this.value += +prompt("Cuánto más agregar?", 0);
    }
    this.value = startingValue
}

let accumulator = new Accumulator(1); // valor inicial 1

accumulator.read(); // agrega el valor introducido por el usuario
accumulator.read(); // agrega el valor introducido por el usuario

alert(accumulator.value); // muestra la suma de estos valores