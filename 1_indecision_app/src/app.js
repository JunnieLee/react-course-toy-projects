// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

// JSX - Javascript XML
var template = (
    <div>
        <h1> Indecision App </h1>
        <p>This is some info</p>
        <ol>
            <li>Item one</li>
            <li>Item two</li>
        </ol>
    </div>// should be wrapped in div
);

var template2 = (
    <div>
        <h1> Jun Hee Lee </h1>
        <p> * Age : 25 </p>
        <p> * Location : Seoul, Korea </p>
    </div>
);


var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot); // render 'template' contents in 'appRoot' element