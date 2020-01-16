const square = function(x){
    return x*x;
};

// function square(x){
// return x*x;
// } --> 이렇게 해도 똑같음!

const squareArrow = (x) => {
    return x*x;
}

const squareArrow2 = (x) => x*x;
// when returning a single expression, it's better to use arrow function syntax.

// console.log(square(8));
// console.log(squareArrow(8));
// console.log(squareArrow2(8));

const getFirstName = (fullName) => fullName.split(' ')[0];
// console.log(getFirstName('Junnie Lee'));


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// arguments object - no longer bound with arrow functions
// ES6 의 arrow function 문법을 이용할땐 argumets object에 접근할 수 없다!
const add = (a,b) => {
    // console.log(arguments); --> this would rise an error
    return a+b
};
console.log(add(55,1,1001));

// this keyword - no longer bound
const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in '+ city);
    }
};

user.printPlacesLived();

///////////////////////////////////////////////////////////////////////////////////////////////

// mini-challenge area
const multiplier = {
    numbers: [10,20,30],
    multiplyBy : 2,
    multiply(){
        return this.numbers.map((number)=> number * this.multiplyBy );
    }
};

console.log(multiplier.multiply());

















