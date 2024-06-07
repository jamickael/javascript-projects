// Code your orbitCircumference function here:
function orbitCircumference (radius) {
  let circumference = 2 * Math.PI * radius;
  return Math.round(circumference);
}

// Code your missionDuration function here:
function missionDuration (orbits, orbitRadius = 2000, orbitSpeed = 28000) {
  let time = Math.round(((orbits*orbitCircumference(orbitRadius))/ orbitSpeed)*100)/100;
  console.log(`The mission will travel ${orbits*orbitCircumference(orbitRadius)} km around the planet, and it will take ${time} hours to complete.`);
  return time;
}
missionDuration(5);

// Copy/paste your selectRandomEntry function here:
function selectRandomEntry (array) {
  let selectedId = Math.floor(Math.random()*array.length); 
  return array[selectedId];
}

// Code your oxygenExpended function here:
function oxygenExpended(candidate) {
  let spaceWalk = candidate.o2Used(missionDuration(3));
  console.log(spaceWalk);
  spaceWalk = Math.round(spaceWalk*1000)/1000;
  console.log(spaceWalk);
  return `${candidate.name} will perform the spacewalk, which will last ${missionDuration(3)} hours and require ${spaceWalk} kg of oxygen`
}

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateA,candidateC,candidateE];
 
 console.log(oxygenExpended(candidateC));