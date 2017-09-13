'use strict'

const every = (arr, func) => {
    if (!Array.isArray(arr))
        throw TypeError('First parameter must to be an array');

    if (typeof func !== 'function')
        throw TypeError('Second parameter must to be a function');

    return (function everyInternal(arrInternal, counter) {
        const [head, ...tail] = arrInternal;

        return arrInternal.length === 0 
            ? true
            : !func(head, counter, arr) 
                ? false
                : everyInternal(tail, counter + 1)
    })(arr, 0)
}

export default every;
