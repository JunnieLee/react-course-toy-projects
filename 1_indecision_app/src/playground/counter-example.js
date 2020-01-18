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