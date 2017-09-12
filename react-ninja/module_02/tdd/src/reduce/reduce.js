'use strict'

const reduce = (arr, func, initialValue) => {
    if (!Array.isArray(arr))
        throw new TypeError('First parameter must be an array');

    if (typeof func !== 'function')
        throw new TypeError('Second parameter must be a function');

    let acc = initialValue;
    let arrInternal = arr;

    if (initialValue === undefined) {
        acc = arrInternal[0];
        arrInternal = arr.slice(1);
    }

    for (let i = 0; i < arrInternal.length; i++) {
        acc = func(acc, arrInternal[i], i, arr);
    }

    return acc;
}

export default reduce;
