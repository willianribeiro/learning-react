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
// const { createStore } = Redux;
// const store = createStore(counter);


// Implement createStore function
const createStore = (reducer) => {
    let state;
    let subscriptions = [];

    return {
        getState: () => {
            return state;
        },
        dispatch: (action) => {
            state = reducer(state, action);
            subscriptions.forEach((subscription) => {
                subscription();
            });
        },
        subscribe: (callback) => {
            subscriptions.push(callback);
            return () => {
                subscriptions = subscriptions.filter(subscription => (
                    subscription !== callback
                ));
            }
        },
    }
}

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


// Print state after a store.dispach
const unsubscribe = store.subscribe(() => {
    console.log('dispatched an action!', store.getState());
});


// Unsubscribe after 5 seconds
setTimeout(() => {
    unsubscribe();
}, 5000);
