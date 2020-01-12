// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

var app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : ['One', 'Two']
};

// JSX - Javascript XML
var template = (
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


var user = {
    name:'Jun Hee Lee',
    age: 25,
    location: 'Seoul, Korea'
};

var userName = 'Jun Hee Lee';
var userAge = 25;
var userLocation = 'Seoul, Korea';
// for dynamic data expression

function getLocation(location){
    if (location) {
        return <p> * Location : {location} </p>;
    } // else, returns 'undefined'
}

var template2 = (
    <div>
        <h1> {user.name? user.name : 'Anonymous'} </h1>
        { (user.age && user.age >= 18) && <p> * Age : {user.age} </p> }
        { getLocation(user.location) }
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // render 'template' contents in 'appRoot' element