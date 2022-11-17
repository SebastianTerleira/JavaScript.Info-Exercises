// Create an object calculatorwith three methods:

// read()asks for two values ​​and stores them as object properties with names aand b.
// sum()returns the sum of the stored values.
// mul()multiplies the stored values ​​and returns the result.

let calculator = {
    read() {
      this.a = +prompt("a?", 0);
			this.b = +prompt("b?", 0);
    },
		sum() {
		return	this.a + this.b;
		},
		mul() {
		return	this.a * this.b;
		}
};


calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );