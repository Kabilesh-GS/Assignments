let a = "Kabi";
console.log(a);

let b = 42;
console.log(b+1000000);

const pi = 3.14;
console.log("the value of pi is " + pi);

const deva = {
    movie: "coolie",
    job: ["mansion owner", "coolie"],
    real_name : "rajini",
}

const simon = {
  movie: "coolie",
  job: ["watche imports", "organ trafficking"],
  real_name : "Najarjuna",
}

console.log(deva.job);
console.log(simon);

function greet(name){
    return "Hello " + name + "! How are you? Welcome to Whizlabs.";
}
console.log(greet("Kabilesh"));

function add(x,y){
    let returnOfAddition =  x + y;
    return returnOfAddition;
}
console.log(add(5,10));

function multiply (x,y){
    let returnOfMultiplication = x * y;
    return returnOfMultiplication;
}
console.log(multiply(5,10));

function subtract (x,y){
    let returnOfSubtraction = x - y;
    return returnOfSubtraction;
}
console.log(subtract(10,5));

function divide (x,y){
    let returnOfDivision = x / y;
    return returnOfDivision;
}
console.log(divide(10,5));


let addition = (x,y) => x + y;
console.log(addition(10,20));

let subtraction = (x,y) => x - y;
console.log(subtraction(30,10));

let division = (x,y) => x / y;
console.log(division(100,5));

let multipliction = (x,y) => x * y;
console.log(multipliction(20,30));

let numbers = [1,2,3,4,5];
const doubled = () => numbers.map((n) => n * 2);
let resultArray = doubled();
console.log(resultArray); 

let strings = ["apple", "banana", "cherry", "orange"];
const tripled = () => strings.map((s) => {
    let response = "";
    if(s === "banana"){
        response = s + " is expensive"
    }
    if(s === "orange"){
        response = s + " is orange in color"
    }
    if(s === "apple"){
        response = s + " keeps the doctor away"
    }
    if(s === "cherry"){
        response = s + " is red in color"
    }
    return response;
});
let resultStrings = tripled();
console.log(resultStrings);

const fun = () => {
    const message = [...strings] + " are all fruits.";
    return message;
}
console.log(fun());

const joinWith = (...strings) => strings.join(" comes before ");
console.log(joinWith(numbers));  

const cars = [{name: "BMW",Good: true}, {name: "Audi",Good: false}, {name: "volvo",Good: true}, {name: "ford",Good: false}];
const filterFunction = () => {
    const filteredCars = cars.filter((cars) => cars.Good == true);
    return filteredCars;
}
console.log(filterFunction());

const Waitforpizza = async (waitingtime = 100) => {
    return new Promise(
        (resolve) => {
            setTimeout(
                () => resolve("Pizza cooked after " + waitingtime + " ms"), waitingtime);
        }
    );
};

let responseofwaiting = await Waitforpizza(5000);
console.log("Your pizza is ready! collect your pizza.");
console.log(responseofwaiting);