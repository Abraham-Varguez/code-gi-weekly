// Very Easy

function min(x, y) {
    return x - y
}

console.log(min(Number(prompt('Enter Value')), Number(prompt('Enter Value'))))

// Easy
const firstName = ['Abraham', 'Cheif', 'John']
const lastName = ['Varguez', 'Keef', 'Doe']
const age = [24, 300, 30]

console.log(`Hello, my name is ${firstName[1]} ${lastName[1]} and I'm ${age[1]} years old`)

// Medium 
let number = prompt(`Select a month (1 = January, 2 = Febuary...)`)

let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

if (number === '1') {
    console.log(alert(month[0]))
}
else if (number === '2') {
    console.log(alert([month[1]]))
}
else if (number === '3') {
    console.log(alert([month[2]]))
}
else if (number === '4') {
    console.log(alert([month[3]]))
}
else if (number === '5') {
    console.log(alert([month[4]]))
}
else if (number === '6') {
    console.log(alert([month[5]]))
}
else if (number === '7') {
    console.log(alert([month[6]]))
}
else if (number === '8') {
    console.log(alert([month[7]]))
}
else if (number === '9') {
    console.log(alert([month[8]]))
}
else if (number === '10') {
    console.log(alert([month[9]]))
}
else if (number === '11') {
    console.log(alert([month[10]]))
}
else if (number === '12') {
    console.log(alert([month[11]]))
}
else {
    console.log(alert('Invalid Input'))
}

// Hard

const jerryMass = 45
const jerryHeight = 10

const tomMass = 8
const tomHeight = 9

const bmiJerry = jerryMass / (jerryHeight ** 2)
const bmiTom = tomMass / (tomHeight ** 2)


const topBMI = bmiTom > bmiJerry


const compareBMI = topBMI ? `Tom's BMI (${bmiTom})is higher than Jerry's BMI (${bmiJerry}` : `Jerry's BMI (${bmiJerry}) is higher than Tom's BMI (${bmiTom})`

console.log(compareBMI)