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

console.log(square(8));
console.log(squareArrow(8));
console.log(squareArrow2(8));

var getFirstName = function getFirstName(fullName) {
    return fullName.split(' ')[0];
};
console.log(getFirstName('Junnie Lee'));
