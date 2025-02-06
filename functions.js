function sayMyName(){
    console.log("Shashvat");
}

// sayMyName();

function add(num1, num2){
    return num1+num2;
}

// console.log(add(2,15));



function calculate(...num1){    // rest operator for not known multiple arguments passed
    console.log(num1);   
}

calculate(2);