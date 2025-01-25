let score = "33";

console.log(typeof(score));

let valueInNumber = Number(score);

console.log(typeof(valueInNumber));



score = "33abc";

console.log(typeof(score));

valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber);




score = null;

console.log(typeof(score));

valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber);



score = true;

console.log(typeof(score));

valueInNumber = Number(score);

console.log(typeof(valueInNumber));
console.log(valueInNumber);


// 1-> true; 0-> false;
// "" => false
// "shashvat" => true



let num = 33;

let stringNumber = String(num);

console.log(typeof(stringNumber));
console.log(stringNumber);