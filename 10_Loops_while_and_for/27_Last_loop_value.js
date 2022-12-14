// What is the last value alerted by this code? Why?

let i = 3;

while (i) {
    alert( i-- );
}

// La respuesta: 1.

// let i = 3;

while (i) {
  alert( i-- );
}
// Cada iteración del bucle disminuye ien 1. La comprobación while(i)detiene el ciclo cuando i = 0.

// Por lo tanto, los pasos del bucle forman la siguiente secuencia ("bucle desenrollado"):

// let i = 3;

alert(i--); // shows 3, decreases i to 2

alert(i--) // shows 2, decreases i to 1

alert(i--) // shows 1, decreases i to 0

// done, while(i) check stops the loop