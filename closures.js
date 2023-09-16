

// The "temporal dead zone" (TDZ) is a concept introduced with the introduction of let and const in ECMAScript 6 (ES6). It's a specific time period in the code execution where a variable declared with let or const exists, but cannot be accessed. This occurs between the start of the current scope and the point at which the variable is declared.

// During the temporal dead zone, trying to access the variable will result in a ReferenceError. This is a deliberate design choice in order to catch potential issues with variable access before initialization.

function outerFunc(outerVar){
    return function innerFunc(innerVar){
        console.log(outerVar + innerVar)
    }
}
const func = outerFunc(10)
func(5);


console.log(num)
let num =1 ;

console.log(number);
var number  = 3;