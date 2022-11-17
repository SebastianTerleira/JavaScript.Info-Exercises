// ¿Es posible crear las funciones A y B para que se cumpla new A() == new B()?

// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

alert( a == b ); // true
// Si es posible, entonces proporcione un ejemplo de su código.

let obj = {};

function A() { return obj }
function B() { return obj }

let a = new A();
let b = new B();

alert( a == b ); // true, si tuvieran this serian referencias distintas hacia el objeto y esto daria false
