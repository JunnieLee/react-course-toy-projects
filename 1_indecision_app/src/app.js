// src 아래에 있는 이 app.js 파일이 babel을 통해서 compile된 다음에
// 그 compile된 내용이 scripts 안에 있는 app.js파일로 전달될것임
console.log('App.js is running!');

const app = {
    title : 'Indecision App',
    subtitle : 'Put your life in the hands of a computer',
    options : []
};

// helper function no_1
const onFormSubmit = (e) => { // e - for event object
    e.preventDefault();  // prevents full page refresh -> yeah 'cause we're gonna make a SPA (Single Page Application)!!
    const option = e.target.elements.option.value;
    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
    }
    renderTemplate(); // update the info and re-render the page
    console.log("form submitted!");
};

// helper function no_2
const removeAll = () => {
    app.options=[];
    renderTemplate();
};

const appRoot = document.getElementById('app');
// ReactDOM.render(template, appRoot);


const renderTemplate = () => {
    const template = (
        <div>
            <h1> {app.title} </h1>
            {app.subtitle && (<p> {app.subtitle} </p>)}
            <p> { app.options.length > 0 ? 'Here are your options': 'No options' } </p>
            <p> { app.options.length } </p>
            <button onClick={removeAll}> Remove All </button>
            <ol>
                <li>Item one</li>
                <li>Item two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>

        </div> // should be wrapped in div
    );

    ReactDOM.render(template, appRoot);
};

renderTemplate();