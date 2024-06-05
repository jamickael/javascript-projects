let superChimpOne = {
   name: "Chadd",
   species: "Chimpanzee",
   mass: 9,
   age: 6
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6
};

let dog = {
   name: "Boogle",
   species: "Beagle",
   mass: 14,
   age: 5
}

let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: 0.0000000001,
   age: 1
}


// After you have created the other object literals, add the astronautID property to each one.
//for ()
superChimpOne["astronautID"] = 
salamander["astronautID"] = 
superChimpTwo["astronautID"] = 
dog["astronautID"] = 
waterBear["astronautID"] = //function() {return Math.ceil(Math.random()*10)};

// Add a move method to each animal object
superChimpOne["move"] = function() {return Math.round(Math.random()*10)};
salamander["move"] = function() {return Math.round(Math.random()*10)};
superChimpTwo["move"] = function() {return Math.round(Math.random()*10)};
dog["move"] = function() {return Math.round(Math.random()*10)};
waterBear["move"] = function() {return Math.round(Math.random()*10)};


// Create an array to hold the animal objects.
let listOfAnimals = [superChimpOne, salamander, superChimpTwo, dog, waterBear];
//console.log(listOfAnimals);
// Print out the relevant information about each animal.
function crewReports(animal) {
   let report = `${animal.name} is a ${animal.species}. They are ${animal.age} and ${animal.mass} kilograms. Their ID is .`;
   return report;
}
//console.log(crewReports(salamander));
// Start an animal race!
function fitnessTest(array) {
   let raceTimer = [];
   for (let i = 0; i < array.length; i++) {
      let numberOfSteps = 0;
      let numberOfTurns = 0;
      while (numberOfSteps < 20) {
         numberOfSteps = numberOfSteps + array[i].move();
         numberOfTurns++;
      }
      raceTimer.push(`${(array[i]).name} took ${numberOfTurns} turns to take 20 steps.`);
   }
   return raceTimer;
}

console.log(fitnessTest(listOfAnimals));