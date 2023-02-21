//For each of the exercises below, assume you are starting with the following people array.

let people = ["Greg", "Mary", "Devon", "Jsss"];

//Using a loop, iterate through this array and console.log all of the people.

let  = ["Greg", "Mary", "Devon", "James"];

for(let i = 0; i < people.lenght; i++){
  console.log(`welcome to array loop class ${people[i]}`);
}

//Write the command to remove "Greg" from the array. 

let = ["Greg", "Mary", "Devon", "James"];
people.shift();

//Write the command to remove "James" from the array.

let  = ["Mary", "Devon", "James"];
people.pop();

//Write the command to add "Matt" to the front of the array.

let  = ["Mary", "Devon"];
people.unshift("Matt");

//Write the command to add your name to the end of the array.

let = ["Matt", "Mary", "Devon"];
people.push("Pemmy");

//Using a loop, iterate through this array and after console.log-ing "Mary", exit from the loop.

let = ["Matt", "Mary", "Devon", "Pemmy"];
for(let i = 0; i < 2; i++){
  console.log(`welcome to array loop class ${people[i]}`);
}

//Write the command to make a copy of the array using slice. The copy should NOT include "Mary" or "Matt".

let = ["Matt", "Mary", "Devon", "Pemmy"];
let slicer = people.slice(2);
console.log(slicer)

//Write the command that gives the indexOf where "Mary" is located.

let  = ["Matt", "Mary", "Devon", "Pemmy"];
console.log(people.indexOf("Mary"))

//Write the command that gives the indexOf where "Foo" is located (this should return -1).

let  = ["Matt", "Mary", "Devon", "Pemmy"];
console.log(people.indexOf("foo"))

let withBob=people.concat("bob");
//Redefine the people variable with the value you started with. Using the splice command, remove "Devon" from the array and add "Elizabeth" and "Artie". Your array should look like this when you are done ["Greg", "Mary", "Elizabeth", "Artie", "James"].

let  = ["Greg", "Mary", "Devon", "James"];
people.splice(2, 1, "elizabeth", "helsinki")
console.log(people)

//Create a new variable called withBob and set it equal to the people array concatenated with the string of "Bob".

