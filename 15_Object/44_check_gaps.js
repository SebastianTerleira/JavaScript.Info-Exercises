// Write the function isEmpty(obj)that returns the value trueif the object has no properties, otherwise false.

// It should work like this:

function isEmpty(object) {
    for (let key in object) {
        return true;
    }

    return false;
}


let schedule = {};

alert( isEmpty(schedule) ); // true

schedule["8:30"] = "Hora de levantarse";

alert( isEmpty(schedule) ); // false