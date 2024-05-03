// Initialize Variables below
const date = "Monday 2019-03-18";
const time = "10:05:34 AM";
const astronautCount = 7;
const astronautStatus = "ready"
const averageAstronautMassKg = 80.7
const crewMassKg = astronautCount * averageAstronautMassKg
const fuelMassKg = 760000
const shuttleMassKg = 74842.31
const totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg
const maximumMassLimit = 850000
const fuelTempCelsius = -225
const minimumFuelTemp = -300
const maximumFuelTemp = -150
const fuelLevel = "100%"
const weatherStatus = "clear"
let preparedForLiftoff = true
//console.log(preparedForLiftoff);

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7) {
    preparedForLiftoff = false
} 
// console.log(preparedForLiftoff);
// add logic below to verify all astronauts are ready

if (astronautStatus !== "ready") {
    preparedForLiftoff = false
}
//console.log(preparedForLiftoff);

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg > maximumMassLimit) {
    preparedForLiftoff = false
}
//console.log(preparedForLiftoff);

// add logic below to verify the fuel temperature is within the appropriate range of -150 (maximum) and -300 (minimum)

if (fuelTempCelsius < minimumFuelTemp || fuelTempCelsius > maximumFuelTemp) {
    preparedForLiftoff = false
}
//console.log(preparedForLiftoff);

// add logic below to verify the fuel level is at 100%

if (fuelLevel !== "100%") {
    preparedForLiftoff = false
}
//console.log(preparedForLiftoff);

// add logic below to verify the weather status is clear

if (weatherStatus !== "clear") {
    preparedForLiftoff = false
}
//console.log(preparedForLiftoff);

// Verify shuttle launch can proceed based on above conditions


if (preparedForLiftoff === true) {
    console.log("YAY! All systems are a go! Shoot for the stars!");
    console.log("------------------------------------------------------------")
    console.log("Date: "+ date);
    console.log("Time: "+ time);
    console.log("Astronaut count: " + astronautCount);
    console.log("Crew Mass: " + crewMassKg + " Kg");
    console.log("Fuel Mass: " + fuelMassKg + " Kg");
    console.log("Shuttle Mass: " + shuttleMassKg + " Kg");
    console.log("Total Mass: " + totalMassKg + " Kg");
    console.log("Fuel Temperature: " + fuelTempCelsius + " C");
    console.log("Weather Status: " + weatherStatus);
    console.log("------------------------------------------------------------")
    console.log("Have a safe trip astronauts!!");
} else {
    console.log("STOP! Do not launch! Pull yourselves together!");
}