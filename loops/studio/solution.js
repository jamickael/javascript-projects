const input = require('readline-sync');

let protein = ['chicken', 'pork', 'tofu', 'beef', 'fish', 'beans'];
let grains = ['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let veggies = ['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let beverages = ['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let desserts = ['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];


function mealAssembly(protein, grains, veggies, beverages, desserts, numMeals) {
  let pantry = [protein, grains, veggies, beverages, desserts];
  let meals = [];
  let newMeal = [];

  for (i = 0; i < numMeals; i++){
    for (j = 0; j < pantry.length; j++) {
      newMeal.push(pantry[j][i]);
    }
    meals.push(newMeal);
    newMeal = [];
  }

  return meals;
}


function askForNumber() {
  numMeals = input.question("How many meals would you like to make?");

  while (isNaN(numMeals) || numMeals > 6 || numMeals < 1) {
    numMeals = input.question("That is an invalid entry. Please enter a number 1-6.");
  }

  return numMeals;
}


function generatePassword(password1, password2) {
  let code = [];
  password1 = password1.split('');
  password2 = password2.split('');
  console.log(password1, password2);
  
  for (i = 0; i < password1.length || i < password2.length; i++) {
    code.push(password1[i]);
    code.push(password2[i]);
    console.log(code);
  }


  code = code.join('');
  return code;
}








function runProgram() {
  
  /// TEST PART A #2 HERE ///
  /// UNCOMMENT the two lines of code below that invoke the mealAssembly function (starting with 'let meals =') and print the result ///
  /// Change the final input variable (aka numMeals) here to ensure your solution makes the right number of meals ///
  /// We've started with the number 2 for now. Does your solution still work if you change this value? ///
  
  let meals = mealAssembly(protein, grains, veggies, beverages, desserts, 2);
  console.log(meals)
  

  /// TEST PART B HERE ///
  /// UNCOMMENT the next two lines to test your ``askForNumber`` solution ///
  /// Tip - don't test this part until you're happy with your solution to part A #2 ///
  
  let mealsForX = mealAssembly(protein, grains, veggies, beverages, desserts, askForNumber());
  console.log(mealsForX);

    /// TEST PART C HERE ///
  /// UNCOMMENT the remaining commented lines and change the password1 and password2 strings to ensure your code is doing its job ///

  let password1 = 'Taylor';
  let password2 = 'Swift';
  console.log("Time to run the password generator so we can update the menu tomorrow.")
  console.log(`The new password is: ${generatePassword(password1, password2)}`);
}

module.exports = {
  protein: protein,
  grains: grains,
  veggies: veggies,
  beverages: beverages,
  desserts: desserts,
  mealAssembly: mealAssembly,
  askForNumber: askForNumber,
  generatePassword: generatePassword,
  runProgram: runProgram
};
