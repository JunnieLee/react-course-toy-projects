'use strict';

// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

var app = {
    title: React.createElement(
        'h1',
        null,
        ' Indecision App '
    ),
    subtitle: React.createElement(
        'p',
        null,
        'This is some info'
    )
};

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    app.title,
    app.subtitle,
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Item one'
        ),
        React.createElement(
            'li',
            null,
            'Item two'
        )
    )
) // should be wrapped in div
;

var user = {
    name: 'Jun Hee Lee',
    age: 25,
    location: 'Seoul, Korea'
};

var userName = 'Jun Hee Lee';
var userAge = 25;
var userLocation = 'Seoul, Korea';
// for dynamic data expression
var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name.toUpperCase() + '!',
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' * Age : ',
        user.age,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' * Location : ',
        user.location,
        ' '
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // render 'template' contents in 'appRoot' element
