'use strict';

// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

var app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
};

// helper function no_1
var onFormSubmit = function onFormSubmit(e) {
    // e - for event object
    e.preventDefault(); // prevents full page refresh -> yeah 'cause we're gonna make a SPA (Single Page Application)!!
    var option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate(); // update the info and re-render the page
    console.log("form submitted!");
};

// helper function no_2
var removeAll = function removeAll() {
    app.options = [];
    renderTemplate();
};

var onMakeDecision = function onMakeDecision() {
    var randomNum = Math.floor(Math.random() * app.options.length); // 0 <= num < app.options.length
    var option = app.options[randomNum];
    alert(option);
};

var appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);


var renderTemplate = function renderTemplate() {
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
            'button',
            { disabled: app.options.length === 0, onClick: onMakeDecision },
            ' What should I do? '
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            ' Remove All '
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(function (option) {
                return React.createElement(
                    'li',
                    { key: option },
                    ' ',
                    option,
                    ' '
                );
            })
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add Option'
            )
        )
    ) // should be wrapped in div
    ;

    ReactDOM.render(template, appRoot);
};

renderTemplate();
