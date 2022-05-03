'strict mode'

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

class Pii {
    #ssn;
    constructor(name, ssn) {
        this.name = name;
        this.#ssn = ssn;


    }

    getSSN() {
        return this.#ssn
    }

}

let abraham = new Pii('Abraham', '123-45-6789');


//Very Hard

class Person {
    constructor(name, job, age) {
        this.name = name;
        this.job = job;
        this.age = age;
    }
    exercise(x) {
        return console.log(`${this.name} jumps into the Pool`)
    };
    fetchJob() {
        return console.log(`${this.name} is a ${this.job}`)
    };
}

let person01 = new Person('Abraham', 'Student', 24);

person01.exercise()
person01.fetchJob()



class Programmer extends Person {
    constructor(name, job, age, language) {
        super(name, job, age);
        this.language = language;
        this.busy = true;
        this.listLanguages = ['English']

    }

    completeTask() {
        this.busy = false
        return this;
    };
    acceptTask() {
        this.busy = true
        return this;
    }
    offerNewTask() {

        if (this.busy = true) {
            console.log(`${this.name} is not available to accept tasks, try again later...`)
        } else {
            console.log(`${this.name} is available for a new task`)
        }
    };

    learnLanguage(val) {
        this.listLanguages.push(val)

    }


}

let programmer01 = new Programmer('Abraham', 'Microsoft', 25, 'English')

programmer01.acceptTask().offerNewTask()

programmer01.learnLanguage('Spanish')
console.log(programmer01.listLanguages)