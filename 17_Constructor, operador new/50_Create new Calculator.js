// Create a constructor function Calculatorthat creates objects with 3 methods:

// read()asks for two values ​​using promptand stores them in the object's properties with the names aand b.
// sum()returns the sum of these properties.
// mul()returns the product of the multiplication of these properties.
// For example:

// let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

// ================================================

function Calculator() {
    this.read = function() {
        this.a  = +prompt("a?", 0);
        this.b = +prompt("b?", 0);
    };
    this.sum = function() {
    return this.a + this.b;
    };
    this.mul = function() {
    return this.a * this.b;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );