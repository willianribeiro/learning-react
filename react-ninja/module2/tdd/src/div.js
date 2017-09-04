'use strict'

const div = (a, b) => {
    if (typeof a !== 'number')
        throw TypeError('Parameter "a" must be a Number');

    if (typeof b !== 'number')
        throw TypeError('Parameter "b" must be a Number');

    return a / b;
}

export default div;