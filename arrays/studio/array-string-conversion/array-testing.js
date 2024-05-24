let protoArray1 = "3,6,9,12";
let protoArray2 = "A;C;M;E";
let protoArray3 = "space delimited string";
let protoArray4 = "Comma-spaces, might, require, typing, caution";

strings = [protoArray1, protoArray2, protoArray3, protoArray4];
// console.log(strings[0].includes(","));
// console.log(strings[1].includes(";"));

//2) 
function reverseCommas() {
	let check = strings[0];
	let output;
	
	if (check.includes(",")) {
		output = check.split(",").reverse().join(",");
		return output
	} else {
		return check;
	}

}

//3)
function semiDash() {
	let check = strings[1];
	let output;

if (check.includes(";")) {
	output = check.split(";").sort().join("-")
	return output
} else {
	return check
}
}

//4)
function reverseSpaces() {
	let check = strings[2];
	let output;

  if (check.includes(" ")) {
	output = check.split(" ").sort().reverse().join(" ");
	return output
} else {
	return check
}
}

//5)
function commaSpace() {
	let check = strings[3];
	let output;

    if (check.includes(", ")) {
		output = check.split(", ").reverse().join(",");
		return output
	} else {
		return check
	}

}

console.log(reverseCommas());
console.log(semiDash());
console.log(reverseSpaces());
console.log(commaSpace());

// NOTE: Don't add or modify any code below this line or your program might not run as expected.
module.exports = {
	strings : strings, 
	reverseCommas : reverseCommas,
	semiDash: semiDash, 
	reverseSpaces : reverseSpaces,
	commaSpace : commaSpace
};
