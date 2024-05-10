const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
const wordArray = str.split('');
//console.log(wordArray);
const threeBeginningLetters = wordArray.slice(0, 3);
const finalLetters = wordArray.slice(3, wordArray.length);
//console.log(threeBeginningLetters); 
//console.log(finalLetters);
const pigLatin = finalLetters.concat(threeBeginningLetters).join("");
//console.log(pigLatin);


//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`I am studying ${str}. But my preferred language is ${pigLatin}`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let relocatedNumbers = input.question("How many letters do you want to relocate for your Pig Latin translation? ");

if (Number(relocatedNumbers) > wordArray.length) {
    console.log(`You entered the number ${relocatedNumbers}, which is longer than the word LaunchCode.`)
    relocatedNumbers = 3
} else {}

const threeBeginningLettersUser = wordArray.slice(0, Number(relocatedNumbers));
const finalLettersUser = wordArray.slice(Number(relocatedNumbers), wordArray.length);
const pigLatinUser = finalLettersUser.concat(threeBeginningLettersUser).join("");
console.log(pigLatinUser);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
