'use strict'

// Create a redux reducer
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


// Create store
const { createStore } = Redux;
const store = createStore(counter);


// Get DOM elements
const $counter = document.querySelector('[data-id="counter"]');
const $increment = document.querySelector('[data-id="increment"]');
const $decrement = document.querySelector('[data-id="decrement"]');


// Add event listeners
$increment.addEventListener('click', () => {
    store.dispatch({ type: 'INCREMENT' });
});
$decrement.addEventListener('click', () => {
    store.dispatch({ type: 'DECREMENT' });
});


// Update view after a store.dispatch
store.subscribe(() => {
    $counter.innerText = store.getState();
});
