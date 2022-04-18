
// Very Easy
var num = 8;
var num2 = 2;

console.log(num - num2);

//Easy

var name1 = "Abraham";
var name2 = "Christian";


console.log(`${name2} is longer than ${name1} by ${name2.length - name1.length}`);



//Medium 
let userInput = prompt(`Is somebody shouting,whispering, or talking?`);

if (userInput === userInput.toUpperCase()) {
    console.log(alert(`You are Shouting`))
} else if (userInput === userInput.toLowerCase()) {
    console.log(alert(`You are whispering`))
} else {
    console.log(alert(`You are Talking`))
}
console.log(userInput);

//Hard

let num1 = parseInt(prompt(`Enter First Number`));
let num2 = parseInt(prompt(`Enter Second Number`));

const add = num1 + num2

console.log(alert(add))


num1 = parseInt(prompt(`Enter First Number`));
num2 = parseInt(prompt(`Enter Second Number`));

const subtract = num1 - num2

console.log(alert(subtract))


num1 = parseInt(prompt(`Enter First Number`));
num2 = parseInt(prompt(`Enter Second Number`));

const multiply = num1 * num2

console.log(alert(multiply))


num1 = parseInt(prompt(`Enter First Number`));
num2 = parseInt(prompt(`Enter Second Number`));

const divide = num1 / num2

console.log(alert(divide))


//Very Hard