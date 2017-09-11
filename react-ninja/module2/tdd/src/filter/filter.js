'use strict'

const filter = (arr = [], func = arr => arr ) => {
    if (!Array.isArray(arr))
        throw new TypeError('First parameter must be an array');

    if (typeof func !== 'function')
        throw new TypeError('Second parameter must be a function');

    const output = [];

    arr.forEach((item, index) => {
        if (func(item, index, arr)) output.push(item);
    });

    return output;
}

export default filter;