'use strict'

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;

        case 'DECREMENT':
            return state -1;

        default:
            return state;
    }
};

console.assert(
    counter(0, { type: 'INCREMENT' }) === 1,
    'counter(0, { type: "INCREMENT" }) should return 1 but returned ' + counter(0, { type: 'INCREMENT' })
);

console.assert(
    counter(1, { type: 'INCREMENT' }) === 2,
    'counter(1, { type: "INCREMENT" }) should return 2 but returned ' + counter(1, { type: 'INCREMENT' })
);

console.assert(
    counter(2, { type: 'DECREMENT' }) === 1,
    'counter(2, { type: "DECREMENT" }) should return 1 but returned ' + counter(2, { type: 'DECREMENT' })
);

console.assert(
    counter(3, { type: 'SOMETHING'}) === 3,
    'counter(3, { type: "SOMETHING"}) should return 3 but returned ' + counter(3, { type: 'SOMETHING'})
);

console.assert(
    counter(undefined, {}) === 0,
    'counter(undefined, {}) should return 0 but returned ' + counter(undefined, {})
);