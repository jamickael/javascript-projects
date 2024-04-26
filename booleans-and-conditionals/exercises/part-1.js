// Declare and initialize the variables for exercise 1 here:

// BEFORE running the code, predict what will be printed to the console by the following statements:
const engineIndicatorLight = "red blinking"
const spaceSuitsOn = true;
const shuttleCabinReady = true;
const crewStatus = spaceSuitsOn && shuttleCabinReady;
const computerStatusCode = 200;
const shuttleSpeed = 15000;

if (engineIndicatorLight === "green") {
   console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
   console.log("engines are preparing to start");
} else {
   console.log("engines are off");
}
// This will print "engines are off"
// It did!