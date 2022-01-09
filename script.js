//DOM ELEMENTS

//Display
const display_div = document.querySelector(".display");
//Numbers
// const seven_button = document.getElementById("seven");
// const eight_button = document.getElementById("eight");
// const nine_button = document.getElementById("nine");
// const four_button = document.getElementById("four");
// const five_button = document.getElementById("five");
// const six_button = document.getElementById("six");
// const one_button = document.getElementById("one");
// const two_button = document.getElementById("two");
// const three_button = document.getElementById("three");
// const zero_button = document.getElementById("zero");

const number_button = document.querySelectorAll(".number");
console.log(number_button);

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

function display(){

}

number_button.forEach (el=>el.addEventListener('click', ()=>{
    display_div.textContent = el.textContent;
}))



console.log("10 + 5 ="+ addNum(10,5));
console.log("10 - 5 ="+subNum (10,5));
console.log("10/5 =" +divNum (10,5));
console.log("10 x 5 =" +multNum (10,5));

console.log(operate(10,5,divNum));