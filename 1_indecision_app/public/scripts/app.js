'use strict';

// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

// JSX - Javascript XML
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        app.title,
        ' '
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle,
        ' '
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.options.length > 0 ? 'Here are your options' : 'No options',
        ' '
    ),
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

function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            ' * Location : ',
            location,
            ' '
        );
    } // else, returns 'undefined'
}

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        ' ',
        user.name ? user.name : 'Anonymous',
        ' '
    ),
    user.age && user.age >= 18 && React.createElement(
        'p',
        null,
        ' * Age : ',
        user.age,
        ' '
    ),
    getLocation(user.location)
);

////////////////////////////////////////////////////////////////////////////

var count = 0; // changable variable
var addOne = function addOne() {
    console.log('addOne');
};
var minusOne = function minusOne() {
    console.log('minusOne');
};
var reset = function reset() {
    console.log('reset');
};

var template3 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count : ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne },
        ' +1 '
    ),
    React.createElement(
        'button',
        { onClick: minusOne },
        ' -1 '
    ),
    React.createElement(
        'button',
        { onClick: reset },
        ' reset '
    )
);

console.log(template3);

var appRoot = document.getElementById('app');

ReactDOM.render(template3, appRoot); // render 'template' contents in 'appRoot' element
