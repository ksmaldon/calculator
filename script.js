//VARIABLES
let num1;
let num2;
let operation;
let numberArray = [];


//DOM ELEMENTS
const display_div = document.querySelector(".display");
const number_button = document.querySelectorAll(".number");
const equals_button = document.getElementById("equals");
const divide_button = document.getElementById("divide");
const multiply_button= document.getElementById("multiply");
const subtract_button= document.getElementById("subtract");
const plus_button = document.getElementById("plus");

//FUNCTIONS
function addNum(a,b){
    return (a+b);
}

function subNum(a,b) {
    return (a-b);
}

function divNum(a,b) {
    return (a/b);
}

function multNum(a,b) {
    return (a*b);
}

function operate(a,b,operation){
    return operation(a,b);
  
}



//EVENT LISTENERS
number_button.forEach (el=>el.addEventListener('click', ()=>{
    display_div.textContent = el.textContent;
    num1=(el.textContent*1)
}))


divide_button.addEventListener('click', ()=>{
    operation = divNum;
    console.log(operation);
})

multiply_button.addEventListener('click', ()=>{
    operation = multNum;
    console.log(operation);
})

subtract_button.addEventListener('click', ()=>{
    operation = subNum;
    console.log(operation);
})

plus_button.addEventListener('click', ()=>{
    operation = addNum;
    console.log(operation);
})


equals_button.addEventListener('click', ()=>{
   total = operate(num1, num2, operation);
   display_div.textContent = total;
   
})

console.log(num1)
console.log(num2)
console.log(operation);

//console.log(storedValues);
 









// console.log("10 + 5 ="+ addNum(10,5));
// console.log("10 - 5 ="+subNum (10,5));
// console.log("10/5 =" +divNum (10,5));
// console.log("10 x 5 =" +multNum (10,5));

// console.log(operate(10,5,divNum));



//---------------------------TODO-------------------
//Store value of numbers to either array or seperate variables