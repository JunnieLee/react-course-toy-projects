'use strict';

var square = function square(x) {
    return x * x;
};

// function square(x){
// return x*x;
// } --> 이렇게 해도 똑같음!

var squareArrow = function squareArrow(x) {
    return x * x;
};

var squareArrow2 = function squareArrow2(x) {
    return x * x;
};
// when returning a single expression, it's better to use arrow function syntax.

// console.log(square(8));
// console.log(squareArrow(8));
// console.log(squareArrow2(8));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
// console.log(getFirstName('Junnie Lee'));


/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// arguments object - no longer bound with arrow functions
// ES6 의 arrow function 문법을 이용할땐 argumets object에 접근할 수 없다!
var add = function add(a, b) {
    // console.log(arguments); --> this would rise an error
    return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound
var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived: function printPlacesLived() {
        var _this = this;

        return this.cities.map(function (city) {
            return _this.name + ' has lived in ' + city;
        });
    }
};

user.printPlacesLived();

///////////////////////////////////////////////////////////////////////////////////////////////

// mini-challenge area
var multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 2,
    multiply: function multiply() {
        var _this2 = this;

        return this.numbers.map(function (number) {
            return number * _this2.multiplyBy;
        });
    }
};

console.log(multiplier.multiply());
