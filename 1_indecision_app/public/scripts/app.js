'use strict';

// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

// JSX - Javascript XML
var template = React.createElement(
  'h1',
  null,
  ' Indecision App '
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot); // render 'template' contents in 'appRoot' element
