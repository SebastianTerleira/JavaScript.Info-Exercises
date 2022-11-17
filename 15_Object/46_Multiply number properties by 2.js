// Create a function multiplyNumeric(obj)that multiplies all the numeric properties of objby 2.

// For example:

// Antes de la llamada
let menu = {
  width: 200,
  height: 300,
  title: "Mi menú"
};

multiplyNumeric(menu);

// Después de la llamada
menu = {
  width: 400,
  height: 600,
  title: "Mi menú"
};

// Note that multiplyNumericyou don't need to return anything. You must modify the object instead.

// PS Use typeofto check if there is a number here.

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === "number") {
            obj[key] *= 2;
        }
    }
}