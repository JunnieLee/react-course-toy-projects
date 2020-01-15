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
    printPlacesLived: function (){
        console.log(this.name);
        console.log(this.cities);

        // this.cities.forEach(function (city){
        //    console.log(this.name + ' has lived in ' + city); --> this로 접근불가
        //     --> gets a Type Error : Cannot read property 'name' of undefined
        //});
        // 접근하고 싶으면,
        // 위에 const that = this; 이런식으로 하나 변수 잡아주고
        // 그 뒤부터 계속 that.name 과 같이 접근하면 됨! --> 이건 오래된 work-around 방식..
        // 근데 arrow function을 이용하면 이렇게 하지 않아도됨!!
    }
};

user.printPlacesLived();


















