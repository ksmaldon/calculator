//VARIABLES
let operation;
let num1;
let num2;
let total;
let display="";
let calc=""
let operandIsClicked = false;

//DOM ELEMENTS
const calc_div = document.querySelector(".calc");
const total_div=document.querySelector(".total");
const number_button = document.querySelectorAll(".number");
const operand_button = document.querySelectorAll(".operand");
const equals_button = document.getElementById("equals");
const clear_button = document.getElementById("clear");
const del_button = document.getElementById("delete")
const calc_button = document.querySelectorAll(".calc-text");


calc_button.forEach(el=>el.addEventListener('click', ()=>{
    if(operandIsClicked===true){
     calc+=el.textContent;
      
    }
    
}))
//FUNCTIONS
function addNum(a,b){
    return ((a*1)+(b*1));
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

function storeNum () {
if(total>0){
    num1=total;
}

if(operandIsClicked===false){
    num1=total_div.textContent
}else if(operandIsClicked===true){
    num2=total_div.textContent;
}
//console.log("num1= "+num1);
//console.log("num2= "+num2);

}


//console.log(operate(2,4,multNum));

//EVENT LISTENERS
number_button.forEach (el=>el.addEventListener('click', ()=>{
    if (display.length<20){
      display+=el.textContent;  
      
    }else{
    total_div.textContent=display;
    }
    
    //total_div.textContent=total_div.textContent.substring(0,15)
    storeNum()
    console.log(display);
}))


operand_button.forEach(el=>el.addEventListener('click', ()=>{
    const operand = el.textContent;
    display="";
    //total_div.textContent=""
    operandIsClicked=true;
    calc_div.textContent=calc; 
    if(num1>0&&num2>0){
        total = operate(num1, num2, operation);
    }

   if (operand ==="÷"){
    operation = divNum;
    }else if (operand==="x"){
       operation = multNum;
   }else if (operand ==="-"){
       operation = subNum;
   }else if (operand==="+"){
       operation = addNum;
   }
}))


clear_button.addEventListener('click', clear);

del_button.addEventListener('click',()=>{
    display=display.slice(0,-1);
    total_div.textContent=display;
});


equals_button.addEventListener('click', ()=>{
   total = operate(num1, num2, operation);
   total_div.textContent = total;
   operandIsClicked=false;
})

//console.log(num1)
//console.log(num2)
//console.log(operation);


 

function clear(){
    total_div.textContent = "";
    display="";
    num1="";
    num2="";
    total="";
    calc="";
    calc_div.textContent="";
}







// console.log("10 + 5 ="+ addNum(10,5));
// console.log("10 - 5 ="+subNum (10,5));
// console.log("10/5 =" +divNum (10,5));
// console.log("10 x 5 =" +multNum (10,5));

// console.log(operate(10,5,divNum));




// divide_button.addEventListener('click', ()=>{
//     operation = divNum;
//     console.log(operation);
// })

// multiply_button.addEventListener('click', ()=>{
//     operation = multNum;
//     console.log(operation);
// })

// subtract_button.addEventListener('click', ()=>{
//     operation = subNum;
//     console.log(operation);
// })

// plus_button.addEventListener('click', ()=>{
//     operation = addNum;
//     console.log(operation);
// })



//---------------------------TODO-------------------
//Store value of numbers to either array or seperate variables
// Number is not complete until operator button is pressed.
//Clear array when operator is pressed Boolean when operator is pressed num2=array.


//Brain dump
//When i type in 1,2 it is stored in the display array and joined together and referenced as the display text.
//When i click an operator is stores the diplay text to a different array and clears the diplay array. This can be repeated until all required numbers are entered.
//When equals is selected a funtion runs that assigns index position 0 and 1 to variables num1 and num2


//make sure that character limit display or scroll
//code del function
//add rounding
//code in 00 button
//fix issues with 0
//fix issue when not clearing after equals if number is pressed straight away needs to clear
//Add media query
//add click sound
//add total in corner
//disable double tap zoom and highlighting