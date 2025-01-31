const name = "Shashvat"

const repoCount = 10;

console.log("My name is "+ name + " with "+repoCount+" repos.");   // Bad Way

console.log(`My name is ${name} with ${repoCount} repos.`);        // Better and correct way


const gameName = "Valorant"


//  Length of String
console.log(gameName.length);
console.log(gameName.toUpperCase());


// two ways to access character in string
console.log(gameName[5]);
console.log(gameName.charAt(5));


// index of a particular character
console.log(gameName.indexOf('t'));

// substring
console.log(gameName.substring(5,8));  // starting index (included in substring) , ending index (not included in substring)


// slice method
console.log(gameName.slice(-5,7));

// trim method - removes white spaces from string present at starting and ending
console.log("  happy  ");
console.log("  happy  ".trim());

// replace method  -> first place where it is found
console.log(gameName.replace('a','z'));

// includes method
console.log(gameName.includes('alor'));

let a = "shashvat,chetan,tarak";

// split method
console.log(a.split(','));

