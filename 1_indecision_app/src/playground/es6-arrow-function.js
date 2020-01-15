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

console.log(square(8));
console.log(squareArrow(8));
console.log(squareArrow2(8));

const getFirstName = (fullName) => fullName.split(' ')[0];
console.log(getFirstName('Junnie Lee'));