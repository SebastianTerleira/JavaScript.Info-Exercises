// Write the code which asks for a login with prompt.

// If the visitor enters "Admin", then prompt for a password, if the input is an empty line or Esc – show “Canceled”, if it’s another string – then show “I don’t know you”.

// The password is checked as follows:

// If it equals “TheMaster”, then show “Welcome!”,
// Another string – show “Wrong password”,
// For an empty string or cancelled input, show “Canceled”


let input = prompt("Who's there?")

if (input === "Admin") {
	let login = prompt("Password?");
	if (login === "TheMaster") {
		alert("Welcome!");
	} else if (login === false || login === null ) {
		alert("Canceled!");
	} else {
		alert("Wrong password");
	}
} else if (input === false || input === null) {
	alert("Canceled!");
} else {
	alert("I don't know you");
}

// Other solution

// let input = prompt("Who's there?")

// if (input === "Admin") {
// 	let login = prompt("Password?");
// 	(login === "TheMaster") ? alert("Welcome!") : (login === false || login === null ) ? alert("Canceled!") : alert("Wrong password")
// } else if (input === false || input === null) {
// 	alert("Canceled!");
// } else {
// 	alert("I don't know you");
// }









