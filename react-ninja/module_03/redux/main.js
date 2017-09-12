'use strict'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state - 1;

        default:
            return state;
    }
};

const { createStore } = Redux;
const store = createStore(counter);

store.subscribe(() => {
    updateView();
});

const increment = () => {
    store.dispatch({ type: 'INCREMENT' });
}

const decrement = () => {
    store.dispatch({ type: 'DECREMENT' });
}

const updateView = () => {
    const target = document.getElementById('js-counter');
    target.innerText = store.getState();
}