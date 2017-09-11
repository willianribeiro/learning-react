'use strict'

const find = (arr, func) => {
    if (!Array.isArray(arr))
        throw new TypeError('First parameter must be an array');

    if (typeof func !== 'function')
        throw new TypeError('Second parameter must be a function');

    return (function findInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal;

        return arrInternal.length === 0
            ? undefined
            : func(head, counter, arr)
                ? head
                : findInternal(tail, counter + 1);
    })(arr, 0);
}

export default find;
