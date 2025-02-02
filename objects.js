// Singeltom
// Object.create();


// Object Literals

const mySym = Symbol("key1");

let jsUser = {          // key - value pairs
    name: "Shashvat",
    "Full Name": "Shashvat Rane",
    // mySym: "myKey1",                // -> wrong way to add
    [mySym] : "myKey1",             // -> correct way to add symbol as key in object
    age: 22,
    location: "Betul",
    email: "shashvat@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Wednesday"]
}

//  do tareeke access ke

// console.log(jsUser.email);   // most of the time use . only but kabhi kabhi [""] tareeka use krne padega like Full Name ke liye
// console.log(jsUser["Full Name"]);
// console.log(jsUser["email"]);
// console.log(jsUser[mySym]);  // jaha bhi symbol use krenge [] iske andar hi

// update
// jsUser["email"] = "shashvat@chatgpt.com";
// console.log(jsUser["email"]);


// // Freeze method no updates will work on it

// Object.freeze(jsUser);

// jsUser["email"] = "shashvat@microsoft.com";
// console.log(jsUser["email"]);



// Adding functions in Objects

jsUser.greetings = function(){
    console.log("Hello JS User");
}
jsUser.greetingsTwo = function(){
    console.log(`Hello JS User, ${this["Full Name"]}`);    // agar same object ke andar ke key ko access krna h toh this keyword use krenge
    console.log(`Hello JS User, ${this.name}`);    // agar same object ke andar ke key ko access krna h toh this keyword use krenge
}

// console.log(jsUser.greetings());
// console.log(jsUser.greetingsTwo());








//  Part 2 - Video -----------------------------------------------------------------------------------

// const me = new Object();    // -> SINGLETON
// const me = {}               // -> NON-SINGLETON

// console.log(me);  // dono me same hi output aaega dono same hi cheej h bas upar wala singleton h aur neeche wala non-singleton h
// koi internal difference nh bas interview ke liye yaad rakhna singleton and non-singleton

const tinderUser = {};

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shashvat",
            lastname: "Rane"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);

// bhot jagah kuch aisa dikhega like regularUser.fullname? aisa question mark 
// toh ise bolte h optional chaining jo ki use ki jati h ki ye hai ya nh pehle check krlo like api ke through object aara h 
// toh usme ye aaya ki nh check krne ke liye
// baad me aur detail me discuss krenge isko


const obj1 = {1: "a", 2: "b", 3: "c", 4: "d"};

const obj2 = {5: "e", 6: "f", 7: "g", 8: "h"};

const obj3 = {9: "i", 10: "j", 11: "k", 12: "l"};


// const obj3 = { obj1 , obj2 };   // concat nh hua vo object ke andar do object add ho gaye

// const obj4 = Object.assign(obj1,obj2,obj3);
// const obj4 = Object.assign({},obj1,obj2,obj3);  // but isse bhi ham kafi kam use krenge kyuki spread operator h na easy-pizzy
const obj4 = {...obj1,...obj2,...obj3};

// const obj3 = Object.assign({}, obj1, obj2);
// ( {} , ... ) -> pehle khali {} isiliye kyuki sabse pehle wale object ko target object bolte h 
// jisme aage ke objects ki values add krte h
// toh agar khali {} nh lagaenge toh obj1 me add ho jaega sab

// console.log(obj1);
// console.log(obj4);



// console.log(Object.keys(jsUser));  // -> array of keys return kr deta hai
// console.log(Object.values(jsUser));  // -> array of values return kr deta hai

// agar aapko arrays ke format me chahiye poora object toh 
// console.log(Object.entries(jsUser));

// console.log(jsUser);
// console.log(jsUser.hasOwnProperty('Shashvat'));  // -> true false return krta h ki vo property h ki nh usme




// Part - 3 Video --------------------------------------------------------------------------------------------------------------


const course = {
    name: "Chai aur Code JS In Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// console.log(course.courseInstructor); // ab jaise bhot jagah ye use krna hoga toh itta bada course.courseInstructor baar baar type krna padega

// iska solution h ye

// const {courseInstructor} = course
// console.log(courseInstructor);  // ye bhi agar bada lagra ho toh name ko bhi chhota kr sakte h


// const {courseInstructor: instructor} = course;
// console.log(instructor); // simple and easy aur issi ko bolte h object de-structure



// JSON format is nothing but and object

// {
//     "name": "js in hindi",
//     "price": "Free",
//     "courseInstructor": "Hitesh"
// }


// aur arrays ke format me bhi aa sakti h like

// [
//     {},
//     {},
//     {},
//     {},
// ]
// aise 


// Now search on google What is Json and read the AI overview