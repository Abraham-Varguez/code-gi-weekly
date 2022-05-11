'use strict'

//Easy 

//the array
const array = [10, 20, 30, 40]

//regular average function
function AVG(num) {
    //arrow function to call back the array (I am still confused abt this part)
    const total = num.reduce((x, y) => x + y, 0);
    //finds the average of the array
    return total / array.length
}

//a variable to call the function
const average = AVG(array);
//calls the function
console.log(average)

//Medium

//I have no clue
const nums = [10, 20, 30, 30, 50]

function target(x) {
    for (i = [0]; i <= [5]; i++) {
        i = nums.indexOf(x)
    }
}
console.log(target(2))

//Hard
//The code is in the IndexWeek6 Html Form

//Very Hard