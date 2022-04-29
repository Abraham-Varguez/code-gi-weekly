//Easy
//  Arrow Functions Closure
// const exercising = x => (y) => `Exercising Today: ${x} Minutes Rested: ${y}`

// Normal Closure

const exercising = function (x) {
    return function (y) {    // anon function
        return (`Exercise Today: ${x},  Rest ${y} Minutes`);
    }
}

const run = exercising("Running")
const swim = exercising('Swimming')
const jump = exercising("Jumping")
console.log(run(20))
console.log(swim(30))
console.log(jump(50))

// //Medium

const cutPizzaSlices = function (x) {
    return function (y) {
        return (`Each personn get ${x / y} slices of pizza`)
    }
}

const sharePizza = cutPizzaSlices(8)
console.log(sharePizza(2))
console.log(sharePizza(3))



//Hard
//ENCAPSULATION!!
const pii = {

    constructor() {
        let ssn
        let name
    },


    getName: function () {
        return this.name
    },
    setName: function () {
        return this.name = name
    },

    getSSN: function () {
        return this.ssn;
    },
    setSSN: function () {
        this.ssn = ssn;
    }

};

const ssn = new pii();
ssn.setSSN(String(prompt()))


//

//Very Hard

// const personNumeroUno = {

//     name: 'Abraham'
// job: 'Pharmacy Technician'
// age: 24





// }