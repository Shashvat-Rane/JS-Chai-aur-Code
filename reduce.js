
const arr = [10,20,30,40,50];

let newArr = arr.reduce((acc,curr)=>{
    console.log(`Acc: ${acc} , CurrVal: ${curr}`);
    return acc*curr;
})

console.log(newArr);