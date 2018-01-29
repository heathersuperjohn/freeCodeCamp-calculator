window.onload = function(){
    
};

var contents = {
  nums : {
  "decimal" : ".",
  "zero" : 0,
  "one" : 1,
  "two" : 2,
  "three" : 3,
  "four" : 4,
  "five" : 5,
  "six" : 6,
  "seven" : 7,
  "eight" : 8,
  "nine" : 9 
  },
  operators : {
  "plus" : "+",
  "minus" : "-",
  "multiply" : "*",
  "divide" : "/"
  },
  "AC" : "AC",
  "CE" : "CE",
  "equals" : "="
  };

// link the elements in "contents" to actual element ids
// add event listeners to all the objects

var listener = document.querySelector(".base");
listener.addEventListener("click", buttonClick, false);

var inputArray = [];
var equals = false;
var numCounter = 0;
  
function buttonClick(button) {
    // if the of the object clicked is not that of the whole screen...
    if (button.target !== button.currentTarget) {
        
        var arrayCounter = inputArray.length;
        console.log("num counter: " , numCounter);

        
        // get the id of that object
        var clickedItem = button.target.id;
        
        // a variable that stores all input as a string, for calculation and returning
        var formula = inputArray.join("");
        
        // using the AC button clears the input and result, sets the screen to "0"
        if (contents[clickedItem] === "AC"){
          inputArray = [];
          document.getElementById("input").innerHTML = "0";
          document.getElementById("equation").innerHTML = "";
          numCounter = 0;
        }
        
        // using the CE button deletes the last key input
        if (contents[clickedItem] === "CE"){
          console.log(inputArray[inputArray.length-1]);
          // reduces the counter of the strictly allowed ten entered numbers by one
          if(Number.isInteger(inputArray[inputArray.length-1])){
            numCounter = numCounter - 1;
            console.log("numCount: ", numCounter);
            }
          inputArray.pop();
          document.getElementById("equation").innerHTML = inputArray.join("");
          console.log(inputArray);
          console.log(formula);
        }
        
        if(contents.nums[clickedItem] !== undefined){    
          if(equals === true){
            // if you're entering a number after hitting equals, it should start a fresh equation
            formula = "";
            inputArray = [];
          } equals = false;
          numCounter++;
          var number = contents.nums[clickedItem];
          // can't hold more than 10 numbers in the display
          if(numCounter < 11) {
            inputArray.push(number);
            console.log(inputArray.length-numCounter, inputArray.length-1);
            // to display a multi-digit number as it's entered
            var currentNum = number;
            if(inputArray.length > 1){
              currentNum = inputArray.slice(inputArray.length-numCounter);
              console.log("value of the slice: ", inputArray.slice(inputArray.length-numCounter));
              currentNum = currentNum.join("");
            }
            console.log("current", currentNum);
            document.getElementById("input").innerHTML = currentNum;
            document.getElementById("equation").innerHTML = formula + number;
            }
        }
        
        if (contents.operators[clickedItem] !== undefined) {
          numCounter = 0;
          equals = false;
          var operator = contents.operators[clickedItem];  
          document.getElementById("input").innerHTML = operator;
          inputArray.push(operator);
          document.getElementById("equation").innerHTML = formula + operator;
        }
        
        if (contents[clickedItem] === "="){
            numCounter = 0;
            document.getElementById("equation").innerHTML = formula;
            // calculates the result
            var result = eval(formula);
            console.log("result: ", result);
            // puts the result in the input
            if(result < 9999999999){
            //document.getElementById("input").innerHTML = result;
            var resultWord = result.toString();
            console.log("rw: ",resultWord);
            document.getElementById("input").innerHTML = resultWord.slice(0,11);
            }
            else {
              document.getElementById("input").innerHTML = "wow, huge!";
            }            
            console.log(inputArray);
            equals = true;
        }
    }
    button.stopPropagation();
}



/*
*/
