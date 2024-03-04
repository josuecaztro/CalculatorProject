//Main Calculator Number Display
let displayDiv = document.querySelector("#display");
//All variables needed for calculator operation
let firstNum;
let secondNum;
let operator;
let inLingo;
let tally = 0;
let firstNumGiven = false;
let secondNumGiven = false;
let operatorGiven = false;
let addButton = document.querySelector("#adder");
let subtractButton = document.querySelector("#subtracter");
let multiplyButton = document.querySelector("#multiplier");
let divideButton = document.querySelector("#divider");
let equalsButton = document.querySelector("#equals");
let clearButton = document.querySelector("#clear");
let clearDisplay = false;


//this function make seem extra, but it's to ensure all variables and displays are CLEARED.
function fullClear (){
    firstNum = 0;
    secondNum = 0;
    displayDiv.textContent = "0";
    tally = 0;
    firstNumGiven = false;
    secondNumGiven = false;
    operatorGiven = false;
    clearDisplay = false;
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
function formatNumber (x){
    let decimalPlaces;
    if (x % 1 != 0){
    decimalPlaces = x.toString().split(".")[1].length;
    if (decimalPlaces >= 8){
        return x.toFixed(9);
    }
    return x;
    } else { 
        return x;
    }
}

//This function should be invoked whenever "=" is pressed.
function operate (x,y,z){
    if (y === "+"){
        return formatNumber(add(x,z));
    } else if (y === "-"){
        return formatNumber(subtract(x,z));
    } else if (y === "X"){
        return formatNumber(multiply(x,z));
    } else if (y === "%"){
        return formatNumber(divide(x,z));
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

    if (operatorGiven === true){
        
        if (!clearDisplay){
        displayDiv.textContent = ""; //MAKE THIS ONLY HAPPEN ONCE AND U SOLVE SECONDNUM BUG
        clearDisplay = true;
        }

        displayDiv.textContent += item.textContent;
    } else {
        displayDiv.textContent += item.textContent;
    }
   



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
            clearDisplay = false;
        }
        
        /*
        if (tally > 1 && secondNumGiven === true){
            equalsFunction();
        }

        //make another but don't do equals just fill in second number. than do equalsfunctions
        
        if (tally > 1 && secondNumGiven === false){
            secondNumGiven = false;
        }
        */
        operatorGiven = true;

        operator = item.textContent;
    })
})


//POPULATE A SOLUTION 
equalsButton.addEventListener("click", equalsFunction);
   
function equalsFunction (){

    if (firstNumGiven === true && operatorGiven === true){
        tally++;

        secondNum = displayDiv.textContent;
        secondNumGiven = true;
    

    let solution = operate(firstNum, operator, secondNum);
    displayDiv.textContent = solution;

    //FOR DEBUGGING PURPOSES
    console.log("Equation Solved: " + firstNum + operator + secondNum + "=" + solution);
    console.log("Tally #: " + tally);

    
    inLingo = solution;
    refreshEquation();

    //if (tally > 1){}
    
    return solution;
        
}

    
}

function refreshEquation (){
    firstNum = displayDiv.textContent;
    secondNum = 0;
    secondNumGiven = false;
    operatorGiven = false;
}






//ur trying to make refresh equation clear whats happening
//it sorta solves ur first bug but makes more smalelr bugs....
//its because my tally system is fucked. i need to fix that system

//how about a function that takes ur equation and sets up a new one to cycle as many as u can

/*
let currentFirst;
let currentOperator;
let currentSecond;
*/

/*
function transitionNextEquation () {
    first off this function is invoked when an operator is pressed
     (not the 1st time! you can use tally for this) 
     //FIRST BEFORE ANYTHING- IT MUST DO OPERATE() FUNCTION TO RETURN AN ANSWER
     //first thing make that operator clicked the new current Operator
    //display solution in display div
    //make solution currentFirst 
}
*/

    


