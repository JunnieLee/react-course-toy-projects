var nameVar = 'Andrew';
var nameVar = 'Mike'; // overrides the former one
console.log('nameVar', nameVar);

let nameLet = 'Jen';
let nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Frank';
// const nameConst = 'Gunther'; --> this would rise an error!
console.log('nameConst', nameConst);

function getPetName(){
    var petName = 'Hal';
    return petName;
}

const petName= getPetName();
console.log(getPetName);


// Block scoping

var fullName = 'Andrew Mead';
let firstName; // re-assigned 될 여지가 없는 거면 const로 하면 되겠지

if (fullName){
    firstName = fullName.split(' ')[0];
    // let & const --> block scoped
    // var --> function scoped
    console.log(firstName);
}

console.log(firstName);
// 만약에 const나 let으로 해놓고 block 밖에서 얘를 print하려고 하면 에러가 뜨겠지
// 오로지 var일때만 block안에서 가능









