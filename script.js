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

let firstNumber=0;
let operator=null;
let secondNumber=0;
let result=0;
let inputConcat=""; //to accept concatenate Inputs for first & second Number
let isDotUsed=false;
let isEqualClicked=false;

//Listening to the button clicks
const display = document.querySelector('.display');

//Clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener("click", function() {
    firstNumber=0;
    operator=null;
    secondNumber=0;
    result=0;
    inputConcat="";
    isDotUsed=false;
    isEqualClicked=false;

    console.log("isDotUsed "+isDotUsed);
    console.log("firstNumber "+firstNumber);
    console.log("inputConcat "+inputConcat);
    console.log("operator "+ operator);
    console.log("isEqualClicked "+isEqualClicked);
    console.log("secondNumber "+secondNumber)

    display.textContent= "0"; //This will be executed when the clear button is clicked
});

//'Backspace' Backspace operator //you can add when the string is empty to display 0
const backspaceButton = document.querySelector("#backspace");
backspaceButton.addEventListener("click", function() {
    inputConcat = inputConcat.slice(0,-1);
    display.textContent=inputConcat;
});

//'+' Add operator
const addOperator = document.querySelector("#add");
addOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '+';
    inputConcat="";   
    isDotUsed=false; 
    display.textContent = operator;
    isEqualClicked=false;

})

//'-' Subtract operator
const subtractOperator = document.querySelector("#subtract");
subtractOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '-';
    inputConcat="";    
    isDotUsed=false;
    display.textContent = operator;
    isEqualClicked=false;
})

//'/' Divide operator
const divideOperator = document.querySelector("#divide");
divideOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '/';
    inputConcat="";  
    isDotUsed=false;  
    display.textContent = operator;
    isEqualClicked=false;
})

//'*' Multiply operator
const multiplyOperator = document.querySelector("#multiply");
multiplyOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent);   
    operator = '*';
    inputConcat="";    
    isDotUsed=false;
    display.textContent = operator;
    isEqualClicked=false;
})

//'=' Equal operator
const equalOperator = document.querySelector("#equal");
equalOperator.addEventListener("click", function() {

    secondNumber = parseFloat(display.textContent); 
    
    if(!isEqualClicked || result !== secondNumber){ //to make sure Equal for one operation works for only one + continue other operation
        result = Operate(firstNumber, secondNumber, operator); //result calls operate()
    }
    else{
        result = result*1;
    }
    firstNumber=0;
    operator=null;
    inputConcat="";
    isDotUsed=false;
    isEqualClicked=true;
    display.textContent = result;
    secondNumber=0;
    console.log(secondNumber);
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
    if(!isDotUsed){
        inputConcat = inputConcat+".";
        isDotUsed=true;
    } 
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

//Read Input from keyboard
//1. reading numbers 0 - 10 //fix 0 that is being kept when others numbers a read
document.addEventListener("keydown", function(event) {
    if (event.key >= "0" && event.key <= "9") {
        inputConcat += event.key;
        display.textContent = inputConcat;
    }
});

//2. Delete one by one
document.addEventListener("keydown", function(event) {
    if (event.key === "Backspace") {
        inputConcat = inputConcat.slice(0,-1);
        display.textContent=inputConcat;
    }
});
//3. Add
document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
        firstNumber = parseFloat(display.textContent);   
        operator = '+';
        inputConcat="";   
        isDotUsed=false; 
        display.textContent = operator;
        isEqualClicked=false;
    }
});
//4. Subtract
document.addEventListener("keydown", function(event) {
    if (event.key === "-") {
        firstNumber = parseFloat(display.textContent);   
        operator = '-';
        inputConcat="";   
        isDotUsed=false; 
        display.textContent = operator;
        isEqualClicked=false;
    }
});
//5. Divide
document.addEventListener("keydown", function(event) {
    if (event.key === "/") {
        firstNumber = parseFloat(display.textContent);   
        operator = '/';
        inputConcat="";   
        isDotUsed=false; 
        display.textContent = operator;
        isEqualClicked=false;
    }
});
//6. Multiply
document.addEventListener("keydown", function(event) {
    if (event.key === "*") {
        firstNumber = parseFloat(display.textContent);   
        operator = '*';
        inputConcat="";   
        isDotUsed=false; 
        display.textContent = operator;
        isEqualClicked=false;
    }
});

//7. Equal using Enter
document.addEventListener("keydown", function(event) {
    if (event.key === "=" || event.key === "Enter") {
        secondNumber = parseFloat(display.textContent); 
        
        if(!isEqualClicked || result !== secondNumber){ //to make sure Equal for one operation works for only one + continue other operation
            result = Operate(firstNumber, secondNumber, operator); //result calls operate()
        }
        else{
            result = result*1;
        }
        isDotUsed=false;
        firstNumber=0;
        inputConcat="";
        operator=null;
        isEqualClicked=true;
        secondNumber=0;
        display.textContent = result;
        

        console.log("isDotUsed "+isDotUsed);
        console.log("firstNumber "+firstNumber);
        console.log("inputConcat "+inputConcat);
        console.log("operator "+ operator);
        console.log("isEqualClicked "+isEqualClicked);
        console.log("secondNumber "+secondNumber)
    }
});
//positive-negative no keydown even because of confusion with '-' operator

//9. Percent
document.addEventListener("keydown", function(event) {
    if (event.key === "%" ) {
        firstNumber = parseFloat(display.textContent);   
        display.textContent = firstNumber/100;
    }
});
//10. dot
document.addEventListener("keydown", function(event) {
    if (event.key === ".") {
        if(!isDotUsed){
            inputConcat = inputConcat+".";
            isDotUsed=true;
        } 
        display.textContent = inputConcat;
    }
});