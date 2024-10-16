// Operations
function Add(a,b){
    return a+b;
}

function Subtract(a,b){
    return a-b;
}

function Divide(a,b){
    if(b===0){
        return 'Incorrect Operation';
    }
    return a/b;
}

function Multiply(a,b){
    return a*b;
}

function Operate(a,b,operator){
    if(operator === '+'){
        return Add(a,b);
    }
    else if(operator === '-'){
        return Subtract(a,b);
    }
    else if(operator === '*'){
        return Multiply(a,b);
    }
    else if(operator === '/'){
        return Divide(a,b);
    }
}

let firstNumber=0; //maybe it was local variable
let operator=0;
let secondNumber=0;
let result=0;
let inputConcat=""; //to accept concatenate Inputs for first & second Number

//Listening to the button clicks
const display = document.querySelector('.display');

//Clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function() {
    firstNumber=0;
    secondNumber=0;
    result=0;
    inputConcat="";
    display.textContent="0"; //This will be executed when the clear button is clicked
});

//'+' Add operator
const addOperator = document.querySelector("#add");
addOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '+';
    inputConcat="";    
    display.textContent = "";
})

//'-' Subtract operator
const subtractOperator = document.querySelector("#subtract");
subtractOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '-';
    inputConcat="";    
    display.textContent = "";
})

//'/' Divide operator
const divideOperator = document.querySelector("#divide");
divideOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '/';
    inputConcat="";    
    display.textContent = "";
})

//'*' Multiply operator
const multiplyOperator = document.querySelector("#multiply");
multiplyOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '*';
    inputConcat="";    
    display.textContent = "";
})

//'=' Equal operator
const equalOperator = document.querySelector("#equal");
equalOperator.addEventListener("click", function() {
    secondNumber = parseFloat(display.textContent);  
    result = Operate(firstNumber, secondNumber, operator); //result calls operate()
    display.textContent = result;
})

//'+/-' positive-negative operator -------------------------------------------------------------------------------------
const positiveNegativeOperator = document.querySelector("#positive-negative");
positiveNegativeOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    inputConcat = inputConcat*(-1);
    display.textContent = firstNumber*-1;
    inputConcat="";
})
//'%' percent operator 
const percentOperator = document.querySelector("#percent");
percentOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    display.textContent = firstNumber/100;
})

//'.' dot operator 
const displayDot = document.querySelector("#dot");
displayDot.addEventListener("click", function() {
    inputConcat = inputConcat+".";
    display.textContent = inputConcat;
})

//1. Display Number 1
const displayOne = document.querySelector("#one");
displayOne.addEventListener("click", function() {
    inputConcat = inputConcat+"1";
    display.textContent = inputConcat;
})

//2. Display Number 2
const displayTwo = document.querySelector("#two");
displayTwo.addEventListener("click", function() {
    inputConcat = inputConcat+"2";
    display.textContent = inputConcat;
})

//3. Display Number 3
const displayThree = document.querySelector("#three");
displayThree.addEventListener("click", function() {
    inputConcat = inputConcat+"3";
    display.textContent = inputConcat;
})

//4. Display Number 4
const displayFour = document.querySelector("#four");
displayFour.addEventListener("click", function() {
    inputConcat = inputConcat+"4";
    display.textContent = inputConcat;
})

//5. Display Number 5
const displayFive = document.querySelector("#five");
displayFive.addEventListener("click", function() {
    inputConcat = inputConcat+"5";
    display.textContent = inputConcat;
})

//6. Display Number 6
const displaySix = document.querySelector("#six");
displaySix.addEventListener("click", function() {
    inputConcat = inputConcat+"6";
    display.textContent = inputConcat;
})

//7. Display Number 7
const displaySeven = document.querySelector("#seven");
displaySeven.addEventListener("click", function() {
    inputConcat = inputConcat+"7";
    display.textContent = inputConcat;
})

//8. Display Number 8
const displayEight = document.querySelector("#eight");
displayEight.addEventListener("click", function() {
    inputConcat = inputConcat+"8";
    display.textContent = inputConcat;
})

//9. Display Number 9
const displayNine = document.querySelector("#nine");
displayNine.addEventListener("click", function() {
    inputConcat = inputConcat+"9";
    display.textContent = inputConcat;
})

//10. Display Number 0
const displayZero = document.querySelector("#zero");
displayZero.addEventListener("click", function() {
    inputConcat = inputConcat+"0";
    display.textContent = inputConcat;
})

//when operator is clicked firstNumber will be stored 
//when secondNumber is clicked and Equal operator is clicked it calls operate()