/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
//a.
    for (let i = 0; i <= 20; i++) {
  console.log(i);
}
//b.
for (let i = 3; i < 30; i++) {
  if (i % 2 === 1) {
    console.log(i);
  } 
}
//c.
for (let i = 12; i > -15; i--) {
  if (i % 2 === 0) {
    console.log(i);
  }
}
//d.
for (let i = 50; i > 19; i--) {
  if (i % 3 === 0) {
    console.log(i);
  }
}

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].


Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */ 
let string = "Launchcode";
let array = [1, 5, 'LC101', 'blue', 42];
let reverseString = "";
//a.
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
//b.
for (i = 0; i <= string.length; i++) {
    //reverseString = string[i] + reverseString;
    //console.log(reverseString);
    console.log(string[string.length - i]);
}


/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */
  protoArray = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
  arrayEven = [];
  arrayOdd = [];

  for (i = 0; i < protoArray.length; i++) {
    if (protoArray[i] % 2 === 0) {
      arrayEven.push(protoArray[i]);
    } else {
      arrayOdd.push(protoArray[i]);
    }
  }
  console.log(arrayEven);
  console.log(arrayOdd);