let arr = [10,20,30,"shashvat",true]

// access krne ka tareeka

// console.log(arr[2]);
// console.log(arr[3]);

// ways to create
// let arr2 = new Array(1,7,8,9);


// Methods


// Adding and removing element at back

// arr.push(5.9);
// arr.push('hello');
// console.log(arr);
// arr.pop();
// console.log(arr);




// Adding and removing element from front -- dont use time consuming use only its imp to use

// arr.unshift(9);  // -> to add at front
// console.log(arr);
// arr.shift();  // -> to remove at front
// console.log(arr);



// includes method ( hai ki nh )   true -> hai , false -> nahi hai

// console.log(arr.includes(20));
// console.log(arr.includes("shashvat"));
// console.log(arr.includes("rane"));





// indexOf method 

// console.log(arr.indexOf(10));
// console.log(arr.indexOf(true));
// console.log(arr.indexOf(9));




// join method

// let newArr = arr.join();   // joins them and converts to a string

// console.log(arr);
// console.log(newArr);
// console.log(typeof newArr);





// slice and splice method

// arr.push(40);
// arr.push(50);
// arr.push(60);
// arr.push(70);
// arr.push(80);
// arr.push(90);

// console.log("A ", arr);

// let myNewArr1 = arr.slice(3,4);    // (starting index (included) , ending index (not included))
// console.log(myNewArr1);

// console.log("B ", arr);
// let myNewArr2 = arr.splice(3,4);  // (starting index (included) , length (agar end tak pohchh jaye aur length poori na hui ho toh wahi ruk jata h))

// console.log(myNewArr2);
// console.log("C ",arr);





let a = [10,20,30];
let b = [40,50,60];


// a.push(b);
// console.log(a);  // problem h as array push ho gaya like 2d array , aise 2 array ko merge nh kr sakte

// let c= a.concat(b);  // => merged two arrays into a new array
// console.log(c);



// let c = [...a,...b]; // ... -> teen dot is a spread operator jo ki spread kr deta h elements jaha pr bhi array ke name ke samne likha ho 
// console.log(c);


// let c = [1 , 2 , 3 , [4 , 5 , 6], 7, [6, 7, [4, 5]]];

// let dFromC = c.flat(Infinity);  // kitni depth tak krna hai , agar poora flat krna regardless of depth toh Infinity likh do
// console.log(dFromC);







// console.log(Array.isArray("shashvat"));
// console.log(Array.from("shashvat"));   //  array bana deta h
// console.log(Array.from({name: "shashvat"})); // interesting - array empty , kyuki bataya nh kiska array banana hai







let s1 = 100;
let s2 = 200;
let s3 = 300;

console.log(Array.of(s1,s2,s3));  // returns an array of element set given