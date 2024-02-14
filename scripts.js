//Main Calculator Number Display
let displayDiv = document.querySelector("#display");
//All variables needed for calculator operation
let firstNum;
let secondNum;
let operator;
let inLingo;
let tally = 0;
let chainTally = 0;
let firstNumGiven = false;
let secondNumGiven = false;
let addButton = document.querySelector("#adder");
let subtractButton = document.querySelector("#subtracter");
let multiplyButton = document.querySelector("#multiplier");
let divideButton = document.querySelector("#divider");
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
//this function make seem extra, but it's to ensure all variables and displays are CLEARED.
function fullClear (){
    firstNum = 0;
    secondNum = 0;
    displayDiv.textContent = "0";
    tally = 0;
    chainTally = 0;
}
clearButton.addEventListener("click", () => {
    fullClear();
});
let operatorList = [addButton, subtractButton, multiplyButton, divideButton];
//Basic Calculator Functions
function add (a,b){
    a = parseInt(a);
    b = parseInt(b);
    return a + b;
}
function subtract (a,b){
    return a - b;
}
function multiply (a,b){
    return a * b;
}
function divide (a,b){
    return a / b;
}
//This function should be invoked whenever "=" is pressed.
function operate (x,y,z){
    if (y === "+"){
        return add(x,z);
    } else if (y === "-"){
        return subtract(x,z);
    } else if (y === "X"){
        return multiply(x,z);
    } else if (y === "%"){
        return divide(x,z);
    }
}




/*
Declaring functions and variables 👆🏼
🛑
Managing logic and functionality 👇🏽
*/


//NUMBER EVENTS + FUNCTIONS 
//first time using Event Delegation, cool! 
let allNumberButtons = document.querySelectorAll(".num-button");
allNumberButtons.forEach(item => {
    item.addEventListener("click", () => {
    if (tally >= 1){
        displayDiv.textContent = "";
    }
    displayDiv.textContent += item.textContent;
    //this code here is just to get rid of the beginning 0 in display
    let tempDisplay = displayDiv.textContent;
    if (tempDisplay[0] === "0"){
    displayDiv.textContent = tempDisplay.slice(1);
    }
  
    });
});

//OPERATOR EVENTS + FUNCTIONS 
operatorList.forEach(item => {
    item.addEventListener("click", () => {
        tally++;
        if (tally === 1){
        firstNum = displayDiv.textContent;
        firstNumGiven = true;
        }
        if (tally > 1){
            equalsFunction();
        }
        operator = item.textContent;
    })
})


//POPULATE A SOLUTION 
equalsButton.addEventListener("click", equalsFunction);

function equalsFunction (){
    chainTally++;
    if (firstNumGiven === true){
        secondNum = displayDiv.textContent;
        secondNumGiven = true;
    }
    if (chainTally > 1){
        firstNum = inLingo;
    }
    
    let solution = operate(firstNum, operator, secondNum);
    displayDiv.textContent = solution;
    

    //FOR DEBUGGING PURPOSES
    console.log("First Num: " + firstNum);
    console.log("Operator: " + operator);
    console.log("Second Num: " + secondNum);
    console.log("Solution: " + solution);
    console.log("Tally #: " + tally);
    console.log("chainTally: " + chainTally);


    inLingo = solution;
    return solution;
}

