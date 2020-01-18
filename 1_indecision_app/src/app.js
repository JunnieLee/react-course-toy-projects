// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : ['One', 'Two']
};

// JSX - Javascript XML
const template = (
    <div>
        <h1> {app.title} </h1>
        {app.subtitle && (<p> {app.subtitle} </p>)}
        <p> { app.options.length > 0 ? 'Here are your options': 'No options' } </p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>

    </div> // should be wrapped in div
);


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


////////////////////////////////////////////////////////////////////////////

let count = 0; // changable variable
const addOne = () => {
    count++;
    console.log('addOne');
    renderCounterApp();
};
const minusOne = () => {
    count--;
    console.log('minusOne');
    renderCounterApp();
};
const reset = () => {
    count = 0;
    console.log('reset');
    renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
    // we're later gonna do this by react components
    // re-rendering everytime like this is extremely inefficient...
    const template3 = (
        <div>
            <h1>Count : {count}</h1>
            <button onClick={addOne}> +1 </button>
            <button onClick={minusOne}> -1 </button>
            <button onClick={reset}> reset </button>
        </div>
    );

    ReactDOM.render(template3, appRoot);
}

renderCounterApp();