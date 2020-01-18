
let user = {
    name:'Jun Hee Lee',
    age: 25,
    location: 'Seoul, Korea'
};

let userName = 'Jun Hee Lee';
let userAge = 25;
let userLocation = 'Seoul, Korea';
// for dynamic data expression

function getLocation(location){
    if (location) {
        return <p> * Location : {location} </p>;
    } // else, returns 'undefined'
}

const template2 = (
    <div>
        <h1> {user.name? user.name : 'Anonymous'} </h1>
        { (user.age && user.age >= 18) && <p> * Age : {user.age} </p> }
        { getLocation(user.location) }
    </div>
);


const appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);