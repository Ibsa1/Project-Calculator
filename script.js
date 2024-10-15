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
    //secondInput="";
    console.log(firstNumber);
    console.log(secondNumber);
    console.log(result);
    display.textContent="0"; //This will be executed when the clear button is clicked
});

//'+' Add operator
const addOperator = document.querySelector("#add");
addOperator.addEventListener("click", function() {
    firstNumber = parseFloat(display.textContent); //value of <div class="display"  
    operator = '+';
    console.log(firstNumber);
    inputConcat="";    
    display.textContent = "";
})

//'-' Subtract operator
//'/' Divide operator
//'*' Divide operator

//'=' Equal operator
const equalOperator = document.querySelector("#equal");
equalOperator.addEventListener("click", function() {
    secondNumber = parseFloat(display.textContent); //value of <div class="display" 
    //console.log("second" + secondNumber);
    result = Operate(firstNumber, secondNumber, operator); //result calls operate()
    //console.log(result);
    display.textContent = result;
})

//1. Display Number 1
const displayOne = document.querySelector("#one");
displayOne.addEventListener("click", function() {
    //display.replaceChildren("1");
    inputConcat = inputConcat+"1";
    display.textContent = inputConcat;
})

//2. Display Number 2
const displayTwo = document.querySelector("#two");
displayTwo.addEventListener("click", function() {
    //display.replaceChildren("1");
    inputConcat = inputConcat+"2";
    display.textContent = inputConcat;
})

//3. Display Number 3
//4. Display Number 4
//5. Display Number 5
//6. Display Number 6
//7. Display Number 7
//8. Display Number 8
//9. Display Number 9
//0. Display Number 0


//when operator is clicked firstNumber will be stored 
//when secondNumber is clicked and Equal operator is clicked it calls operate()