let str = 'In space, no one can hear you code.';
let arr = ['B', 'n', 'n', 5];

//1) Use the split method on the string to identify the purpose of the parameter inside the ().
str1 = str.split(' ');
console.log(str1);
//2) Use the join method on the array to identify the purpose of the parameter inside the ().
str2 = str1.join(' ');
console.log(str2);
//3) Do split or join change the original string/array?
console.log(str);
console.log(str1);
//No they do not affect the original string/array because you save it under a new variable name.
//4) We can take a comma-separated string and convert it into a modifiable array. Try it! Alphabetize the cargoHold string, and then combine the contents into a new string.
let cargoHold = "water,space suits,food,plasma sword,batteries";
cargoHoldArray = cargoHold.split(',');
cargoHoldArray.sort();
cargoHoldList = cargoHoldArray.join();
console.log(cargoHoldList);
