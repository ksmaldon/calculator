//VARIABLES
let operation="";
let num1;
let num2;
let total;
let display="";
let operandIsClicked = false;
let decimalIsClicked = false;
let numberIsClicked =false;
let equalIsClicked = false;


//DOM ELEMENTS
const display_div=document.querySelector(".display");
const number_button = document.querySelectorAll(".number");
const operand_button = document.querySelectorAll(".operand");
const equals_button = document.getElementById("equals");
const decimal_button = document.getElementById("decimal");
const clear_button = document.getElementById("clear");
const del_button = document.getElementById("delete")

display_div.textContent=display_div.textContent.substring(0,17);


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

if( equalIsClicked===true && operandIsClicked == false){
    total=""
}
if((total>0 && equalIsClicked ===true && operandIsClicked === true)||((total>0 && operandIsClicked == true))){ 
    num1=total;
}
if(operandIsClicked===false){
    num1= display;
}else if(operandIsClicked===true){
    num2= display;
}
console.log("num1= "+num1);
console.log("num2= "+num2);

}

function clear(){
    display_div.textContent = "0";
    display="";
    num1="";
    num2="";
    total="";
    operandIsClicked=false
}


function writeDisplay(el){

    
   if ((display.includes(".") && display.length>9)|| (!display.includes(".") && display.length>=9)){
       return;
   }
    if (el.textContent==="." && display_div.textContent.includes(".")&& operandIsClicked===false){//One Decimal
        return;
    }
    if((display_div.textContent==="0" && (el.textContent==="0" || el.textContent==="00"))){//One 0
        return;
    }
   if (display=="" && el.textContent==="." ){//Decimal pressed first becomes 0.
        display+="0.";   
    }else{
        display+=el.textContent;
    }
    if(display.includes(".")){
        display_div.textContent= display; 
    }else if (!display.includes(".")){
        display_div.textContent = parseInt(display).toLocaleString();
    }
      
    }
     

function formatTotal(total){
    let totalString = total.toString();
    let rounded;
    console.log(totalString.length)
    console.log (total);
    
    
    if(totalString.includes(".")){
        rounded = ((Math.round(total*100)/100).toString());
        if(rounded.length>9){
            display_div.textContent= parseInt(rounded).toExponential(5)
        }else{
            display_div.textContent=rounded 
        }
        console.log(rounded.length);
    }
    if(totalString.length<9 && totalString.includes(".")){
        display_div.textContent =total;
    }
    if(totalString.length>9 && !totalString.includes(".")){
        display_div.textContent=total.toExponential(5);
    }else if (totalString.length<=9 && !totalString.includes(".")){
        display_div.textContent =total.toLocaleString();     
    }
}

function playClick(){
    const audio = new Audio("sounds/click.wav");
    audio.play();
}

function clickButtonEl(key){
    number_button.forEach(button =>{
        if (button.textContent === key){
            button.click();
        }
    })
    if (decimal_button.textContent === key){
            decimal_button.click();
        }
    }


//EVENT LISTENERS
window.addEventListener('keydown', (e) => {
    if(
        e.key === "0"||
        e.key === "1"||
        e.key === "2"||
        e.key === "3"||
        e.key === "4"||
        e.key === "5"||
        e.key === "6"||
        e.key === "7"||
        e.key === "8"||
        e.key === "9"||
       e.key === "."
    ){
        clickButtonEl(e.key)
    }
})

number_button.forEach (el=>el.addEventListener('click', ()=>{
    writeDisplay(el);
    storeNum()
    numberIsClicked=true;
    equalIsClicked = false;
    playClick();
    
}));

decimal_button.addEventListener('click', ()=>{
    writeDisplay(decimal);
    storeNum();
    playClick();
    if(display_div.textContent==="ERROR"){
        return
    }
})

operand_button.forEach(el=>el.addEventListener('click', ()=>{
    display="";
    playClick()
    const operand = el.textContent;
    operandIsClicked=true; 
    numberIsClicked =false;

    if(display_div.textContent==="ERROR"){
        operandIsClicked=false;
    }
    if(num1>0&&num2>0){
        total = operate(num1, num2, operation);
    }
    if ((display_div.textContent.replace(/,/g, ''))===num2){
        formatTotal(total)
    }
    switch(operand){
        case '÷':
            operation = divNum;
            break;
        case 'x':
            operation = multNum
            break;
        case '-':
            operation = subNum;
            break;
        case '+':
            operation = addNum;  
    } 
}))

clear_button.addEventListener('click', ()=>{
    playClick()
    clear() 
    
   
    
});

del_button.addEventListener('click',()=>{
    playClick()
    if(display_div.textContent==="ERROR"){
        clear()
    }else{
        display=display.slice(0,-1);
        display_div.textContent=display;
    }
    
});

equals_button.addEventListener('click', ()=>{
    equalIsClicked=true;
    playClick()
    operandIsClicked=false;
   
    if (!operation){
        display_div.textContent="ERROR";
        display=""
    }
    if( (operation === divNum && (num2==0 || num2==null || num2 ==00)||
        (numberIsClicked===false && operandIsClicked===true)||
        (display_div.textContent==="ERROR"))){
            display_div.textContent="ERROR";
    }else{
        total =(operate(num1, num2, operation));
        formatTotal(total);
        
        console.log(total.length)
    }
    display=""
    num2=""
    operation=""
    
})



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
//disable double tap zoom and highlighting//
//disable rotation
//limit number of decimal
//make fon smaller on mobile and add padding lef to center
//off screen when using decimal
//stop scroll
//add error messages
//fix exponentials
//error whre numver is pressed dorectly after equals