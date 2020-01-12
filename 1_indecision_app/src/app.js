// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

var app = {
    title : <h1> Indecision App </h1>,
    subtitle : <p>This is some info</p>
};

// JSX - Javascript XML
var template = (
    <div>
        {app.title}
        {app.subtitle}
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>// should be wrapped in div
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
    if (location){
        return location;
    } else {
        return 'Unknown';
    }
}

var template2 = (
    <div>
        <h1> {user.name.toUpperCase() + '!'} </h1>
        <p> * Age : {user.age} </p>
        <p> * Location : {getLocation(user.location)} </p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot); // render 'template' contents in 'appRoot' element