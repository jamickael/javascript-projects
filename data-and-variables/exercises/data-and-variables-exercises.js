// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttle = "Determination"
let shuttleSpeed = 17500
let kmToMars = 225000000
let kmToMoon = 384400
const milesPerKm = 0.621

console.log(typeof(shuttle))
console.log(typeof(shuttleSpeed))
console.log(typeof(kmToMars))
console.log(typeof(kmToMoon))
console.log(typeof(milesPerKm))

let milesToMars = kmToMars * milesPerKm
// console.log(milesToMars);

let hoursToMars = milesToMars / shuttleSpeed
// console.log(hoursToMars);

let daysToMars = hoursToMars / 24
// console.log(daysToMars)

console.log(shuttle, "will take", daysToMars, "days to reach Mars.")

let milesToMoon = kmToMoon * milesPerKm
// console.log(milesToMoon);

let hoursToMoon = milesToMoon / shuttleSpeed
// console.log(hoursToMoon);

let daysToMoon = hoursToMoon / 24
// console.log(daysToMoon);

console.log(shuttle, "will take", daysToMoon, "days to reach the Moon.");
