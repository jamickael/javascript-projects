//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
let startingFuelLevel ;
let astronauts ;
let shuttleAltitude = 0;

const input = require('readline-sync');

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
startingFuelLevel = input.question("What is the shuttle's starting fuel level?");
startingFuelLevel = Number(startingFuelLevel);

while (startingFuelLevel < 5000 || startingFuelLevel > 30000 || isNaN(startingFuelLevel)) {
  if (isNaN(startingFuelLevel)) {
    startingFuelLevel = input.question("Invalid input. Please provide a number.");
  } else if (startingFuelLevel < 5000) {
    startingFuelLevel = input.question("Fuel level too low. Please increase the shuttle's fuel level.");
    startingFuelLevel = Number(startingFuelLevel);
  } else if (startingFuelLevel > 30000) {
    startingFuelLevel = input.question("Fuel level too high. Please reduce the shuttle's fuel level.");
    startingFuelLevel = Number(startingFuelLevel);
 }
}

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
astronauts = input.question("How many astronauts are going to launch into space this fine afternoon?");  
//console.log(typeof(astronauts));
astronauts = Number(astronauts);
//console.log(typeof(astronauts));

while (astronauts > 7 || astronauts < 0 || isNaN(astronauts)) {
  if (isNaN(astronauts)) { //I can't figure out how to require that the user inputs a number. Like if they type "Steve" it doesn't mess it up
    astronauts = input.question("Invalid entry. Please enter a number.");
    astronauts = Number(astronauts);
  } else if (astronauts > 7) {
    astronauts = input.question("Thats wayyyy too many people. Please reduce the number of astronauts.");
    astronauts = Number(astronauts);
  } else if (astronauts < 0) {
    astronauts = input.question("We cannot send an empty shuttle. Please send more astronauts into space.");
    astronauts = Number(astronauts);
  }
}
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
for (let i = startingFuelLevel; i >= 0; i = i - Number(astronauts)*100) {
  shuttleAltitude += 50
  console.log(`Launching!... Fuel level: ${i}. Altitude: ${shuttleAltitude}`);
}


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
console.log(`The shuttle gained a maximum altitude of ${shuttleAltitude}`);
if (shuttleAltitude >= 2000) {
  console.log("Orbit achieved!!");
} else {
  console.log("Failed to reach orbit :(");
}